<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img src="@/assets/N-02.png" alt="Networking" class="logo">
        </div>
        <div class="col-md-3">
          <h4>Компания</h4>
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Карьера</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4>Ссылки</h4>
          <ul>
            <li><a href="#">Telgram</a></li>
            <li><a href="#">VK</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>

      </div>
      <div class="additional-info">
        <p>"Дорогу осилит идущий..."</p>
      </div>
      <div class="copyright">
        <p>&copy; 2024-2025 Networking</p>
        <p>
          <a href="#">Конфиденциальность</a> |
          <a href="#">Правовые аспекты</a> |
          <a href="#">Безопасность</a> |
          <a href="#">Статус сервиса</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  .logo {
    max-width: 115px;
  }
  .footer {
    background-color: #1a1a1a;
    color: white;
    padding: 40px 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .col-md-3 {
    flex: 1;
  }

  h4 {
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .additional-info {
    margin-top: 40px;
    border-top: 1px solid #333;
    padding-top: 20px;
  }

  .copyright {
    margin-top: 20px;
  }
</style>
