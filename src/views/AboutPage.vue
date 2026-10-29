<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import aboutArt0 from '../../assets/about-why-official.webp'
import aboutArt1 from '../../assets/about-audience-official.webp'
import aboutArt2 from '../../assets/about-creation-official.webp'
import aboutArt3 from '../../assets/about-share-official.webp'
import '../about-visual.css'

</script>

<template>
  <main class="page about-page">
    <SiteHeader />
    <section class="about-hero section-glow"><div class="about-intro-heading"><span class="eyebrow">ABOUT VANSO</span><h1>What Is Vanso?</h1></div><p>Vanso is a music platform where you can turn everyday ideas into songs with AI, share your music, and discover what others are creating.</p></section>

    <section class="split-section container section"><div><span class="eyebrow pink">WHY WE EXIST</span><h2>Why Vanso Exists</h2><p>Music can open a window into everyday life. A song can hold your mood, tell your side of a story, or offer a glimpse into someone else’s world. Vanso brings these moments together, giving you a place to express yourself and discover others through music.</p><p>Vanso uses AI to make music creation more accessible, so you can start with your own ideas without a background in music production. You can also simply listen, discover new songs, and enjoy what others share.</p></div><div class="why-vanso-artwork"><img :src="aboutArt0" alt="Music connects everyday moments: writing, cooking, settling into a new home and relaxing with a favorite song." width="1600" height="900" loading="lazy" decoding="async" /></div></section>

    <section class="section container"><div class="section-heading"><h2>What Can You Do With Vanso?</h2><p>Create something personal, discover something new, and connect through music.</p></div><div class="three-grid text-only-cards"><article><h3>Turn Your Day Into Music</h3><p>Start with an idea, a feeling, or a story from your day. Use AI to turn it into a song and share it on Vanso.</p></article><article><h3>Discover Music From Others</h3><p>Explore original songs, find new voices, and listen to something that fits your mood.</p></article><article><h3>Connect Through Music</h3><p>Like a song, save a favorite, or leave a comment. There is more than one way to take part.</p></article></div></section>

    <section class="section container audience-section" aria-labelledby="audience-title">
      <div class="audience-editorial">
      <div class="section-heading"><span class="eyebrow">ONE SHARED MUSIC SPACE</span><h2 id="audience-title">Who Is Vanso For?</h2><p class="audience-lead">Create, Listen, Or Both.<br />You Belong Here.</p><p>Turn your ideas into songs, discover music from others, or enjoy both sides of Vanso.</p></div>
      <div class="audience-artwork">
        <img :src="aboutArt1" alt="Find your next favorite or make something yours: a listener surrounded by songs and everyday inspiration on Vanso." width="1600" height="900" loading="lazy" decoding="async" />
      </div>
      </div>
    </section>

    <section class="section creation-scenes" aria-labelledby="creation-title">
      <div class="container creation-editorial">
      <div class="section-heading"><h2 id="creation-title">How Does Vanso Turn Ideas Into Music?</h2><p>From your first thought to a song that others can discover.</p></div>
      <div class="creation-flow-artwork"><img :src="aboutArt2" alt="From an everyday idea to an AI-generated song on Vanso, then sharing it with listeners who can like, save and comment." width="1600" height="900" loading="lazy" decoding="async" /></div>
      <div class="scene-grid">
        <article><h3>Start With An Idea</h3><p>Begin with your words, lyrics, mood or imagination.</p></article>
        <article><h3>Create Your Sound</h3><p>Vanso turns your idea into original AI music, without professional production skills.</p></article>
        <article><h3>Let It Be Heard</h3><p>Choose whether to publish and give listeners a way to discover your music.</p></article>
      </div>
      </div>
    </section>

    <section class="access-band section"><div class="container"><div class="section-heading"><span class="eyebrow">WEB • iOS • ANDROID</span><h2>Where Can You Access Vanso?</h2><p>Create and listen in the Vanso app for iPhone and Android. On the web, Creator Studio lets you upload finished tracks and view available performance data for your published music.</p><RouterLink class="button" to="/download">View Official Download Options</RouterLink></div></div></section>

    <section class="principles section"><div class="container principle-layout"><div><span class="eyebrow">WHAT WE BELIEVE</span><h2>Our Principles</h2><p>Technology should make it easier to express yourself, while leaving room for your own voice.</p></div><div><details open><summary>Expression Above All</summary><p>A feeling, a joke, a small moment — your expression does not have to be perfect to be worth sharing.</p></details><details><summary>Creation For Everyone</summary><p>Music creation should be intuitive, welcoming and accessible.</p></details><details><summary>Every Song Deserves A Listener</summary><p>You do not have to make music to make a difference here. Discover a creator you believe in, champion a song you love with a like or comment, and help someone’s music find its next listener.</p></details></div></div></section>

    <section class="download-cta container section"><div><span class="eyebrow pink">MUSIC WITHOUT BARRIERS</span><h2>Create AI Music. Share It With The World.</h2><p>Turn a moment into a song, discover someone else’s story, or simply enjoy the music. Find your own way into Vanso.</p><RouterLink class="button" to="/download">Download Vanso</RouterLink><a class="button ghost" href="https://vanso.ai/main/home">Open Creator Studio</a></div><div class="about-share-artwork"><img :src="aboutArt3" width="720" height="900" loading="lazy" decoding="async" alt="Everyday stories shared through music, with personal song covers and responses from listeners." /></div></section>
    <SiteFooter />
  </main>
</template>
