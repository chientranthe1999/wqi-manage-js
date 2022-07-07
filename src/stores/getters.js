const getters = {
  language: (state) => state.app.language,
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  role: (state) => state.user.roles,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name
}
export default getters
