<script lang="ts">
	import type { ResponseForm } from '$lib';
	import { PAGE_IDS } from '$lib';
	import TextInput from './text-input.svelte';
	import TextAreaInput from './text-area-input.svelte';
	import { createEventDispatcher } from 'svelte';
	import { WEB_3_FORMS_API_KEY } from '$lib/contants';
	import Spinner from './spinner.svelte';

	const dispatch = createEventDispatcher();

	let formValue: ResponseForm = {
		firstName: '',
		lastName: '',
		playlistComment: '',
		comment: ''
	};

	let loading = false;

	async function onSubmit(submitEvent: SubmitEvent): Promise<void> {
		dispatch('scrollToSection', PAGE_IDS.REPONSE);
		loading = true;

		if (submitEvent.currentTarget === null) {
			return;
		}
		const formData = new FormData(submitEvent.currentTarget as HTMLFormElement);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		await response.json();
		dispatch('formSubmit');
		resetFormValue();
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
	{#if loading}
		<div class="spinner-container">
			<Spinner size={50}></Spinner>
		</div>
	{:else}
		<form class="form" on:submit|preventDefault={onSubmit}>
			<h1 class="title">RSVP</h1>
			<input type="hidden" name="access_key" value={WEB_3_FORMS_API_KEY} />
			<TextInput
				label="Nom"
				name="Nom"
				on:formChange={(e) => (formValue.lastName = e.detail)}
				value={formValue.lastName}
			/>
			<TextInput
				label="Prénom"
				name="Prénom"
				on:formChange={(e) => (formValue.firstName = e.detail)}
				value={formValue.firstName}
			/>
			<TextAreaInput
				label="Le son qui doit absolument passer !"
				name="Le son qui doit absolument passer !"
				on:formChange={(e) => (formValue.playlistComment = e.detail)}
				value={formValue.playlistComment}
			/>
			<TextAreaInput
				label="Commentaire"
				name="Commentaire"
				on:formChange={(e) => (formValue.comment = e.detail)}
				value={formValue.comment}
			/>
			<button class="form-button" type="submit">JE PARTICIPE</button>
		</form>
	{/if}
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

		.title {
			font-family: BrendaHome, sans-serif;
			font-weight: bold;
			font-size: 55px;
			text-align: center;
			color: $green;
		}

		.form-button {
			cursor: pointer;
			height: 48px;
			border-radius: 4px;
			background-color: $green;
			color: $white;
			border: 1px solid $green;
			font-size: 18px;
			font-weight: bold;
			text-align: center;
		}
	}

	.spinner-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 700px; // TODO UPDATE ;)
		width: 100%;
	}
</style>
