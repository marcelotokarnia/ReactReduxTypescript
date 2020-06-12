import { PortsActions } from '.'

export const thunkAction = (initValue: number) => async dispatch => {
  dispatch(PortsActions.initMap({ count: initValue }))
}
