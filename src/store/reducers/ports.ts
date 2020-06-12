import { mergeDeepRight } from 'ramda'
import { PortsActions } from '../actions'
import { PortsState } from '../../interfaces/store/reducers'
import { PortsTypes } from '../../interfaces/store/actions'

const initialState: PortsState = {
  count: undefined,
}

export default (state = initialState, action: PortsActions): PortsState => {
  switch (action.type) {
    case PortsTypes.INIT_MAP: {
      return mergeDeepRight(state, {
        count: action.payload.count,
      })
    }
    case PortsTypes.ADD: {
      return mergeDeepRight(state, {
        count: ++state.count,
      })
    }
    default:
      return state
  }
}
