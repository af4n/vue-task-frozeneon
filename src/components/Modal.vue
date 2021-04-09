<template>
	<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">{{ pack.name }}</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div>
						Type: {{ pack.type }}
					</div>
					<div>
						Hits: {{ pack.hits }}
					</div>
					<div v-if="packageInfo.tags.latest">
						Latest version: {{ packageInfo.tags.latest }}
					</div>
					<div v-if="packageInfo.tags.next">
						Next version: {{ packageInfo.tags.next }}
					</div>
					<div v-if="packageInfo.tags.previous">
						Previous version: {{ packageInfo.tags.previous }}
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "Modal",
    props: {
      packageInfo: Object,
      pack: Object
    }
  }
</script>