import * as types from './types'

const mutations = {
  [types.UPDATE_SLIDE_LEFT] (state, slideLeft) {
    state.slideLeft = slideLeft
  }
}

export default mutations
