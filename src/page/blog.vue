<template>
  <div class="bg" :style="home_bg">
    <div class="home_backg">
      <headerF></headerF>
    </div>
    <div class="container">
     <div class="box">
       <articleBlog v-bind:dataInfo = "dataInfo"></articleBlog>
     </div>
    </div>
  </div>
</template>

<script>
  import headerF from '../components/header'
  import articleBlog from '../components/allArticle'
  export default {
    name: "home",
    data () {
      return {
        home_bg: {
          backgroundImage: "url(" + require("../assets/blog.jpg") + ")",
        },
        dataInfo: [{
          id: 1,
          date: '2016-05-02',
          title: '王小虎',
          descript: '上海市普陀区金沙江路 1518 弄',
          type: 'vue js'
        },{
          id: 2,
          date: '2016-05-02',
          title: '王小虎',
          descript: '上海市普陀区金沙江路 1518 弄',
          type: 'vue js'
        },{
          id: 3,
          date: '2016-05-02',
          title: '王小虎',
          descript: '上海市普陀区金沙江路 1518 弄',
          type: 'vue js'
        },{
          id: 4,
          date: '2016-05-02',
          title: '王小虎',
          descript: '上海市普陀区金沙江路 1518 弄',
          type: 'vue js'
        }]
      }
    },
    components: {
      headerF,
      articleBlog
    }
  }
</script>

<style scoped>

  .blog_info {
    width: 100%;
  }

</style>
