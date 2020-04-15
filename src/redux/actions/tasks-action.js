import * as typeActions from './types-actions';

// acción que permite agregar una tarea al listado
export const addTask = ({title, description, done}) => ({
    type:    typeActions.ACTION_TASK_ADDTASK,
    payload: {title, description, done},
});

// acción que permite modificar el estado de una tarea (completado/pendiente)
export const updateDoneTask = ({id, done}) => ({
    type:    typeActions.ACTION_TASK_UPDATEDONE,
    payload: {
        id,
        done
    },
});
