import { createStore, combineReducers } from 'redux';

// importar los reducers
import FilterReducer from './reducers/filter-reducer';
import TasksReducer from './reducers/tasks-reducer';

// creamos los reducers (encargados de administrar los estados)
const reducers = combineReducers({
    FilterReducer,
    TasksReducer
});

// creamos el almacen de datos
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// dejamos disponible el nuevo almacen
export default store;