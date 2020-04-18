<template lang="pug">
  .toggle-component(:style="toggleComponentStyle")
    label(
      v-if="label"
      :style="labelStyle"
      @click="change"
      v-html="label")

    .toggle-container(@click="change" :style="toggleContainerStyle")
      .toggle(:style="toggleStyle")
</template>

<script>
export default {
  name: 'Toggle',
  
  props: {
    id: {
      type: String,
      default: '',
    },
    toggleContainerColorOff: {
      type: String,
      default: '#e0e0e0',
    },
    toggleContainerColorOn: {
      type: String,
      default: '#aeeed2',
    },
    toggleColorOff: {
      type: String,
      default: '#fff'
    },
    toggleColorOn: {
      type: String,
      default: '#00cb72'
    },
    padding: {
      type: Number,
      default: 4
    },
    label: {
      type: String,
      default: '',
    },
    labelColor: {
      type: String,
      default: '#2c3e50',
    },
    fontSize: {
      type: String,
      default: 'inherit',
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    labelMargin: {
      type: String,
      default: '10px'
    },
    checked: {
      type: Boolean,
      required: true,
    },
    size: {
      type: Number,
      default: 30,
    },
  },

  computed: {
    toggleComponentStyle() {
      switch (this.labelPosition) {
        case 'top':
          return `flex-flow: column`
        case 'right':
          return `flex-flow: row-reverse`
        case 'bottom':
          return `flex-flow: column-reverse`
        case 'left':
          return `flex-flow: row`
      }
    },
    labelStyle() {
      const { labelMargin } = this
      
      const style = {
        color: this.labelColor,
        fontSize: this.fontSize
      }
      
      switch (this.labelPosition) {
        case 'top':
          style.marginBottom = labelMargin
          break
        
        case 'right':
          style.marginLeft = labelMargin
          break
        
        case 'bottom':
          style.marginTop = labelMargin
          break
        
        case 'left':
          style.marginRight = labelMargin
          break
      }

      return style
    },
    toggleContainerStyle() {
      const {
        size,
        checked,
        toggleContainerColorOff,
        toggleContainerColorOn
      } = this
      return {
        width: `${size * 2}px`,
        height: `${size}px`,
        backgroundColor: checked ? toggleContainerColorOn : toggleContainerColorOff,
        borderRadius: `${size}px`,
      }
    },
    toggleStyle() {
      const {
        size,
        padding,
        checked,
        toggleColorOff,
        toggleColorOn
      } = this
      return {
        backgroundColor: checked ? toggleColorOn : toggleColorOff,
        top: `${padding}px`,
        left: checked ? `${size + padding}px` : `${padding}px`,
        height: `${size - (padding * 2)}px`,
        width: `${size - (padding * 2)}px`,
        borderRadius: `${size}px`,
      }
    },
  },

  methods: {
    change() {
      return this.$emit('change', !this.checked)
    },
  },
}
</script>

<style lang="scss" scoped>
  .toggle-component {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;

    transition: inherit;

    .toggle-container {
      position: relative;
      transition: inherit;
      cursor: pointer;

      .toggle {
        position: absolute;
        transition: inherit;
        cursor: inherit;
      }
    }

    label {
      transition: inherit;
      cursor: pointer;
    }
  }
</style>
