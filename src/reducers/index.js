/* Here combine all reducers in one store */ 
import { combineReducers } from 'redux';
import { testData } from './testreducer';
import { historyData } from './history';
export default combineReducers({
    testData,
    historyData
});