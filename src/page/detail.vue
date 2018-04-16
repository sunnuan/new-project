<template>
  <div class="bg" :style="home_bg">
    <div class="home_backg">
      <headerF></headerF>
      <div class="container">
        <div class="box">
          <div class="detail">
            <p>关键字</p>
            <p>name - 包名。

              version - 包的版本号。

              description - 包的描述。

              homepage - 包的官网 url 。

              author - 包的作者姓名。

              contributors - 包的其他贡献者姓名。

              dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。

              repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。

              main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。

              keywords - 关键字</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import headerF from '../components/header'
    export default {
        name: "detail",
        data () {
          return {
            home_bg:{
              backgroundImage: "url(" + require("../assets/detail.jpg") +  ")"
            }
          }

        },
        components: {
          headerF
        }
    }
</script>

<style lang="less">
  .deatil {
    margin: 0 auto;
    p {
      font-size: 18px;
    }
    img {
      max-width: 100%;
    }
    a {
      font-size: inherit;
      color: #0275d8;
    }
    a:hover {
      text-decoration: underline;
      color: #014c8c;
    }
    pre {
      padding: 1rem;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 80%;
      overflow: auto;
    }

    blockquote {
      border-left: 5px solid #eee;
      padding: 0.75rem 1.5rem;
      margin: 0 0 1.5rem;
      color: lighten(black, 50%);
      font-style: italic;
      p {
        margin: 0;
      }
    }
    pre code {
      padding: 0;
      color: inherit;
      font-size: inherit;
      background-color: transparent;
      border-radius: 0;
    }
    code {
      padding: 0.2rem 0.4rem;
      font-size: 90%;
      color: #bd4147;
      background-color: #f7f7f9;
      border-radius: 0.25rem;
    }
    table {
      width: 100%;
      margin-bottom: 20px;
      border: 1px solid #dddddd;
      border-collapse: collapse;
      border-left: none;

      th,
      td {
        padding: 6px;
        border-top: 1px solid #dddddd;
        border-left: 1px solid #dddddd;
      }
    }
  }
  // post mediaQuery
  @media (min-width: 768px) {
    #post {
      width: 80%;
    }
  }
  @media (min-width: 992px) {
    #post {
      width: 60%;
    }
  }
</style>
