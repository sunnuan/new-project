// import { login, logout, getInfo } from '@/api/login'
// import { getLoginState, setLoginState, removeLoginState } from '@/utils/auth'
//
// function formatMenus(menus) {
//   menus.forEach((menu, index) => {
//     delete menu.parent
//     menu.meta = {title: menu.title, icon: menu.icon}
//     delete menu.icon
//     delete menu.createdAt
//     delete menu.deletedAt
//     if (menu.children) {
//       formatMenus(menu.children)
//     }
//   })
//   return menus
// }
//
// function sortMenus(menus) {
//   menus = menus.sort((a, b) => {
//     return a.sortNumber - b.sortNumber
//   })
//
//   menus.forEach((menu, index) => {
//     menu.children = menu.children.sort((a, b) => {
//       return a.sortNumber - b.sortNumber
//     })
//   })
//
//   return menus
// }
//
// const user = {
// 	state: {
// 		loginState: getLoginState(),
// 		name: '',
// 		avatar: '',
// 		roles: [],
//     departments: [],
//     menus :[]
// 	},
//
// 	mutations: {
// 		SET_LOGIN_STATE: (state, loginState) => {
// 			state.loginState = loginState
// 		},
// 		SET_NAME: (state, name) => {
// 			state.name = name
// 		},
// 		SET_AVATAR: (state, avatar) => {
// 			state.avatar = avatar
// 		},
// 		SET_ROLES: (state, roles) => {
// 			state.roles = roles
// 		},
//     SET_DEPARTMENTS: (state, departments) => {
//       state.departments = departments
//     },
//     SET_MENUS :(state, menus) => {
//       state.menus = menus
//     }
// 	},
//
// 	actions: {
// 		// 获取用户信息
// 		GetInfo({ commit }) {
// 			return new Promise((resolve, reject) => {
// 				getInfo().then(response => {
// 					const data = response.data
// 					commit('SET_ROLES', data.roles)
// 					commit('SET_DEPARTMENTS', data.departments)
// 					commit('SET_NAME', data.name)
// 					commit('SET_AVATAR', data.avatar)
//           commit('SET_MENUS',sortMenus(formatMenus(data.menus)))
// 					resolve(response)
// 				}).catch(error => {
// 					reject(error)
// 				})
// 			})
// 		},
//
// 		// 登出
// 		LogOut({ commit, state }) {
// 			return new Promise((resolve, reject) => {
// 				logout(state.loginState).then(() => {
// 					commit('SET_LOGIN_STATE', '')
// 					commit('SET_ROLES', '')
//           commit('SET_DEPARTMENTS', '')
// 					removeLoginState()
// 					resolve()
// 				}).catch(error => {
// 					reject(error)
// 				})
// 			})
// 		},
//
// 		// 前端 登出
// 		FedLogOut({ commit }) {
// 			return new Promise(resolve => {
// 				commit('SET_LOGIN_STATE', '')
// 				removeLoginState()
// 				resolve()
// 			})
// 		}
// 	}
// }
//
// export default user
