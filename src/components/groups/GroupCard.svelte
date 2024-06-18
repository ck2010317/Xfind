<script>
  export let name;
  export let members
  export let position;
  // export let contract;
  export let url;
  export let creation;

  import topo1 from '$assets/topo1.jpg';
  import topo2 from '$assets/topo2.jpg';
  import topo3 from '$assets/topo3.jpg';
  import topo4 from '$assets/topo4.jpg';
  import topo5 from '$assets/topo5.jpg';
  import topo6 from '$assets/topo6.jpg';
  import topo7 from '$assets/topo7.jpg';
  import topo8 from '$assets/topo8.jpg';
  import topo9 from '$assets/topo9.jpg';


  const backgrounds = [
    topo1,
    topo2,
    topo3,
    topo4,
    topo5,
    topo6,
    topo7,
    topo8,
    topo9
  ];
  const current_background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  import Icon from '@iconify/svelte';
  import { copy } from 'svelte-copy';
</script>


  

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  
  .group-card {
    border-radius: 30px;
    background-color: #222122;
    overflow: hidden;
    border: 2px solid #333333;
  }

  .top {
    padding: 30px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .position {
    position: absolute;
    top: 30px;
    font-size: 2rem;
    color: #ffffff;
    right: 30px;
    font-family: "Inter", sans-serif;
  }

  .top-content {
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    justify-content: center;
    align-items: center;
  }

  .group-image {
    width: 138px;
    height: 138px;
    border-radius: 50%;
    outline: 7px solid #07070746;
  }

  .group-name {
    font-size: 1.3rem;
    font-weight: 800;
    background-color: #0000004f;
    padding: 5px 15px;
    border-radius: 100px;
    backdrop-filter: blur(2px);
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
  }

  .bottom {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
  }

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
  }

  @media only screen and (width < 490px) {
    .contract {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 200px;
    }
  } */
</style>