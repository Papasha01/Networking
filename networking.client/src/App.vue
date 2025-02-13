<template>
  <Header />
  <About />
  <Gallery />
  <Schedule />
  <FAQ />
  <Footer />
</template>

<script>
  import Header from './components/Header.vue';
  import About from './components/About.vue';
  import Gallery from './components/Gallery.vue';
  import Schedule from './components/Schedule.vue';
  import FAQ from './components/FAQ.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Header,
      About,
      Gallery,
      Schedule,
      FAQ,
      Footer,
    },
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    color: #333333;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
</style>
