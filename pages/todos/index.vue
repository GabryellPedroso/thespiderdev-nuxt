<template lang="pug">
  h1 {{ todos }}
</template>

<script>
export default {
  nama: 'todos',
  
  data() {
    return {
      todos: []
    }
  },

  mounted() {
    this.$axios.get('/todos').then((todos) => {
      this.todos = todos
    })
  }

}
</script>

<style lang="scss" scoped>

</style>