import { RootState } from '../store'

export const getComponents = (state: RootState) =>
  state.components.present.components

export const getComponentBy = (nameOrId: string | IComponent['id']) => (
  state: RootState,
) => state.components.present.components[nameOrId]

export const getSelectedComponent = (state: RootState) =>
  state.components.present.components[state.components.present.selectedId]

export const getSelectedComponentId = (state: RootState) =>
  state.components.present.selectedId