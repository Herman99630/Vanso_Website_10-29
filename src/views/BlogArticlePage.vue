<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import BlogArtwork from '../components/BlogArtwork.vue'
import { blogPosts } from '../data/blogPosts'
import '../blog.css'
const route = useRoute()
const post = computed(() => blogPosts.find(item => item.slug === route.params.slug))
</script>

<template>
  <main class="page blog-page"><SiteHeader />
    <article v-if="post" class="container blog-article">
      <RouterLink class="blog-back" to="/blog">← Back To Blog</RouterLink>
      <header><span class="blog-category">{{ post.category }}</span><h1>{{ post.title }}</h1><p class="blog-article-deck">{{ post.excerpt }}</p><p class="blog-preview-note">Editorial preview · Draft content for review, not a published article.</p></header>
      <BlogArtwork :post="post" eager />
      <div class="blog-article-body"><section v-for="[title, body] in post.sections" :key="title"><h2>{{ title }}</h2><p>{{ body }}</p></section><div class="blog-article-actions"><RouterLink class="button" to="/download">Explore Vanso</RouterLink><RouterLink class="blog-back" to="/blog">More Stories →</RouterLink></div></div>
    </article>
    <section v-else class="container blog-not-found"><h1>Story Not Found</h1><p>This story is not available in the preview.</p><RouterLink class="button" to="/blog">Back To Blog</RouterLink></section>
    <SiteFooter />
  </main>
</template>
