<template>
  <div class="card-detail">
    <button @click="goBack"><img src="../assets/call-made.svg">Back</button>
    <div class="card-content">
      <img class="country-flag" v-if="country.flags != undefined" :src="country.flags.svg" alt="">
      <div class="card-content-description">
        <h2 class="country-name">{{ country.name }}</h2>
        <div class="country-description-wrap">
          <div class="country-description">
            <p><span class="semi-bold">Native Name: </span>{{ country.nativeName }}</p>
            <p>
              <template v-if="country.population != undefined">
                <span class="semi-bold">Population: </span>
              {{ country.population.toLocaleString('en-US') }}
              </template>
            </p>
            <p><span class="semi-bold">Region: </span>{{ country.region }}</p>
            <p><span class="semi-bold">Sub Region: </span>{{ country.subregion }}</p>
            <p><span class="semi-bold">Capital: </span>{{ country.capital }}</p>
          </div>
          <div class="country-subdescription">
            <p><span class="semi-bold">Top level domain: </span><span :key="index"
                v-for="(domain, index) in country.topLevelDomain">{{ domain }}<template
                  v-if="index < country.topLevelDomain.length - 1">, </template></span></p>
            <p><span class="semi-bold">Currencies: </span><span :key="currency.code"
                v-for="(currency, index) in country.currencies">{{ currency.name }}<template
                  v-if="index < country.currencies.length - 1">, </template></span></p>
            <p><span class="semi-bold">Languages: </span><span :key="lang.iso639_1"
                v-for="(lang, index) in country.languages">{{
      lang.name }}<template v-if="index < country.languages.length - 1">, </template></span></p>
          </div>
        </div>

        <div class="border-countries">
          <p v-if="country.borders != undefined"><span class="semi-bold">Border Countries: </span></p>
          <div>
            <BordersCountryButton
              @click="goToCountryDetail(countries.filter(country => country.alpha3Code === countryCode)[0].name)"
              :key="countries.filter(country => country.alpha3Code === countryCode)[0].name"
              :country="countries.filter(country => country.alpha3Code === countryCode)[0]"
              v-for="(countryCode) in country.borders" />
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import BordersCountryButton from './BordersCountryButton.vue'
import mockFetch from '../mockFetch'

export default
  {
    data() {
      return {
        country: {},
        countries: []
      }
    },
    components: {
      BordersCountryButton
    },
    watch: {
      $route() {
        this.mockedFetchData()
        // обрабатываем изменение параметров маршрута...
      }
    },
    mounted() {
      this.mockedFetchData()
      // Фетчим данные

    },
    methods: {
      goBack() {
        //this.$router.back()//если оставить так, то прикольно можно возвращаться по истории открытия карточек
        this.$router.push({ path: `/` }) //По ТЗ
      },
      goToCountryDetail(name) {
        this.$router.push({ path: `/country/${name}` })
      },
      mockedFetchData() {
        // Заменяем fetch на нашу функцию mockFetch
        window.fetch = mockFetch;

        // Теперь при вызове fetch будет использоваться наша замоканная функция
        fetch('https://counries/api')
          .then(response => response.json())
          .then(data => {
            const countryName = this.$route.params.name
            this.country = data.filter(country => country.name == countryName)[0];
            this.countries = data
            
          })
          .catch(error => console.error(error));
      }
    }
  }
</script>