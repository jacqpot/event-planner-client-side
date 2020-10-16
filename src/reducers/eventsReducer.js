export const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_EVENTS":
      return action.payload;
    case "FETCH_EVENT":
      return action.payload;
    case "ADD_EVENT":
      return [...state, action.payload];
    case "UPDATE_EVENT":
          let copy = state
          let ev = copy.find(event => action.payload.event_id === event.id)
          ev.sections.push(action.payload)
          return [...state.filter(event => action.payload.event_id === event.id), ev]


      default:
        return state;
      }
    };
    
    
    

// ...state.find(event => action.payload.event_id === event.id)