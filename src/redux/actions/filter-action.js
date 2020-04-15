import * as typeActions from './types-actions';

// acción para modificar el estado del filtro de las tareas
export const setFilterValue = (value) => ({
    type:    typeActions.ACTION_FILTER_SETVALUE,
    payload: value,
});
