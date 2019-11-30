export const state = () => ({
  score: [0,0,0,0,0]
})

export const mutations = {
  increment (state,score) {
    state.score = score
  }
}