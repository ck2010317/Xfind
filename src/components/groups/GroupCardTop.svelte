<script>
  export let name;
  export let members
  export let position;
  // export let contract;
  export let creation;
  export let url;

  import Icon from '@iconify/svelte';
  import { copy } from 'svelte-copy';
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

  .main-wrapper {
    padding: 0 23px;
  }

  .group-card-top {
    height: 280px;
    border-radius: 30px;
    background-color: #222122;
    background-image: linear-gradient(to right, #454736, #222122);
    overflow: hidden;
    /* border: 2px solid #7c7c7c2f; */
    display: grid;
    grid-template-columns: 260px auto 350px;
    position: relative;
  }
  
  .avatar-section {
    background-color: #00000023;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 18px;
  }

  .position-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .position {
    font-family: "Inter", sans-serif;
    font-size: 7rem;
    color: #F6FFBB;
  }

  .avatar-container {
    border: 7px solid #D8FA00;
    border-radius: 50%;
    position: relative;
    width: 160px;
    height: 160px;
  }

  .top-icon {
    position: absolute;
    background-color: #D8FA00;
    color: #222122;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .group-image {
    width: 100%;
    border-radius: 50%;
  }

  .information-section {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 14px;
  }

  .group-name-mobile-wrapper {
    display: none;
  }

  .group-name {
    font-size: 52px;
    font-weight: 800;
    color: #ffffff;
    text-decoration: none;
  }

  .group-name:hover {
    text-decoration: underline;
  }

  .member-count {
    text-align: center;
  }

  .member-count > span {
    font-weight: 600;
    font-size: 3rem;
    font-family: "Inter", sans-serif;
    color: #D8FA00;
  }

  /* .contract-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  } */

  /* .contract {
    font-size: .9rem;
    font-weight: 600;
  } */

  .creation-date {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    gap: 5px;
  }

  /* .copy-button {
    background: rgba(255, 255, 255, .2);
    padding: 6px 17px 5px 19px;
    border-radius: 100px;
    border: 1.5px solid #ffffff;
    color: #fff;
    font-size: .9rem;
    font-weight: 600;
    outline-offset: 3px;
    transition: .1s;
  }

  .copy-button:hover {
    background: rgb(255, 255, 255);
    color: #222122;
  }

  .copy-button:active {
    transform: translateY(4px);
    color: #a8a8a8;
    box-shadow: 0 7px 25px #ffffff31;
  } */

  @media only screen and (width < 1400px) {
    .group-name {
      font-size: 2rem;
      font-weight: 800;
    }
  }
  @media only screen and (width < 1130px) {
    .group-card-top {
      height: 240px;
      grid-template-columns: 200px auto 250px;
    }
    .avatar-container {
      border: 7px solid #D8FA00;
      border-radius: 50%;
      position: relative;
      width: 120px;
      height: 120px;
    }
  }
  @media only screen and (width < 965px) {
    .position {
      position: absolute;
      top: 30px;
      right: 30px;
      font-size: 2rem;
    }
    .group-card-top {
      grid-template-columns: 200px auto 0;
    }
  }
  @media only screen and (width < 890px) {
    .group-card-top {
      background-color: #454736;
      background-image: none;
      border: 2px solid #d9fa0059;
    }
    .group-name-mobile-wrapper {
      display: block;
    }
    .group-name-desktop-wrapper {
      display: none;
    }
    .avatar-container {
      width: 138px;
      height: 138px;
    }
    .group-name {
      font-size: 1.3rem;
    }
    .information-section {
      align-items: center;
    }
    /* .contract-wrapper {
      flex-direction: column;
    } */
    .group-card-top {
      height: unset;
    }
    .avatar-section {
      padding: 30px;
    }
    .group-card-top {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
    }
  }
  /* @media only screen and (width < 490px) {
    .contract {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 200px;
    }
  } */
</style>