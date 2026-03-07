<template>
  <div class="container">
    <!-- <h1>Welcome to the Home Page</h1>  -->
    <div class="block">
      <p>Это какой-то товар, например, гаечный ключ на 13</p>
    </div>
    <div class="block">
      <p>Это другой товар, например, отвертка аовловвоалавававававав</p>
    </div>
    <div class="block">
      <p>Это третий товар, например, шуруповерт</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.block {
  width: 250px;
  height: 300px;
  background-color: beige;
  margin: 20px;
  display: flex;
  vertical-align: top;
}
</style>