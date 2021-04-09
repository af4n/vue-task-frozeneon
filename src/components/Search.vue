<template>
	<div class="input-group mt-3 mb-3">
		<input v-model="searchValue" type="text" class="form-control" placeholder="Search">
		<div class="input-group-append">
			<button @click="$emit('search', searchValue)" class="btn btn-primary" type="button">Search</button>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Search',
    data() {
      return {
        searchValue: ''
      }
    }
  }
</script>