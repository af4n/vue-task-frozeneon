<template>
	<div id="app">
		<div class="container">
			<Modal
				:packageInfo="packageInfo"
				:pack="pack"/>
			<Search @search="search"/>
			<Table
				:packages="resultPackages"
				@detailedInfo="detailedInfo"
			/>
			<Footer/>
		</div>
	</div>
</template>

<script>
  import Modal from "./components/Modal";
  import Search from "./components/Search";
  import Table from "./components/Table";
  import Footer from "./components/Footer";
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'App',
    components: {
      Modal, Search, Table, Footer
    },
    data() {
      return {
        modalShow: false,
				pack: {},
        searchPackages: []
      }
    },
    computed: {
      ...mapGetters(['packages', 'packageInfo', 'searchValue']),
      resultPackages() {
        if (this.searchPackages.length) {
          return this.searchPackages
        } else {
          return this.packages
        }
      }
    },
    methods: {
      ...mapActions(['getPackages', 'getPackageInfo', 'getSearchValue']),
      detailedInfo(pack) {
        this.getPackageInfo(pack)
				this.pack = pack
      },
      search(value) {
        this.getSearchValue(value)
			},
      seacrhByValue(value) {
        this.searchPackages = [...this.packages]
        if (value) {
          this.searchPackages = this.searchPackages.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } else {
          this.searchPackages = this.packages
        }
      }
    },
    watch: {
      searchValue() {
        this.seacrhByValue(this.searchValue)
      }
    },
    mounted() {
      this.getPackages()
        .then((response) => {
          if (response) {
            this.seacrhByValue(this.searchValue)
          }
        })
    }
  }
</script>

<style lang="scss">
	@import '~bootstrap/scss/bootstrap.scss';
</style>
