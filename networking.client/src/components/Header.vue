<template>
  <header class="header">
    <div class="header-content">
      <img src="@/assets/logo2.png" alt="Networking" class="logo">
      <button @click="toggleMenu" class="menu-button" v-if="isMobile">{{ menuButtonText }}</button>
    </div>
    <nav class="navbar" :class="{ 'show-menu': showMenu, 'mobile-navbar': isMobile }">
      <a href="#about" @click.prevent="scrollToSection('about')">О проекте</a>
      <a href="#gallery" @click.prevent="scrollToSection('gallery')">Галерея</a>
      <a href="#schedule" @click.prevent="scrollToSection('schedule')">Расписание</a>
      <a href="#faq" @click.prevent="scrollToSection('faq')">FAQ</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showMenu: false,
      isMobile: window.innerWidth < 768,
    };
  },
  computed: {
    menuButtonText() {
      return this.showMenu ? 'Close' : 'Menu';
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    scrollToSection(id) {
      this.showMenu = false;
          this.$nextTick(() => { // Ждем завершения обновления DOM
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    });
    },
    handleResize() {
      this.isMobile = window.innerWidth < 768;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
  .logo {
    max-width: 700px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    width: 100%;
    margin-bottom: 40px;
    background-color: #ff6600;
    color: #ffffff;
    padding: 20px 0;
    text-align: center;
    position: relative;
  }

  .header-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile-title {
    margin: 0;
  }

  .desktop-title {
    font-size: 3rem;
    margin: 0;
    flex: 1;
    text-align: center;
  }

  .menu-button {
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

    .menu-button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

  .navbar {
    display: flex;
    justify-content: center;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: 20px;
    transition: max-height 0.3s ease;
    overflow: hidden;
  }

    .navbar a {
      margin: 0 15px;
      text-decoration: none;
      color: #ffffff;
      font-weight: bold;
      flex-shrink: 0;
      font-size: 1rem;
      transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
      padding: 8px 15px; /* Увеличиваем внутренние отступы */
      border-radius: 5px;
      display: inline-block; /* Убедимся, что элемент является блочным, но остается в строке */
    }

      .navbar a:hover {
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 5px; /* Округляем углы фона */
        transform: scale(1.05); /* Увеличиваем размер элемента при наведении */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Добавляем тень для эффекта выделения */
      }

  @media (max-width: 767px) {
    .logo {
      max-width: 250px;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }

    .header {
      background-color: #1a1a1a;
      text-align: left;
    }


    .navbar {
      display: none;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      transition: max-height 0.3s ease;
      overflow: hidden;
    }

      .navbar.show-menu {
        display: flex;
      }

      .navbar a {
        margin: 10px 0;
      }
  }
</style>
