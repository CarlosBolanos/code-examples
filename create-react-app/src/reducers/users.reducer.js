const initialState = {
    loading: 'INITIALIZED',
    error: null,
    users: []
}

export const usersReducer = (state = initialState, action) => {    
    switch(action.type) {
        case 'USERS_IS_FETCHING':
            return {...state, loading: 'LOADING'}

        case 'USERS_HAS_SUCCEDED':
            return {...state, loading: 'DONE', users: action.payload}

        case 'USERS_HAS_ERRORED':
            return {...state, loading: 'DONE', users: action.payload}

        default:
            return state;
    }
}