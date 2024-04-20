<template>
  <div @click="handleClick">
    {{ country.name }}
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', this.country.name)
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  justify-self: flex-start;
  display: inline-flex;
  color: hsl(200, 15%, 8%);
  background-color: hsl(0, 0%, 100%);
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  gap: 20px;

  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  font-size: 14px;
  border-radius: 2px;
  height: 28px;
  transition: background-color 0.2s ease-in-out;
  margin: 10px;

  &:hover {
    background-color: hsl(0, 0%, 80%);
  }

  img {
    width: 18px;
    height: 18px;
  }
}
</style>