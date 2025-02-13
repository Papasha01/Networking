<template>
  <section class="gallery" id="gallery">
    <!--<h2>Галерея</h2>-->
    <Carousel v-bind="config">
      <Slide v-for="image in images" :key="image.id">
        <img :src="image.url" alt="image" class="carousel-image" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script>
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';

  export default {
    name: 'Gallery',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data() {
      return {
        images: [
          { id: 1, url: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg' },
          { id: 2, url: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg' },
          { id: 3, url: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg' },
          { id: 4, url: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg' },
          { id: 5, url: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg' },
          { id: 6, url: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg' },
          { id: 7, url: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg' },
          { id: 8, url: 'https://anime-conventions.ru/Frontend/images/convent_logos/year_2023/hanami-fest-22-iyulya-2023-spb.jpg' },
        ],
        config: {
          autoplay: 4000,
          itemsToShow: 3,
          wrapAround: true,
          gap: 11,
        },
      };
    },
    mounted() {
      this.updateConfig();
      window.addEventListener('resize', this.updateConfig);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.updateConfig);
    },
    methods: {
      updateConfig() {
        if (window.innerWidth < 768) {
          this.config.itemsToShow = 1; 
        } else {
          this.config.itemsToShow = 4;
        }
      },
    },
  };
</script>

<style scoped>
  .gallery {

    margin-bottom: 40px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(to bottom, white, #f9f9f9);
    border-radius: 8px;
  }

    .gallery h2 {
      padding: 0px 20px;
      font-size: 2rem;
      margin-bottom: 20px;
      color: #ff6600;
    }

  .carousel-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  @media (max-width: 768px){
    .gallery {
      width: auto; /* Убираем фиксированную ширину */
      margin-left: 0; /* Убираем автоматические отступы по бокам */
      margin-right: 0;
    }
  }
</style>
