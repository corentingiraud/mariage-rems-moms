<script lang="ts">
    import type {ResponseForm} from '$lib';
    import TextInput from './text-input.svelte';
    import TextAreaInput from './text-area-input.svelte';

    let formValue: ResponseForm = {
        firstName: '',
        lastName: '',
        playlistComment: '',
        comment: '',
    };
    function onSubmit() {
        // TODO HERE CALL MAIL API
        resetFormValue();
    }

    function resetFormValue(): void {
        formValue = {
            firstName: '',
            lastName: '',
            playlistComment: '',
            comment: '',
        };
    }
</script>
<div class="form-container">
    <form class="form" on:submit|preventDefault={onSubmit}>
        <TextInput label="Nom" value={formValue.lastName} on:formChange={(e) => formValue.lastName = e.detail} />
        <TextInput label="Prénom" value={formValue.firstName} on:formChange={(e) => formValue.firstName = e.detail} />
        <TextAreaInput label="Le son qui doit absolument passer !" value={formValue.playlistComment} on:formChange={(e) => formValue.playlistComment = e.detail} />
        <TextAreaInput label="Commentaire" value={formValue.comment} on:formChange={(e) => formValue.comment = e.detail} />
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
        font-family: CandaraBold, sans-serif;
        text-align: center;
      }
    }
</style>