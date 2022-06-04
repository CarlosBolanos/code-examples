import axios from 'axios'

export const fetchUsersAction = () => {
    console.log('f: fetchUsers')
    return (dispatch) => {
        dispatch({ type: 'USERS_IS_FETCHING', payload: '' });
        
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log('f: response', response.data)
                dispatch({ type: 'USERS_HAS_SUCCEDED', payload: response.data });
            }).catch(ex => {
                dispatch({ 
                    type: 'USERS_HAS_ERRORED', 
                    payload: {code: 1, message: 'something went wrong'} 
                });
            })
    }
}
