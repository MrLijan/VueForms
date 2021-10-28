<template>
  <div>
    <section class="navbar">
      <h2>Liram's Logo</h2>
    </section>
    <section class="router-view">
      <router-view />
    </section>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="css" scoped>

.navbar {
  height: 30%;
  background-color: red;
}

</style>