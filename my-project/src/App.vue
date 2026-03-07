<script setup></script>

<template>
  <div class="home-page">
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
  <main class="page-content">
    <router-view/>
  </main>
    <footer class="footer-main">
    <router-link to="#" class="pupkin">ООО "Пупкин"</router-link>
    <router-link to="#" class="pupkin">privacy policy: none</router-link>
    <router-link to="#" class="pupkin">Пользовательское соглашение на всё</router-link>
  </footer>
  </div>

</template>

<style>

body {
  background-color: #808080;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>

<style scoped>
/*--------------- стили для всей странцы ---------------*/
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* --------------- основной контент / каталог ---------------*/
.page-content {
  flex: 1;
}

/*--------------- шапка ---------------*/
.header-main {
  background-color: beige;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.logo img {
  border: 1px;
  margin: 1px;
  max-width: 100%;
  height: auto;
  width: 80px;
}

.header_nav_item {
  font-style: Arial, sans-serif, normal;
  font-weight: 600;
}


/*--------------- подвал ---------------*/
.footer-main {
  background-color: beige;
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 10px;
  justify-content: center;
}

a {
  text-decoration: none;
  color: black;
}

</style>
