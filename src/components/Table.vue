<template>
	<div>
		<table class="table">
			<thead>
			<tr>
				<th scope="col">Name</th>
				<th scope="col">Type</th>
				<th scope="col">Hits</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(pack, index) in paginatedPackages"
					:key="index"
			>
				<td @click="$emit('detailedInfo', pack)"
						data-toggle="modal"
						data-target="#modal"
						class="name"
				>{{ pack.name }}
				</td>
				<td>{{ pack.type }}</td>
				<td>{{ pack.hits }}</td>
			</tr>
			</tbody>
		</table>

		<Pagination :pages="pages"
								:pageNumber="pageNumber"
								@pageClick="pageClick"
		/>
	</div>
</template>

<script>
  import Pagination from "./Pagination";

  export default {
    name: 'Table',
    components: {
      Pagination
    },
    props: {
      packages: Array,
      modalShow: Boolean
    },
    data() {
      return {
        pageNumber: 1,
        packagesPerPage: 10,
			}
    },
    computed: {
      pages() {
        return Math.ceil(this.packages.length / this.packagesPerPage)
      },
      paginatedPackages() {
        let from = (this.pageNumber - 1) * this.packagesPerPage
        let to = from + this.packagesPerPage
        return this.packages.slice(from, to)
      }
    },
    methods: {
      pageClick(page) {
        this.pageNumber = page
      }
    }
  }
</script>

<style lang="scss">
	.modal-backdrop {
		opacity: 0.5;
	}
	
	.name {
		cursor: pointer;
	}
</style>
