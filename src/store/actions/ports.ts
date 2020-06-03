import { ActionsUnion, PortsTypes } from '../../interfaces/store/actions'
import { createAction } from './'

export const PortsActions = {
  initMap: (p: { defaultCenter: number }) => createAction(PortsTypes.INIT_MAP, p),
}

export type PortsActions = ActionsUnion<typeof PortsActions>
