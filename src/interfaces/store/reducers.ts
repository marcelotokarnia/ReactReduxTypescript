import rootReducer from '../../store/reducers'

export type RootState = ReturnType<typeof rootReducer>

export interface PortsState {
  defaultCenter?: number
}
