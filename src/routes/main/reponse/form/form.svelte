<script lang="ts">
	import type { ResponseForm } from '$lib';
	import { PAGE_IDS } from '$lib';
	import TextInput from './text-input.svelte';
	import TextAreaInput from './text-area-input.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let formValue: ResponseForm = {
		firstName: '',
		lastName: '',
		playlistComment: '',
		comment: ''
	};

	function onSubmit() {
		// TODO HERE CALL MAIL API
		resetFormValue();
		dispatch('formSubmit');
		dispatch('scrollToSection', PAGE_IDS.REPONSE);
	}

	function resetFormValue(): void {
		formValue = {
			firstName: '',
			lastName: '',
			playlistComment: '',
			comment: ''
		};
	}
</script>

<div class="form-container">
	<form class="form" on:submit|preventDefault={onSubmit}>
		<TextInput
			label="Nom"
			on:formChange={(e) => (formValue.lastName = e.detail)}
			value={formValue.lastName}
		/>
		<TextInput
			label="Prénom"
			on:formChange={(e) => (formValue.firstName = e.detail)}
			value={formValue.firstName}
		/>
		<TextAreaInput
			label="Le son qui doit absolument passer !"
			on:formChange={(e) => (formValue.playlistComment = e.detail)}
			value={formValue.playlistComment}
		/>
		<TextAreaInput
			label="Commentaire"
			on:formChange={(e) => (formValue.comment = e.detail)}
			value={formValue.comment}
		/>
		<button class="form-button" type="submit">JE PARTICIPE</button>
	</form>
</div>

<style lang="scss">
	.form-container {
		display: flex;
		justify-content: center;
	}

	.form {
		padding: 50px;
		display: flex;
		flex-direction: column;
		gap: 32px;
		max-width: 600px;
		flex-grow: 1;

		.form-button {
			cursor: pointer;
			height: 48px;
			border-radius: 4px;
			background-color: $green;
			color: white;
			border: 1px solid $green;
			font-size: 18px;
			font-weight: bold;
			text-align: center;
		}
	}
</style>
