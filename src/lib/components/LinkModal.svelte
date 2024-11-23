<script>
	import Swal from 'sweetalert2';

	export let info;

	function openModal() {
		Swal.fire({
			customClass: {
				popup: 'bg-white/90 text-slate-900 dark:bg-black/90 dark:text-slate-200 rounded-xl'
			},
			html: `<div class="text-base leading-normal text-left">
                ${info.modal.description}
                </div>`,
			showConfirmButton: false,
			backdrop: true,
			icon: 'info',
			iconColor: '#EC8574',
			showConfirmButton: true,
			confirmButtonColor: '#287fbf'
		});
	}
</script>

{#if info.website}
	<a
		href={info.website}
		target="_blank"
		rel="noreferrer"
		aria-label={info.title}
		class="group/card-a"
	>
		<slot />
	</a>
{:else}
	<!-- modal -->
	<button on:click={openModal} aria-label={info.title} class="group/card-a">
		<slot />
	</button>
{/if}
