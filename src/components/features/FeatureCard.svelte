<script>
  // can be calculated automatically but i prefer not to
  export let border_radius_outer = 0;
  export let border_radius_inner = 0;

  import bg_image from '$assets/features_overlay.svg';
  import noise from '$assets/noise.png';
  import features from '$assets/features.svg';

  import Icon from '@iconify/svelte';
</script>

<article style="border-radius: {border_radius_outer}px;">
  <div style="border-radius: {border_radius_inner}px;" class="card-inner">
    <div class="bg-image" style="background-image: url({bg_image});">
      <div class="grain-overlay" style="background-image: url({noise});"></div>
      <div class="text">
        <h1>Features</h1>
        <ul>
          <li>✅ Find latest coin groups</li>
          <li>✅ Find fastest growing coin groups</li>
          <li>✅ Order group lists to your liking</li>
        </ul>
        <a href="#features" class="test-button">
          <i class="glow-overlay"></i>
          <Icon icon="fluent:open-12-filled" style="font-size: 25px; filter: drop-shadow(0 0 10px #D8FA00);" />
          <span>TEST DRIVE APP</span>
        </a>
      </div>
      <img src={features} alt="noise" />
    </div>
  </div>
</article>

<style>
  article {
    padding: 2px;
    height: 465px;
    background-image: linear-gradient(-135deg, #ffffff, transparent, #434343, #434343);
  }

  .card-inner {
    overflow: hidden;
    background-image: linear-gradient(to right, #000000, #222122);
    height: 100%;
    position: relative;
  }

  .bg-image {
    height: 100%;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    
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

  img {
    position: absolute;
    left: 70px;
    top: -245px;
    width: 1000px;
  }

  .text {
    width: 650px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    top: 70px;
    right: 70px;

    & h1 {
      font-size: 70px;

      & span {
        font-weight: 400;
      }
    }

    & ul {
      font-size: 25px;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      margin: 0 0 10px;

      & li {
        color: #b1b1b1;
      }
    }
  }

  .test-button {
    transition: .1s;
    position: relative;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid #d9fa0067;
    color: #D8FA00;
    text-decoration: none;
    background-color: #d9fa0015;
    padding: 15px 35px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 17px 40px #d9fa001a;

    & span {
      filter: drop-shadow(0 0 10px #D8FA00);
      font-weight: 600;
    }

    & i {
      position: absolute;
      bottom: -70px;
      left: 75px;
      height: 60px;
      width: 90px;
      filter: blur(30px);
      border-radius: 50%;
      background-color: #D8FA00;
      mix-blend-mode: color-dodge;
    }
  }

  .test-button:hover {
    filter: saturate(5%);
    & i {
      bottom: -50px;
      left: 75px;
    }
  }

  .test-button:active {
    opacity: .7;
  }

  @media only screen and (width < 1788px) {
    img {
      width: 700px;
      top: -100px;
      left: -100px;
    }
  }
  @media only screen and (width < 1400px) {
    article {
      height: unset;
    }
    img {
      right: -200px;
      left: unset;
      width: 1000px;
      opacity: .4;
      transform: rotate(-40deg);
      pointer-events: none;
    }
    .text {
      margin: 60px;
      width: 90%;
      position: static;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      top: 70px;
      right: 70px;
    }
  }
  @media only screen and (width < 750px) {
    img {
      opacity: .1;
    }
    .text {
      width: 100%;
      margin: 0;
    }
    .text h1 {
      font-size: 6vw;
    }
    .text ul {
      margin: 10px 0;
    }
    .text ul li {
      font-size: 20px;
    }
    .bg-image {
      padding: 20px;
    }
  }
  @media only screen and (width < 530px) {
    .text {
      flex-direction: center;
      align-items: center;
      text-align: center;
    }
    .text ul li {
      font-size: 4vw;
    }
  }
</style>