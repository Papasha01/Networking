<template>
  <section class="schedule" id="schedule">
    <h2>Расписание мероприятий</h2>
    <div class="event-list">
      <div v-for="(event, index) in events" :key="index" class="event-card">
        <img :src="event.image" :alt="event.title" class="event-image" />
        <div class="event-details">
          <h3 class="event-title">{{ event.title }}</h3>
          <p class="event-description"><strong>Что вас ждет:</strong> {{ event.description }}</p>
          <p class="event-date"><strong>Дата:</strong> {{ event.date }}</p>
          <p class="event-location"><strong>Место:</strong> {{ event.location }}</p>
        </div>
        <button class="buy-button" @click="buyTicket(event)">Купить билет</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Schedule',
  data() {
    return {
      events: [
        {
          title: 'Бизнес-завтрак',
          description: 'Встреча успешных предпринимателей за чашечкой кофе.',
          image: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg',
          date: '15.11.2023',
          location: 'Кафе "Уют"',
        },
        {
          title: 'Конференция по стартапам',
          description: 'Обмен опытом и поиск инвесторов для ваших идей.',
          image: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg',
          date: '20.11.2023',
          location: 'Конференц-зал "Прагматика"',
        },
        {
          title: 'Вечерний нетворкинг',
          description: 'Неформальная встреча в уютной атмосфере.',
          image: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg',
          date: '25.11.2023',
          location: 'Бар "Атмосфера"',
        },
        {
          title: 'Вечерний нетворкинг',
          description: 'Неформальная встреча в уютной атмосфере.',
          image: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg',
          date: '25.11.2023',
          location: 'Бар "Атмосфера"',
        },
        {
          title: 'Вечерний нетворкинг',
          description: 'Неформальная встреча в уютной атмосфере.',
          image: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg',
          date: '25.11.2023',
          location: 'Бар "Атмосфера"',
        },
        {
          title: 'Вечерний нетворкинг',
          description: 'Неформальная встреча в уютной атмосфере.',
          image: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg',
          date: '25.11.2023',
          location: 'Бар "Атмосфера"',
        },
      ],
    };
  },
  methods: {
    buyTicket(event) {
      alert(`Вы выбрали мероприятие: ${event.title}`);
    },
  },
};
</script>

<style scoped>
  .schedule {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    padding: 40px 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

    .schedule h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #ff6600;
      text-align: center;
    }

  .event-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .event-card {
    background: linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%);
    border: 1px solid #ddd;
    border-radius: 16px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
    overflow: hidden;
    position: relative;
    display: flex; /* Добавлено */
    flex-direction: column; /* Добавлено */
    justify-content: space-between; /* Добавлено */
  }

    .event-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15);
      background: linear-gradient(135deg, #eafaff 0%, #ffffff 100%);
    }

  .event-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
    transition: transform 0.3s ease;
  }

  .event-details {
    flex-grow: 1; /* Добавлено */
  }

  .event-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #ff6600;
    font-weight: bold;
  }

  .event-description {
    font-size: 1rem;
    color: #666666;
    margin-bottom: 10px;
    line-height: 1.5;
  }

  .event-date {
    font-size: 0.9rem;
    color: #666666;
    margin-bottom: 5px;
  }

  .event-location {
    font-size: 0.9rem;
    color: #666666;
    margin-bottom: 15px;
  }

  .buy-button {
    background-color: #ff6600;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }

    .buy-button::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: width 0.5s ease, height 0.5s ease, opacity 0.5s ease;
    }

    .buy-button:hover::before {
      width: 200%;
      height: 200%;
      opacity: 1;
    }

    .buy-button:hover {
      background-color: #cc4c00;
      transform: scale(1.05);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }
  @media (max-width: 768px) {
    .event-card {
      width: 100%;
      margin-left: auto;
      margin-right:auto;
    }
    .schedule {
      width: 100%;
    }
  }
</style>
