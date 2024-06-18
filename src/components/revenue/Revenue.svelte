<script>
  import Icon from "@iconify/svelte";
  import glow from '$assets/glow2.png';
  import noise from '$assets/noise.png';

  // EDIT TOKEN ADDRESS HERE
  let token = '0xAbCdEf0123456789abcdef0123456789abcdef01';

</script>
<div class="token-page">
  <div class="glow-overlay" style="background-image: url({glow});"></div>
  <div class="header">
    <h1>Bot Capabilities</h1>
  </div>
  <div class="cards">
    <div class="card card--basic" style="background-image: url({noise});">
      <div class="card-inner">
        <p> Finding Groups</p>
      <Icon icon="pepicons:file-loop" style="font-size: 10rem;" />
        <ul>
          <li>➡️ Groups are found in contracts and various other sources</li>
          <li>➡️ Groups are ensured to be valid and active</li>
          <li>➡️ Operations are running 24 hours a day</li>
          <li>➡️ We aim to eventually find a larger percentage of groups</li>
          <p style="font-size: 24px;"><b>Over 5,000 groups have been found!</b></p>

        </ul>
      </div>
    </div>
    <div class="card card--vip" style="background-image: url({noise});">
      <div class="card-inner">
        <p>Tracking Metrics</p>
        <Icon icon="pepicons:sort"style="font-size: 10rem;"/>
        <ul>
          <li>➡️ Metrics are updated every few minutes</li>
          <li>➡️ Currently we track the member count of groups, but this can easily be expanded to other metrics</li>
          <li>➡️ Groups that are gaining members rise to the top</li>
          <li>➡️ Telegram bot conveniently provides top 5 gainers for you to check out </li>
          <p style="font-size: 24px;"><b>Metrics have been updated 900,000 times!</b></p>

        </ul>
      </div>
    </div>
  </div>
</div>

<div class="token-page">
  <div class="glow-overlay" style="background-image: url({glow});"></div>
  <div class="header">
    <h1>Team</h1>
  </div>
  <div class="cards">
    <div class="card card--basic" style="background-image: url({noise});">
      <div class="card-inner">
        <p> pres</p>
      <Icon icon="mdi:account" style="font-size: 10rem;" />

        <ul>
         
          <li>I'm a backend developer with experience in creating telegram bots and automation software. I also have business and marketing knowledge which will help greatly during this project. I'll be working in the background, making connections and updating the bot.</li>
          <li>TG: <a href="https://t.me/presbots" target="_blank" style="color: white;">@presbots</a></li>

        </ul>
      </div>
    </div>
    <div class="card card--vip" style="background-image: url({noise});">
      <div class="card-inner">
        <p>natsha</p>
        <Icon icon="mdi:account" style="font-size: 10rem;" />

        <ul>
          <li>Specializes in contract development and branding, will be acting as the head moderation and social media manager for the project. Front end web developer and designer. When you have a question, I'm here to help!</li>
         <li>TG: <a href="https://t.me/natsha_me" target="_blank" style="color: white;">@natsha_me</a></li>

         
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="instructions">
  <h2>How to sign-up to Revenue Sharing?</h2>
  <div class="steps">
    <div class="step">
      <p>1</p>
      <p>DM the Telegram bot and follow the instructions @TgBoardsBot.</p>
    </div>
    <div class="step">
      <p>2</p>
      <p>You will need to link your Telegram account to your wallet.</p>
    </div>
    <div class="step">
      <p>3</p>
      <p>Etherscan's "Verified Signatures" page is used during this process.</p>
    </div>
  </div>
</div>

<style>
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
  top: -330px;
  background-repeat: no-repeat;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.2; /* Adjust this value between 0 (completely transparent) and 1 (fully opaque) */
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

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 60%;

    & .card {
      border: 2px solid transparent;
      border-radius: 30px;
      display: flex;
      align-items: flex-start;
      padding: 85px 60px;
      justify-content: center;

      & .card-inner {

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          justify-content: flex-start;

          & p {
            font-size: 34px;
          }

          & ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-weight: 600;
            line-height: 34px;
          }
      }
      
    }

    & .card--basic {
      background-color: black;
      border-color: #66E1FF;
    }
    & .card--vip {
      background-color: black;
      border-color: #66E1FF;
    }
  }

  .instructions {
    width: 60%;
    margin: auto;
    margin-top: 95px;
    margin-bottom: 23px;

    & h2 {
      text-align: center;
      font-size: 50px;
      filter: drop-shadow(0 0 10px #ffffff3f);
    }

    & .steps {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 40px;

      & .step {
        display: flex;
        padding: 10px;
        border-radius: 100px;
        background-color: #ffffff1a;
        align-items: center;
        gap: 20px;
        font-weight: 600;

        & :first-child {
          background-color: #ffffff34;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
      }
    }
  }

  @media only screen and (width < 1400px) {
    .cards {
      width: 90%;
    }
  }
  @media only screen and (width < 1200px) {
    .instructions {
      width: 90%;
    }
  }
  @media only screen and (width < 1000px) {
    .cards {
      width: 100%;
      padding: 0 20px;
      grid-template-columns: 1fr;
    }
  }
  @media only screen and (width < 830px) {
    .instructions {
      width: 100%;
    }
    .instructions .steps {
      width: 90%;
      margin: auto;
    }
    .instructions .steps .step {
      flex-direction: column;
      padding: 25px;
      border-radius: 30px;
      text-align: center;
    }
    .main-wrapper .instructions h2 {
      font-size: 30px;
      margin-bottom: 95px;
    }
  }
  @media only screen and (width < 530px) {
    .token-page {
      padding: 0;
    }
  }
</style>