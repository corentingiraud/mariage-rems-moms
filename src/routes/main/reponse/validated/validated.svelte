<script lang="ts">
    import ValidatedIcon from '$lib/assets/email-sent.png';
</script>
<div class="validated-screen">
    <div class="validated-screen__content">
        <img class="validated-screen__content__icon" src={ValidatedIcon} alt="Email sent" />
        <h2 class="validated-screen__content__title">Merci pour ta confirmation de participation !</h2>
    </div>
</div>

<style lang="scss">
    .validated-screen {
      display: flex;
      justify-content: center;

      &__content {
        padding-right: 10%;
        padding-left: 10%;
        max-width: 700px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;

        &__title {
          font-family: CandaraBold, sans-serif;
          color: $green;
          text-align: center;
          font-size: 40px;
        }

        &__icon {
          max-width: 350px;
          width: 100%;
        }
      }
    }
</style>