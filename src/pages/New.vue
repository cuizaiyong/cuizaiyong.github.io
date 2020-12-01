<template>
  <div>
    <Layout>
      <div>
        <p>{{ data.updated_at }} 更新</p>
        <p class="blog-description">{{ data.description }}</p>
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
  computed: {
    data() {
      return this.$page.gist.edges[0].node
    }
  }
}
</script>

<style>

</style>