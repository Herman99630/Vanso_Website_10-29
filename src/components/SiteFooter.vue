<script setup>
import discordIcon from '../../assets/ic_discord_3x.webp'
import instagramIcon from '../../assets/ic_ins_3x.webp'
import tiktokIcon from '../../assets/ic_tiktok_3x.webp'
import xIcon from '../../assets/ic_x_3x.webp'
import youtubeIcon from '../../assets/ic_youtube_3x.webp'
import '../design-icons.css'
</script>
<template>
  <footer class="site-footer">
    <div class="footer-brand-row"><RouterLink class="brand" to="/"><img class="brand-mark" src="/assets/vanso-logo.png" alt="" /><img class="brand-word" src="/assets/vanso-footer-text.svg" alt="Vanso" /></RouterLink><div class="footer-social-icons" aria-label="Social media"><a href="https://discord.gg/GK8nNyvzFf" aria-label="Discord" title="Discord"><img :src="discordIcon" alt="" width="28" height="28" /></a><a href="https://www.instagram.com/vansomusic/" aria-label="Instagram" title="Instagram"><img :src="instagramIcon" alt="" width="28" height="28" /></a><a href="https://www.tiktok.com/@vansomusic" aria-label="TikTok" title="TikTok"><img :src="tiktokIcon" alt="" width="28" height="28" /></a><a href="https://x.com/vansooffical" aria-label="X" title="X"><img :src="xIcon" alt="" width="28" height="28" /></a><a href="https://www.youtube.com/@Vanso_AI" aria-label="YouTube" title="YouTube"><img :src="youtubeIcon" alt="" width="28" height="28" /></a></div></div>
    <div class="footer-inner">
      <div><strong>Product</strong><RouterLink to="/about">About Vanso</RouterLink><RouterLink to="/download">Download App</RouterLink><RouterLink to="/pricing">Pricing</RouterLink><a href="https://vanso.ai/main/home">Creator Studio</a></div>
      <div><strong>Resources</strong><RouterLink to="/blog">Blog</RouterLink><RouterLink to="/help">Help Center</RouterLink><RouterLink to="/download#help">App FAQs</RouterLink><a href="mailto:service@vansound.com">Contact Support</a></div>
      <div><strong>Company</strong><a href="mailto:office2025@vansound.com">Business: office2025@vansound.com</a></div>
      <div><strong>Legal</strong><a href="#privacy">Privacy Policy</a><a href="#terms">User Agreement</a><a href="#community">Community Guidelines</a><a href="#copyright">Copyright Policy</a></div>
    </div>
    <p class="footer-copyright">© 2026 Vanso. All rights reserved.</p>
  </footer>
</template>
