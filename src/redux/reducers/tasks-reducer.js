// constantes de acción
import * as typeActions from '../actions/types-actions';

// importante: desde aqui se podría establecer la data anterior
import dataSource from '../../data/data-source';

const defaultState = dataSource;

// esta función se encarga de mantener el estado de este reducer
function reducer(state = defaultState, { type, payload }) {

    // añadir una tarea al listado
    if ( type === typeActions.ACTION_TASK_ADDTASK ){
        let tmpState = [...state];
        tmpState.push({
            'id':          state.length+1,
            'title':       payload.title,
            'description': payload.description,
            'done':        payload.done
        })
        return tmpState;
    }

    // añadir una tarea al listado
    if ( type === typeActions.ACTION_TASK_UPDATEDONE ){
        let tmpState = [...state];
        tmpState.filter(item => item.id === payload.id).map(item => item.done=payload.done);
        return tmpState;
    }

    // retornar el actual listado
    return state;

}

export default reducer;