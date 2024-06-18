<script>
  import HeroCard from "$components/hero/HeroCard.svelte";
  import HeroSection from "$components/hero/HeroSection.svelte";
  import TokenPage from "$components/token/TokenPage.svelte";
  import Revenue from "$components/revenue/Revenue.svelte";
  import Footer from "$components/footer/Footer.svelte";
  import Groups from "$components/groups/Groups.svelte";
  import GroupCard from "$components/groups/GroupCard.svelte";
  import GroupCardTop from "$components/groups/GroupCardTop.svelte";
  import data from "$data/Data.json";

  let iterable = data.groups;

  // rank by member count
  iterable.sort((a, b) => b.members - a.members);

  let iterable_2 = iterable.slice(1);

  $: console.log(iterable);
</script>

<HeroSection>
  <HeroCard border_radius_outer={30} border_radius_inner={28} />
</HeroSection>

<GroupCardTop
  url="https://t.me/{iterable[0].name}"
  name="@{iterable[0].name}"
  members={iterable[0].members}
  position="1"
  contract={iterable[0].ontract}
  creation={iterable[0].creation}
/>

<Groups>
  <svelte:fragment slot="groups">
    {#each iterable_2 as group, i}
      <GroupCard
        url="https://t.me/{group.name}"
        name="@{group.name}"
        members="{group.members}"
        position="{i + 2}"
        contract="{group.ontract}"
        creation="{group.creation}"
      />
    {/each}
  </svelte:fragment>
</Groups>

<TokenPage />

<Revenue />

<Footer />
