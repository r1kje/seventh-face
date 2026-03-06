<script setup></script>

<template>
  <header class="header-main">
    <router-link to="/" class="logo">
      <img src="../public/logo-main.png" alt="Логотип"/>
    </router-link>
    <nav class="navbar">
      <ul>
        <li class="header_nav_item"><router-link to="/">Главная</router-link></li>
        <li class="header_nav_item"><router-link to="/store">Наши магазины</router-link></li>
        <li class="header_nav_item"><router-link to="/contact">Контакты</router-link></li>
      </ul>
    </nav>
  </header>

  <footer class="footer-main">
    <router-link to="/">Главная</router-link>
    <router-link to="/store">Наши магазины</router-link>
    <router-link to="/contact">Контакты</router-link>
  </footer>

</template>

<style>

body {
  background-color: #808080;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>

<style scoped>
.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo img {
  max-width: 100%;
  height: auto;
  width: 80px;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.footer-main {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

</style>
