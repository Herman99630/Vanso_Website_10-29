<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import helpIcon0 from '../../assets/ic_help07_2x.webp'
import helpIcon1 from '../../assets/ic_help01_2x.webp'
import helpIcon2 from '../../assets/ic_help02_2x.webp'
import helpIcon3 from '../../assets/ic_help03_2x.webp'
import helpIcon4 from '../../assets/ic_help04_2x.webp'
import helpIcon5 from '../../assets/ic_help05_2x.webp'
import helpIcon6 from '../../assets/ic_help06_2x.webp'
import helpIcon7 from '../../assets/ic_arrow_3x.webp'
import '../help-official.css'

const categories = [
  [helpIcon0, 'Getting Started', 'New to Vanso? Start here.'],
  [helpIcon1, 'Creating Music', 'Create original AI tracks in the Vanso app.'],
  [helpIcon2, 'Publishing Your Music', 'Publish your tracks on Vanso and make them available for listeners to discover.'],
  [helpIcon3, 'Managing Your Music', 'Get help with song details and see how people listen to and interact with your music.'],
  [helpIcon4, 'Rights & Safety', 'Learn about usage rights and content guidelines.'],
  [helpIcon5, 'Account & Plans', 'Find help with account settings and plan details.'],
  [helpIcon6, 'Troubleshooting', 'Resolve common creation, playback and sign-in issues.'],
]
</script>

<template>
  <main class="page help-page">
    <SiteHeader />
    <section class="help-hero section-glow">
      <div class="help-hero-copy">
      <span class="eyebrow">VANSO HELP CENTER</span>
      <h1>How Can We Help?</h1>
      <p>Find help with creating, sharing, listening, and using your Vanso account.</p>
      <label class="help-search"><span>⌕</span><input type="search" placeholder="Search Help articles…" aria-label="Search Help articles" disabled /></label>
      </div>
      <aside class="help-quick-start" aria-label="Help shortcuts">
        <span class="eyebrow">FIND YOUR WAY</span>
        <RouterLink to="/help/getting-started-with-vanso">Getting Started <img class="official-help-arrow" :src="helpIcon7" alt="" width="24" height="24" /></RouterLink>
        <a href="#help-topics">Browse All Topics <img class="official-help-arrow" :src="helpIcon7" alt="" width="24" height="24" /></a>
      </aside>
    </section>

    <section id="help-topics" class="section container help-content">
      <div class="section-heading"><h2>Explore Vanso Help</h2><p>Choose a topic to understand each part of your Vanso experience.</p></div>
      <div class="help-grid">
        <article v-for="(category, index) in categories" :key="category[1]" :class="{ featured: index === 0 }">
          <b class="official-help-icon"><img :src="category[0]" alt="" width="88" height="88" /></b><h3>{{ category[1] }}</h3><p>{{ category[2] }}</p>
          <RouterLink v-if="index === 0" class="text-link" to="/help/getting-started-with-vanso">Read the guide →</RouterLink>
          <span v-else class="coming-soon">Articles coming soon</span>
        </article>
      </div>
    </section>

    <section class="help-note section"><div class="container"><span class="eyebrow">OFFICIAL GUIDANCE</span><h2>Make The Most Of Vanso</h2><p>Explore help for creating songs, discovering music, and using your account.</p></div></section>
    <SiteFooter />
  </main>
</template>
