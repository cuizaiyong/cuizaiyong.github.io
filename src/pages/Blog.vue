<template>
  <div>
    <Layout>
      <div v-for="gist in $page.gist.edges" :key="gist.node.id">
        <p>{{ gist.node.updated_at }} 更新</p>
        <p class="blog-description">{{ gist.node.description }}</p>
      </div>
    </Layout>
  </div>
</template>

<page-query>
query {
  gist: allGist {
    edges {
      node {
        id
        description
        files {
          first_attempt {
            filename
          }
        }
        created_at
        updated_at
      }
    }
  }
}
</page-query>

<script>
export default {
  mounted() {
    console.log(this.$page.gist.edges[0])
  }
}
</script>

<style>
p {
  border-bottom: 1px solid #ccc;
}
.blog-description {
  border: 1px solid #ccc;
}
</style>