export const state = () => ({
  score: [0,0,0,0,0]
})

export const mutations = {
  scoring (state,score) {
    state.score = score
  }
}