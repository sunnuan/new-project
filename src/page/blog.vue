<template>
  <div class="bg" :style="home_bg">
    <div class="home_backg">
      <headerF></headerF>
    </div>
    <div class="container">
     <div class="box">
        <ul>
          <li v-for="item in dataInfo" class="blog_list b_b m-md-t-b">
            <h3>{{ item.title }}</h3>
            <p>{{ item.descript }}</p>
            <div class="type_font">{{ item.type }}</div>
            <div>{{ item.date }}</div>
          </li>
        </ul>
     </div>
    </div>
  </div>
</template>

<script>
  import headerF from '../components/header'
  export default {
    name: "home",
    data () {
      return {
        home_bg: {
          backgroundImage: "url(" + require("../assets/blog.jpg") + ")",
        },
        dataInfo: [{
          date: '2016-05-02',
          title: '王小虎',
          descript: '上海市普陀区金沙江路 1518 弄',
          type: 'vue js'
        },{
          date: '2016-05-02',
          title: '王小虎',
          descript: '上海市普陀区金沙江路 1518 弄',
          type: 'vue js'
        },{
          date: '2016-05-02',
          title: '王小虎',
          descript: '上海市普陀区金沙江路 1518 弄',
          type: 'vue js'
        },{
          date: '2016-05-02',
          title: '王小虎',
          descript: '上海市普陀区金沙江路 1518 弄',
          type: 'vue js'
        }]
      }
    },
    components: {
      headerF
    }
  }
</script>

<style scoped>

  .blog_info {
    width: 100%;
  }

</style>
