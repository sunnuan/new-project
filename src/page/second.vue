<template>
    <div>
      <h1>I am page</h1>
      <span>You can call me {{ name }}</span>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h1 style="line-height: 36px; color: #20A0FF;">豆瓣电影排行</h1>
        </div>
        <div v-for="item in list" class="text item">
          {{ item.title }}
        </div>
      </el-card>
    </div>
</template>

<script>
    export default {
      name: "second",
      data () {
          return {
            name: 'Lay',
            list: []
          }
      },
      mounted: function() {
          this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {},
            {
              headers: {},
              emulateJson: true
            }).then(function (resResult) {

              console.log(resResult.body)
              this.list = resResult.body.subjects;
              console.log(this.list)

          }), function(resResult) {
            console.log(resResult)
          }
      }
    }
</script>

<style scoped>

</style>
