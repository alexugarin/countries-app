<!-- CountryCard.vue -->
<template>
    <div class="card" @click="handleClick">
        <img :src="country.flags.png" alt="">
        <div> 
            <h3>{{ country.name }}</h3>
            <p><span class="semi-bold">Population: </span>{{ country.population.toLocaleString('en-US') }}</p>
            <p><span class="semi-bold">Region: </span>{{ country.region }}</p>
            <p><span class="semi-bold">Capital: </span>{{ country.capital }}</p>
        </div>
        
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
  