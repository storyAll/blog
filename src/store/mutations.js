import * as types from './types'

const mutations = {
  [types.UPDATE_SLIDE_LEFT] (state, slideLeft) {
    state.slideLeft = slideLeft
  },
  [types.UPDATE_ID] (state, id) {
    state.id = id
  }
}

export default mutations
