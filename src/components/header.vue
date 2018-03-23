<template>

  <el-container>
    <el-header class="n-p">
      <div class="header-bg">
        <div class="header-author inline pull-left">
          <h2 class="p-md-l">
            <router-link to="/">
              SUNUAN
            </router-link>
          </h2>
        </div>
        <el-menu class="el-menu-demo pull-right hidden-xs-only">
          <el-menu-item index="1" class="inline-b">
            <router-link to="/">
              Home
            </router-link>
          </el-menu-item>
          <el-menu-item index="2" class="inline-b">
            <router-link to="/blog">
              Blog
            </router-link>
          </el-menu-item>
          <el-menu-item index="3" class="inline-b">
            <router-link to="/about">
              About
            </router-link>
          </el-menu-item>
          <el-submenu index="4" class="inline-b">
            <template slot="title">Contact Me</template>
            <el-menu-item index="4-1">
              <a href="https://github.com/sunnuan">Github</a>
            </el-menu-item>
            <el-menu-item index="4-2">
              <a href="https://www.zhihu.com/people/su-nuan-67-6/activities">知乎</a>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <div class="header-right">
          <button class="header-btn pull-right">☰</button>
        </div>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>



</template>

<script>
    export default {
        name: "header",
        data () {
            return {
              author: 'SUNNUAN'
            }
        }
    }
</script>

<style scoped>

  a {
    color: #000000;
  }

  .header-bg {
    background-color: #FEF8EA;
    height: 60px;
    width: 100%;
  }

  .header-author {
    line-height: 60px;
  }

  .el-menu-demo {
    background-color: #FEF8EA;
    display: inline;
  }

  .el-menu-demo li {
    font-weight: 800;
  }

  .header-right {
    padding-top: 2%;
  }

  .header-btn {
    line-height: 1;
    padding: 8px 10px;
    margin-right: 15px;
    border: 1px solid #bbb;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    color: #8cc5ff;
  }

  @media (min-width: 768px){
    .header-btn {
      display: none;
    }

    .el-menu-demo {
      display: block;
      background-color: transparent;
    }

    .header-bg {
      background-color: transparent;
    }
  }

</style>














