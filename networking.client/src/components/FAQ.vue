<template>
  <section class="faq" id="faq">
    <h2>Часто задаваемые вопросы (FAQ)</h2>
    <div class="faq-item">
      <h3>Как зарегистрироваться на мероприятие?</h3>
      <p>Для регистрации нажмите кнопку "Купить билет" на выбранном мероприятии и следуйте инструкциям.</p>
    </div>
    <div class="faq-item">
      <h3>Можно ли вернуть билет?</h3>
      <p>Да, возврат возможен за 7 дней до начала мероприятия. Для этого свяжитесь с нашей службой поддержки.</p>
    </div>
    <div class="faq-item">
      <h3>Есть ли скидки для групп?</h3>
      <p>Да, при покупке билетов для группы от 5 человек предоставляется скидка 10%.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
};
</script>

<style scoped>
  .faq {

    padding: 40px 20px;
    border-radius: 8px;
    text-align: center; /* Центрирование текста */
  }

    .faq h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #ff6600;
    }

  .faq-item {
    margin-bottom: 20px;
  }

    .faq-item h3 {
      margin-bottom: 10px;
      color: #ff6600;
    }
</style>
