<script>
  // can be calculated automatically but I prefer not to
  export let border_radius_outer = 0;
  export let border_radius_inner = 0;

  import bg_image from '$assets/herobg.png';
  import noise from '$assets/noise.png';
  import logo from '$assets/logo.png'; // Add the path to your logo image
</script>

<article style="border-radius: {border_radius_outer}px;">
  <div style="border-radius: {border_radius_inner}px;" class="card-inner">
    <div class="bg-image">
      <div class="grain-overlay" style="background-image: url({noise});"></div>
      <div class="text">
        <img src={logo} alt="xFind Logo" class="logo" />
        <a href="https://t.me/+d4sDSYx3SJRhYjFk">xFind Project</a>
        <p>The bot that helps you track your favorite <u>defi groups</u> on Telegram</p>
      </div>
    </div>
  </div>
</article>

<style>
  article {
    padding: 2px;
    background-image: linear-gradient(35deg, #66E1FF, transparent, #66E1FF, #66E1FF);
  }

  .card-inner {
    overflow: hidden;
    background-color: #222122;
    height: 100%;
  }

  .bg-image {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000; /* Added black background */
  }

  .grain-overlay {
    position: absolute;
    pointer-events: none;
    mix-blend-mode: color-dodge;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 30px 30px 50px;
    row-gap: 15px;

    & a {
      font-size: 70px;
      text-decoration: none;
      color: #ffffff;
      font-weight: 800;
    }

    & a:hover {
      text-decoration: underline;
      text-decoration-color: #66E1FF;
    }

    & p {
      font-size: 25px;
    }
  }

  .logo {
    width: 80px; /* Adjust size as needed */
    margin: 0px 0; /* Further reduced margin */
    padding-left: 0px;
    
  }

  @media only screen and (width < 1005px) {
    .text a {
      font-size: 6vw;
    }
  }

  @media only screen and (width < 570px) {
    .text p {
      font-size: 4vw;
    }
  }
</style>
