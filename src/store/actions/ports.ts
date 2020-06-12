import { ActionsUnion, PortsTypes } from '../../interfaces/store/actions'
import { createAction } from './'

export const PortsActions = {
  initMap: (p: { count: number }) => createAction(PortsTypes.INIT_MAP, p),
  add: () => createAction(PortsTypes.ADD),
}

export type PortsActions = ActionsUnion<typeof PortsActions>
