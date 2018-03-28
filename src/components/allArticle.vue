<template>
    <div>
      <ul>
        <li v-for="item in dataInfo" class="blog_list b_b m-md-t-b">
          <!--, query: {id: item.id}-->
          <router-link :to="{path:'/detail'}">
            <h1 class="black">{{ item.title }}  </h1>
          </router-link>
          <p>{{ item.descript }}</p>
          <h3 class="gray">{{ item.type }}</h3>
          <div class="gray">{{ item.date }}</div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "allArticle",
        props: {
          dataInfo: {
            type: Array,
            required: true
          }
        }
    }
</script>

<style scoped>

  li {
    text-align: left;
  }

  h1 {
    /*font-weight: 500;*/
  }

</style>
