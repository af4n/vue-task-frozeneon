<template>
	<div class="footer">
		<div class="photo">
			<img src="../assets/logo.png" alt="img">
		</div>
		<div class="content">
			<div>Alexey Afanaskin</div>
			<div><a href="https://github.com/af4n">https://github.com/af4n</a></div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
	.footer {
		display: flex;
		align-items: center;
		margin-top: 40px;
		margin-bottom: 40px;

		.photo {
			width: 100px;
			height: 100px;
			margin-right: 50px;

			img {
				width: 100%;
			}
		}
	}
</style>