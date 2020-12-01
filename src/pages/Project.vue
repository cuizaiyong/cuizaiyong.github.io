<template>
  <div>
    <Layout>
      <ul v-for="p in $page.project.edges" :key="p.node.id" style="border-bottom: 1px solid #ccc;border-top: 1px solid #ccc">
        <p>
          <span style="margin-right: 50px">{{ p.node.name }}</span>
          <a :href="p.node.html_url">前往github</a>
        </p>
        <p>最近更新 {{ p.node.updated_at }}</p>
        <p>{{ p.node.description }}</p>
        <p>
          <span>star: {{ p.node.stargazers_count }}</span>
          <span style="margin-left: 10px">watcher: {{ p.node.watchers_count }}</span>
          <span style="margin-left: 10px">fork: {{ p.node.forks_count }}</span>

          <span style="margin-left: 40px">{{ p.node.license ? p.node.license.spdx_id : '' }}</span>  
          <span style="margin-left: 20px">{{ p.node.language }}</span>
        </p>
      </ul>
    </Layout>
  </div>
</template>

<page-query>
query {
  project: allProject {
    edges {
      node {
        id
        name
        url
        stargazers_count
        updated_at
        description
        forks_count
        language
        html_url
        watchers_count
        license {
          spdx_id
        }
      }
    }
  }
}
</page-query>
<script>
export default {
  created() {
    console.log(this.$page.project.edges[0].liscense)
  }
}
</script>

<style>

</style>