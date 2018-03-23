// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import { ApolloClient, createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

//graphql-js 构建客户端，可以构建多个适应不同接口
// const networkInterfaceTask = createNetworkInterface({
//   uri: '/api/tasks/graphql',
//   transportBatching: true,
//   opts: {
//     credentials: 'include'
//   }
// })
//
// const apolloClientTask = new ApolloClient({
//   networkInterface: networkInterfaceTask,
//   connectToDevTools: true
// })
//
// const apolloProvider = new VueApollo({
//   clients: {
//     task: apolloClientTask
//   },
//   defaultClient: apolloClientTask
// })

//graphql-js


Vue.config.debug = true;
Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueApollo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


