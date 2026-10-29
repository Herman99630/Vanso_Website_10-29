<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import BlogArtwork from '../components/BlogArtwork.vue'
import { blogPosts } from '../data/blogPosts'
import '../blog.css'
const route = useRoute()
const formatDate = value => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`))
const post = computed(() => blogPosts.find(item => item.slug === route.params.slug))
const recommendations = computed(() => blogPosts
  .filter(item => item.slug !== route.params.slug)
  .sort((a, b) => Number(b.category === post.value?.category) - Number(a.category === post.value?.category))
  .slice(0, 3))
</script>

<template>
  <main class="page blog-page"><SiteHeader />
    <article v-if="post" class="container blog-article">
      <RouterLink class="blog-back" to="/blog">← Back To Blog</RouterLink>
      <header><span class="blog-category">{{ post.category }}</span><h1>{{ post.title }}</h1><p class="blog-article-deck">{{ post.excerpt }}</p><div class="blog-article-meta"><span>By {{ post.author }}<span v-if="post.isPreview" class="blog-meta-preview"> (Preview)</span></span><span class="blog-meta-divider" aria-hidden="true">·</span><span>{{ post.isPreview ? 'Sample Publish Date:' : 'Published:' }} <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time></span></div><p v-if="post.isPreview" class="blog-preview-note">Editorial preview · Author and publication date are placeholders for review.</p></header>
      <BlogArtwork :post="post" eager />
      <div class="blog-article-body"><section v-for="[title, body] in post.sections" :key="title"><h2>{{ title }}</h2><p>{{ body }}</p></section><div class="blog-article-actions"><RouterLink class="button" to="/download">Explore Vanso</RouterLink></div></div>
    </article>
    <section v-else class="container blog-not-found"><h1>Story Not Found</h1><p>This story is not available in the preview.</p><RouterLink class="button" to="/blog">Back To Blog</RouterLink></section>
    <section v-if="post" class="container blog-recommendations" aria-labelledby="recommended-stories">
      <div class="blog-section-heading"><h2 id="recommended-stories">Keep Reading</h2></div>
      <div class="blog-grid">
        <article v-for="item in recommendations" :key="item.slug" class="blog-card">
          <RouterLink :to="`/blog/${item.slug}`">
            <BlogArtwork :post="item" />
            <div class="blog-card-copy">
              <span class="blog-category">{{ item.category }}</span>
              <h3>{{ item.title }}</h3>
              <div class="blog-recommendation-meta"><span>By {{ item.author }}</span><span aria-hidden="true">·</span><time :datetime="item.publishedAt">{{ formatDate(item.publishedAt) }}</time><span v-if="item.isPreview" class="blog-meta-preview">Preview</span></div>
              <p>{{ item.excerpt }}</p>
            </div>
          </RouterLink>
        </article>
      </div>
    </section>
    <SiteFooter />
  </main>
</template>
