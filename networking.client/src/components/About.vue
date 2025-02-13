<template>
  <section class="about" id="about">
    <div class="about-content">
      <h2>О проекте</h2>
      <p>
        Наш проект направлен на создание уникальных возможностей для нетворкинга. Мы организуем мероприятия, где предприниматели, инвесторы и эксперты могут встретиться, обменяться опытом и найти новых партнеров.
      </p>
      <div class="about-icons">
        <span class="icon">🤝</span>
        <span class="icon">💡</span>
        <span class="icon">🚀</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
  .about {
    margin-bottom: 40px;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    padding: 60px 20px;
    background: linear-gradient(to bottom, #ffffff, #f9f9f9);
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

.about:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ff6600;
  font-weight: bold;
}

.about p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
}

.about-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.about-icons .icon {
  font-size: 2rem;
  transition: transform 0.3s ease;
}

.about-icons .icon:hover {
  transform: scale(1.2);
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .about {
    padding: 40px 15px;
  }

  .about h2 {
    font-size: 2rem;
  }

  .about p {
    font-size: 1rem;
  }

  .about-icons .icon {
    font-size: 1.5rem;
  }
}
  @media (max-width: 768px) {
    .about {
      width: auto; /* Убираем фиксированную ширину */
      margin-left: 0; /* Убираем автоматические отступы по бокам */
      margin-right: 0;
    }
  }
</style>
