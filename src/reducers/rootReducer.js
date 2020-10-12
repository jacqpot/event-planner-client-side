import { combineReducers } fromo 'redux'

import { eventsReducer } from './eventsReducer'
import { sectionsReducer } from './sectionsReducer'


export const rootReducer = combineReducers({
    events: eventsReducer,
    sections: sectionsReducer 
})

