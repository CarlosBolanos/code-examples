import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from '../actions/user.actions'
import {  getUsersState } from '../selectors/users.selectors';

export const useGetUsers = () => {
    const dispatch = useDispatch()
    const {users, loading, error} = useSelector(getUsersState)

    if(loading === 'INITIALIZED'){
        dispatch(fetchUsersAction())
    }    

    return {users, loading , error}
}