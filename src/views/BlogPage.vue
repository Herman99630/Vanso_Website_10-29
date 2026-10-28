<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import BlogArtwork from '../components/BlogArtwork.vue'
import { blogPosts } from '../data/blogPosts'
import '../blog.css'
const featured = blogPosts.find(post => post.featured)
const posts = blogPosts.filter(post => post !== featured)
</script>

<template>
  <main class="page blog-page">
    <SiteHeader />
    <div class="container blog-content">
      <header class="blog-intro"><div><span class="eyebrow">THE VANSO BLOG</span><h1>A Little Life.<br><span class="gradient-text">A Lot Of Music.</span></h1></div><p>Ideas to make your own, songs to get lost in, and stories that bring us a little closer.</p></header>
      <p class="blog-preview-note">Editorial preview · Sample articles for layout review.</p>
      <article class="blog-featured">
        <RouterLink class="blog-featured-link" :to="`/blog/${featured.slug}`">
          <div class="blog-featured-visual"><BlogArtwork :post="featured" eager /><span class="blog-pin"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 3 6 0-1 6 4 4v2H6v-2l4-4-1-6ZM12 15v6" /></svg>PINNED STORY</span></div>
          <div class="blog-featured-copy"><span class="blog-category">{{ featured.category }}</span><h2>{{ featured.title }}</h2><p>{{ featured.excerpt }}</p><span class="blog-read">Read The Story <span aria-hidden="true">↗</span></span></div>
        </RouterLink>
      </article>
      <section class="blog-latest" aria-labelledby="latest-stories"><div class="blog-section-heading"><h2 id="latest-stories">More To Explore</h2><span>Stories, Ideas &amp; Everyday Inspiration</span></div>
        <div class="blog-grid"><article v-for="post in posts" :key="post.slug" class="blog-card"><RouterLink :to="`/blog/${post.slug}`"><BlogArtwork :post="post" /><div class="blog-card-copy"><span class="blog-category">{{ post.category }}</span><h3>{{ post.title }}</h3><p>{{ post.excerpt }}</p><span class="blog-read">Read The Story <span aria-hidden="true">↗</span></span></div></RouterLink></article></div>
      </section>
      <section class="blog-end"><div><span class="eyebrow">YOUR LIFE, YOUR MUSIC</span><h2>Have A Little Story Of Your Own?</h2><p>Turn a moment into a song, or discover one that feels like you.</p></div><RouterLink class="button" to="/download">Get The App</RouterLink></section>
    </div>
    <SiteFooter />
  </main>
</template>
