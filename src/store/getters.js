const getters = {
	sidebar: state => state.app.sidebar,
  visitedViews: state => state.tagsView.visitedViews,
  loginState: state => state.user.loginState,
	avatar: state => state.user.avatar,
	name: state => state.user.name,
	roles: state => state.user.roles,
  departments: state => state.user.departments,
  menus: state => state.user.menus
}
export default getters
