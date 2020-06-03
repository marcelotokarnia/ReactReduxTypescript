import { mergeDeepRight } from 'ramda'
import { PortsActions } from '../actions'
import { PortsState } from '../../interfaces/store/reducers'
import { PortsTypes } from '../../interfaces/store/actions'

const initialState: PortsState = {
  defaultCenter: undefined,
}

export default (state = initialState, action: PortsActions): PortsState => {
  switch (action.type) {
    case PortsTypes.INIT_MAP: {
      return mergeDeepRight(state, {
        defaultCenter: action.payload.defaultCenter,
      })
    }
    default:
      return state
  }
}
