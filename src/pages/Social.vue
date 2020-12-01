<template>
  <div>
    <Layout>
      <ul class="social-select">
        <li @click="toggle('follower')">粉丝</li>
        <li @click="toggle('following')">关注</li>
      </ul>
      <div class="social-wrapper">
        <ul v-for="p in person" :key="p.node.id">
          <p>{{ p.node.login }}</p>
          <a :href="p.node.html_url" target="_blank">TA的主页</a>
          <p><img :src="p.node.avatar_url" alt=""></p>
        </ul>
      </div>
    </Layout>
  </div>
</template>

<page-query>
query {
  following: allFollowing {
    edges {
      node {
        id
        login
        html_url
        avatar_url
      }
    }
  }
  followers: allFollowers {
    edges {
      node {
        id
        login
        html_url
        avatar_url
      }
    }
  }
}
</page-query>
<script>
export default {
  data() {
    return {
      person: []
    }
  },
  created() {
    this.person = this.$page.followers.edges;
  },
  methods: {
    toggle(type) {
      if (type === 'follower') {
        this.person = this.$page.followers.edges;
      } else {
        this.person = this.$page.following.edges
      }
    }
  }
}
</script>

<style>
ul,li,ol {
  list-style: none;
}
.social-select {
  display: flex;
}
.social-select li:last-child {
  margin-left: 10px;
}
.social-select li {
  cursor: pointer;
}
</style>