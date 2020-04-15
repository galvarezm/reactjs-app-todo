// constantes de acción
import * as typeActions from '../actions/types-actions';

const defaultState = 0;
/*
    0 = pending
    1 = completed
    2 = all
*/

// esta función se encarga de mantener el estado de este reducer en el store
function reducer(state = defaultState, { type, payload }) {

    // actualizar el estado de filtros
    if ( type === typeActions.ACTION_FILTER_SETVALUE ){
        state = payload;
        return state;
    }

    // (default) retornar el actual valor del estado de filtros
    return state;

}

export default reducer;