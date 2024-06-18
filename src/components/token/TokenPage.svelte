<script>
  import Icon from "@iconify/svelte";
  import { copy } from 'svelte-copy';
  import glow from '$assets/glow.png';
  import noise from '$assets/noise.png';

  import icon1 from '$assets/icon1.svg';
  import icon2 from '$assets/icon2.svg';
  import icon3 from '$assets/icon3.svg';

  // EDIT TOKEN ADDRESS HERE
  let token = '0xAbCdEf0123456789abcdef0123456789abcdef01';

</script>
<div class="token-page">
  <div class="glow-overlay" style="background-image: url({glow});"></div>
  <div class="header">
    <h1>$XFIND</h1>
    <div class="token-pill">
      <p>{token}</p>
      <a href="#s" class="copy-button" use:copy={token}>
        <Icon icon="basil:copy-solid" style="font-size: 25px;"/><span>COPY</span>
      </a>
    </div>
  </div>
  <div class="cards">
    <div class="card" style="background-image: url({noise});">
      <div class="card-inner">
        <img src={icon1} alt="noise" />
        <p>5/5 tax</p>
      </div>
    </div>
    <div class="card" style="background-image: url({noise});">
      <div class="card-inner">
        <img src={icon2} alt="noise" />
        <p>No team tokens</p>
      </div>
    </div>
    <div class="card" style="background-image: url({noise});">
      <div class="card-inner">
        <img src={icon3} alt="noise" />
        <p>Liquidity locked</p>
      </div>
    </div>
  </div>
</div>

<style>

.card {
  border: 2px solid #66E1FF; /* Add this line to set a border with color #66E1FF around the card */
  border-radius: 30px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Add this line to prevent content from overflowing */
}

  .token-page {
    padding: 0 23px;
    position: relative;
    margin-top: 95px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 100px;
  }

  .glow-overlay {
    position: absolute;
    pointer-events: none;
    background-repeat: no-repeat;
    top: -330px;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    & h1 {
      font-size: 70px;
      filter: drop-shadow(0 0 10px #66E1FF);
    }
  }

  .token-pill {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #ffffff23;
    border-radius: 100px;
    padding-left: 25px;

    & p {
      font-size: 18px;
    }

    & .copy-button {
      font-weight: 600;
      transition: .1s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      text-decoration: none;
      background-color: #66E1FF;
      border-radius: 100px;
      color: #fff;
      overflow: hidden;
      padding: 5px 23px 5px 20px;
    }
    & .copy-button:hover {
      background-color: black;
    }
    & .copy-button:active {
      background-color: #black;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    width: 100%;

    & .card {
      border-radius: 30px;
      height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;

      & p {
        font-size: 24px;
        font-weight: 800;
      }
    }
  }

  @media only screen and (width < 1420px) {
    .cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (width < 720px) {
    .token-pill {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      background-color: #ffffff23;
      border-radius: 100px;
      padding-left: 25px;
    }
    .token-pill p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 200px;
    }
    .cards > .card {
      padding: 60px 10px;
      height: unset;
    }
    .cards > .card > .card-inner > p {
      font-size: 16px;
    }
    .cards > .card > .card-inner > img {
      width: 200px;
    }
  }
  @media only screen and (width < 430px) {
    .token-pill p {
      width: 100px;
    }
  }
</style>