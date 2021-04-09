<template>
	<nav>
		<ul class="pagination">
			<li v-for="(page, index) in pages"
					:key="index"
					@click="$emit('pageClick', page)"
					:class="{'active': pageNumber === page}"
					class="page-item">
				<a class="page-link">{{ page }}</a>
			</li>
		</ul>
	</nav>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      pages: Number,
      pageNumber: Number
    }
  }
</script>

<style scoped lang="scss">
	.pagination {
		justify-content: center;
		cursor: pointer;
	}

	@media (max-width: 575px) {
		.page-link {
			padding: 0.5rem 0.6rem;
		}
	}
</style>