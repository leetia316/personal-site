export const state = () => ({
  config: {
    auth: false,
  },
})

export const mutations = {
  authenticate (state, res) {
    state.config = res
  },
}
