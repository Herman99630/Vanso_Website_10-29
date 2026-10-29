<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const plans = [
  { name: 'Free', audience: 'Try making your first songs', price: '0', credits: '200', songs: '5', usage: 'Personal use' },
  { name: 'Mini', audience: 'For curious music makers', price: '1.99', credits: '1,000', songs: '25', usage: 'Commercial use included' },
  { name: 'Starter', audience: 'For ideas you want to turn into songs regularly', price: '4.99', credits: '3,000', songs: '75', usage: 'Commercial use included' },
  { name: 'Pro', audience: 'For more songs and more creative possibilities', price: '9.99', credits: '6,000', songs: '150', usage: 'Commercial use included', coming: 'Coming soon: Priority access to featured exposure and traffic boost tools.' },
]
</script>

<template>
  <main class="page pricing-page">
    <SiteHeader />
    <section class="pricing-hero section-glow">
      <span class="eyebrow">VANSO AI MUSIC PLANS</span>
      <h1>Choose Your Vanso Plan</h1>
      <p>Compare monthly credits and song limits. Download the Vanso app to explore and choose your plan.</p>
      <div class="credit-equation" aria-label="One standard song uses 40 credits">
        <span>1 Standard Song</span>
        <b>=</b>
        <strong>40 Credits</strong>
      </div>
    </section>

    <section class="pricing-content container section">
      <div class="plan-grid">
        <article v-for="plan in plans" :key="plan.name" class="plan-card">
          <h2>{{ plan.name }}</h2><p class="plan-audience">{{ plan.audience }}</p>
          <div class="plan-price"><small>US$</small><strong>{{ plan.price }}</strong><span>/ month</span></div>
          <ul><li>{{ plan.credits }} credits per month</li><li>Create up to {{ plan.songs }} standard songs per month</li><li>{{ plan.usage }}</li></ul>
          <p v-if="plan.coming" class="coming-feature">{{ plan.coming }}</p>
          <RouterLink class="button plan-cta" to="/download">Download App</RouterLink>
        </article>
      </div>
      <p class="pricing-disclaimer">Download the Vanso app to choose and manage your plan. Subscriptions are available in the app, not on this website. Prices are shown in USD.</p>
    </section>

    <section class="section container pricing-faq"><div class="section-heading"><h2>Vanso Pricing FAQs</h2></div><details open><summary>Can I Try AI Music Creation For Free?</summary><p>Yes. The Free plan includes 200 credits per month, allowing you to create up to 5 standard songs for personal use.</p></details><details><summary>How Many Credits Does One Standard Song Use?</summary><p>Each standard song uses 40 credits.</p></details><details><summary>Which Vanso Plans Include Commercial Use?</summary><p>Commercial use is included with the Mini, Starter and Pro plans. Music created under these plans can be used in personal and commercial projects, subject to the Vanso Subscription Terms and Terms of Service.</p></details><details><summary>Can I Cancel My Vanso Subscription?</summary><p>Yes. Vanso plans renew monthly and can be cancelled at any time.</p></details><details><summary>What Happens After I Cancel?</summary><p>Your paid-plan access continues through the end of your current billing period.</p></details></section>

    <section class="final-cta section"><span class="eyebrow">CREATE WITH VANSO</span><h2>Start Turning Ideas Into Original Music.</h2><p>Download the Vanso app to explore plans and start creating your own songs.</p><RouterLink class="button" to="/download">Get The Vanso App</RouterLink></section>
    <SiteFooter />
  </main>
</template>
