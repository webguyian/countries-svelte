<script>
  import NavBar from '$lib/NavBar.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Where in the world?</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,600;6..12,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="flex flex-col text-[#111517] bg-[#fafafa] dark:text-white dark:bg-[#202c37]">
  <NavBar />
  <main class="min-h-screen flex flex-col p-8 text-center">
    <slot />
  </main>
</div>
