export const state = () => ({
  score: null
})

export const mutations = {
  scoring (state,score) {
    state.score = score
  }
}