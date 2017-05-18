
function postComments(state = [], action){
    switch(action.type){
        case "REMOVE_COMMENT":
             console.log(state);
            return [
                ...state.slice(0,action.index),
                ...state.slice(action.index+1)
            ];
        case "ADD_COMMENT":
            return [...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ];
        default:
            return state;
    }
}

export default function comments (state = {},action){
    
    return {
        ...state,
        [action.postId]:postComments(state[action.postId],action)
    }
}

