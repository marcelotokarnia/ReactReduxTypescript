import { PortsActions } from '.'

export const thunkAction = () => async dispatch => {
  dispatch(PortsActions.initMap({ defaultCenter: 1 }))
}
