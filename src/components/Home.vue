<template>
    <div class="input-container-wrap">
        <div class="search">
            <img src="../assets/search.svg" alt="">
            <input type="text" v-model="search" placeholder="Search for a country...">
        </div>
        <div class="container" v-if="filteredCountries.length > 0">
            <CountryCard v-for="country in filteredCountries" :key="country.name" :country="country"
                @click="goToCountryDetail(country.name)" />
        </div>
        <div class="no-data" v-else>
            <p>No data</p>
        </div>
    </div>
</template>

<script>
import CountryCard from './CountryCard.vue'
import BordersCountryButton from './BordersCountryButton.vue'
import mockFetch from '../mockFetch';

export default {
    data() {
        return {
            countries: [],
            search: ''
        }
    },
    components: {
        CountryCard, BordersCountryButton
    },
    computed: {
        filteredCountries() {
            return this.countries.filter(country => country.name.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    methods: {
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
                    this.countries = data;
                })
                .catch(error => console.error(error));
        }
    },
    mounted() {
        this.mockedFetchData()
    }
}
</script>