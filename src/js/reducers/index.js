
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import dashboard from './DashboardReducer';


export default combineReducers({
dashboard,
// routing:routerReducer,
})