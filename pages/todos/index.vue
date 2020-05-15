<template lang="pug">
  #checklist-app
    header
      h1(v-show="false") theSpiderDev
      h2 Checklist
    
    b-container
      input(@keydown.enter="add" v-model="label" type="text" placeholder="Levar o lixo para fora..." autofocus)
      b-spinner#loader(v-show="loading" variant="success" label="Spinning" small)
      
      ul
        li(v-for="(task, index) in list" :key="index")
          b-form-checkbox(
            v-if="task.label"
            @change="done => change(task.id, { done })"
            :id="`task-${task.id}`"
            v-model="task.done"
            name="task")
            input(
              @change="task.label ? () => change(task.id, { label: task.label }) : () => delete(task.id)"
              v-model="task.label").task-label
</template>

<script>
export default {
  nama: 'Checklist',

  data() {
    return {
      loading: false,
      label: '',
      list: []
    }
  },

  mounted() {
    this.loadList()
  },

  methods: {
    loadList() {
      this.$axios.get('/todos').then((res) => {
        this.list = res.data
      })
    },
    add() {
      const { label } = this
      if (label) {
        this.loading = true
        this.$axios.post('/todos', { label }).then((res) => {
          this.list.push(res.data)
          this.label = ''
          this.loading = false
        })
      }
    },
    change(id, obj) {
      if (obj.hasOwnProperty('label') && obj.label === '') {
        return this.delete(id)
      } else {
        return this.$axios.put(`/todos/${id}`, obj)
      }
    },
    delete(id) {
      this.$axios.delete(`/todos/${id}`).then((res) => {
        const index = this.list.indexOf(res.data)
        this.list.splice(index, 1)
      })
    }
  }

}
</script>

<style lang="scss" scoped>
  #checklist-app {
    header {
      padding: 30px;
      text-align: center;
    }

    input {
      width: 100%;
      padding: 10px 15px;
      border: 1px solid #0002;
      border-radius: 10px;
      outline: none;
      transition: ease-in-out 0.1s;
      &:focus {
        box-shadow: 0 0 5px #0003;
      }
    }

    #loader {
      margin-left: 5px;
      transition: ease-out 0.1s;
    }

    ul {
      list-style: none;
      padding-left: 15px;
      margin: 15px 0;

      li {
        margin: 10px 0;

        .task-label {
          display: inline-flex;
          width: auto;
          margin: 0;
          padding: 0;
          border: none;
          border-radius: 0;
          &:focus {
            box-shadow: none;
            border-bottom: 1px solid #0001;
          }
        }
      }
    }
  }
</style>