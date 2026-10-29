<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import heroArt from '../../assets/download-hero-official.webp'
import flowArt from '../../assets/download-flow-official.webp'
import connectionArt from '../../assets/download-connection-official.webp'
import googleIcon from '../../assets/ic_google_play_3x.webp'
import appleIcon from '../../assets/ic_appstore_3x.webp'
import '../download-official.css'
import '../download-balance.css'

const googleUrl = 'https://play.google.com/store/apps/details?id=com.vanso.music'
const appleUrl = 'https://apps.apple.com/sg/app/vanso/id6760441874'
const creatorStudioUrl = 'https://vanso.ai/main/home'
const googleQr = `https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=${encodeURIComponent(googleUrl)}`
const appleQr = `https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=${encodeURIComponent(appleUrl)}`

const reviewsTop = [
  ['VansoCreator', 'A simple way to turn an idea into a complete song.'],
  ['MusicDreamer', 'I love that my music can reach listeners after I create it.'],
  ['LifeOST', 'The whole create, publish and discovery flow feels connected.'],
  ['NewVoice', 'A fresh place to create and find original AI music.'],
]

const reviewsBottom = [
  ['EverydayCreator', 'Turning a small idea into music feels surprisingly natural.'],
  ['SoundExplorer', 'I can create on mobile and see how listeners respond.'],
  ['FirstDrop', 'Publishing a song feels like the beginning, not the end.'],
  ['AIListener', 'I enjoy discovering music made by creators around the world.'],
]
</script>

<template>
  <main class="page download-page">
    <SiteHeader />

    <section class="download-hero container section-glow">
      <div>
        <span class="eyebrow">THE VANSO AI MUSIC APP</span>
        <h1>Turn Your Thoughts Into Songs.<br />Discover Someone Else’s Through Music.</h1>
        <p>Turn everyday ideas into songs with AI, share your music on Vanso, and discover songs from others. Create, listen, or enjoy a little of both — right from your phone.</p>
        <div class="download-hero-actions">
          <a class="button ghost" :href="appleUrl"><img class="store-brand-icon" :src="appleIcon" alt="" />Download On The App Store</a>
          <a class="button ghost" :href="googleUrl"><img class="store-brand-icon" :src="googleIcon" alt="" />Get It On Google Play</a>
        </div>
        <small>Available for iPhone and Android devices.</small>
      </div>
      <div class="download-phone-pair" aria-label="Vanso creation and listening screens">
        <div class="download-phone-back"><svg viewBox="250 115 470 730" role="img" aria-label="Create a song in Vanso"><defs><clipPath id="hero-create-crop"><rect x="250" y="115" width="470" height="730" /></clipPath></defs><image :href="heroArt" width="1600" height="900" clip-path="url(#hero-create-crop)" /></svg></div>
        <div class="download-phone-front"><svg viewBox="940 115 380 730" role="img" aria-label="Listen to Taking the Long Way Home on Vanso"><defs><clipPath id="hero-listen-crop"><rect x="940" y="115" width="380" height="730" /></clipPath></defs><image :href="heroArt" width="1600" height="900" clip-path="url(#hero-listen-crop)" /></svg></div>
      </div>
    </section>

    <section class="section container download-store-section">
      <div class="section-heading">
        <h2>Download The Official Vanso AI Music App</h2>
        <p>Scan a code on desktop, or open the official store directly on your phone.</p>
      </div>
      <div class="store-grid">
        <article>
          <h3 class="store-brand-heading"><img class="store-brand-icon" :src="googleIcon" alt="" />Google Play</h3>
          <p>For Android Devices</p>
          <a :href="googleUrl"><img :src="googleQr" alt="QR code for Vanso on Google Play" /></a>
          <a class="text-link" :href="googleUrl">Open Google Play →</a>
        </article>
        <article>
          <h3 class="store-brand-heading"><img class="store-brand-icon" :src="appleIcon" alt="" />App Store</h3>
          <p>For iPhone</p>
          <a :href="appleUrl"><img :src="appleQr" alt="QR code for Vanso on the App Store" /></a>
          <a class="text-link" :href="appleUrl">Open App Store →</a>
        </article>
      </div>
    </section>

    <section class="section container download-benefits">
      <div class="section-heading">
        <span class="eyebrow">WHY VANSO</span>
        <h2>Three Ways To Enjoy Vanso</h2>
      </div>
      <div class="three-grid benefit-grid">
        <article><b>01</b><h3>Turn Everyday Ideas Into Songs</h3><p>Describe an idea, a feeling or a story, and let Vanso transform it into an original AI-generated song.</p></article>
        <article><b>02</b><h3>Find Music That Fits Your Day</h3><p>Explore original songs from others and find something for your mood, your downtime, or your next little adventure.</p></article>
        <article><b>03</b><h3>Connect Over A Song</h3><p>Share your music, save songs you love, and join in with likes and comments.</p></article>
      </div>
    </section>

    <section class="section container product-flow-section">
      <div class="section-heading">
        <span class="eyebrow">A MOBILE-FIRST CREATIVE FLOW</span>
        <h2>From An Idea To Your Own Song</h2>
        <p>Start with something you want to express. Vanso helps you turn it into music with AI, without needing music production experience.</p>
      </div>
      <div class="three-grid download-steps has-product-screens">
        <article>
          <div class="flow-screen-stack official-flow-panel"><svg viewBox="20 55 490 750" role="img" aria-label="Describe a birthday song for Mom"><defs><clipPath id="flow-crop-0"><rect x="20" y="55" width="490" height="750" /></clipPath></defs><image :href="flowArt" width="1600" height="900" clip-path="url(#flow-crop-0)" /></svg></div>
          <b>01</b><h3>Start With An Idea</h3><p>Describe the music, feeling or story you want to create.</p>
        </article>
        <article>
          <div class="flow-generating official-flow-panel"><svg viewBox="615 250 410 440" role="img" aria-label="Vanso generates your song"><defs><clipPath id="flow-crop-1"><rect x="615" y="250" width="410" height="440" /></clipPath></defs><image :href="flowArt" width="1600" height="900" clip-path="url(#flow-crop-1)" /></svg></div>
          <b>02</b><h3>Generate Your Song</h3><p>Let Vanso turn your idea into an original AI-generated track.</p>
        </article>
        <article>
          <div class="flow-single-screen official-flow-panel"><svg viewBox="1130 55 420 750" role="img" aria-label="Preview and personalize your birthday song"><defs><clipPath id="flow-crop-2"><rect x="1130" y="55" width="420" height="750" /></clipPath></defs><image :href="flowArt" width="1600" height="900" clip-path="url(#flow-crop-2)" /></svg></div>
          <b>03</b><h3>Make It Personal</h3><p>Make the song feel more personal with its cover art and description, and choose whether to share it on Vanso.</p>
        </article>
      </div>
    </section>

    <section class="heard-section section">
      <div class="container heard-layout">
        <div class="heard-copy">
          <span class="eyebrow">FROM CREATION TO CONNECTION</span>
          <h2>A Song Can Start A Connection</h2>
          <p>Share a song from your life, then see what catches your ear. Save a new favorite, leave a thoughtful comment, or give a song you believe in a like. Your taste is part of what makes Vanso worth exploring.</p>
        </div>
        <div class="download-connection-art"><img :src="connectionArt" width="720" height="900" loading="lazy" alt="A song about a small win sparks personal comments and connection with listeners." /></div>
      </div>
    </section>

    <section class="ratings section">
      <div class="container">
        <div class="section-heading"><h2>Voices From The Vanso Community</h2><p>Two-row review layout preview. Final quotes and usernames will be replaced with verified community feedback.</p></div>
        <div class="review-viewport review-row"><div class="review-track"><article v-for="(review, index) in [...reviewsTop, ...reviewsTop]" :key="`top-${index}`"><b>COMMUNITY REVIEW</b><p>“{{ review[1] }}”</p><small>{{ review[0] }}</small></article></div></div>
        <div class="review-viewport review-row"><div class="review-track reverse"><article v-for="(review, index) in [...reviewsBottom, ...reviewsBottom]" :key="`bottom-${index}`"><b>COMMUNITY REVIEW</b><p>“{{ review[1] }}”</p><small>{{ review[0] }}</small></article></div></div>
      </div>
    </section>

    <section class="section container mobile-studio-bridge">
      <div class="studio-info-strip">
        <svg class="studio-info-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="7" width="38" height="27" rx="4" /><path d="M24 34v7m-9 0h18M13 26v-6m8 6V15m8 11v-8m8 8V12" /></svg>
        <div><h2>Your Music, Connected On The Web</h2><p>View available performance data for your published music, whether created in the app or uploaded from the web. You can also upload finished tracks through Creator Studio.</p></div>
        <a class="button ghost" :href="creatorStudioUrl">Open Creator Studio <span aria-hidden="true"> →</span></a>
      </div>
    </section>

    <section id="help" class="section container faq">
      <div class="section-heading"><h2>Vanso App FAQs</h2></div>
      <details open><summary>Is Vanso Available On iOS And Android?</summary><p>Yes. Vanso is available through the Apple App Store and Google Play.</p></details>
      <details><summary>Can I Create AI Music On The Website?</summary><p>Vanso’s AI music creation experience is currently built for the mobile App. Creator Studio on the web supports uploading finished tracks and viewing available performance data.</p></details>
      <details><summary>Do I Need Music Production Experience?</summary><p>No. Vanso is designed to help people turn ideas, emotions and stories into original music without requiring professional production experience.</p></details>
      <details><summary>What Can I Do After Creating A Song?</summary><p>You can update details such as the cover art and description, and choose whether to share your song on Vanso for others to discover.</p></details>
      <details><summary>Can I Use The Same Account On Mobile And Web?</summary><p>Yes. Sign in with the same Vanso account to access the available mobile and web features connected to your account.</p></details>
    </section>

    <section class="final-cta section">
      <span class="eyebrow">CREATE • LISTEN • CONNECT</span>
      <h2>A Little Music For Your Everyday</h2>
      <p>Get the Vanso app to turn moments into songs and discover music from others.</p>
      <div class="download-final-actions"><a class="button ghost" :href="appleUrl"><img class="store-brand-icon" :src="appleIcon" alt="" />Download On The App Store</a><a class="button ghost" :href="googleUrl"><img class="store-brand-icon" :src="googleIcon" alt="" />Get It On Google Play</a></div>
    </section>
    <SiteFooter />
  </main>
</template>
