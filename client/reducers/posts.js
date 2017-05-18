/**
 * A reducer takes in two things
 * 1. the action (what happened)
 * 2. copy of the current state
 */

export default function posts (state = [],action){
    console.log(state, action);
    const i=action.index;
    
    switch(action.type){
        case "ICREMENT_LIKES":
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes+1,},
                ...state.slice(i+1)
            ]
        default:
            return state;
    }
}

