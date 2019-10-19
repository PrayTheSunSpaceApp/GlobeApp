/* Here combine all reducers in one store */ 
import { combineReducers } from 'redux';
import { testData } from './testreducer';

export default combineReducers({
    testData
});