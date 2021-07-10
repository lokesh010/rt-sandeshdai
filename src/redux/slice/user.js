import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    userList: []
}



const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserList(state, action) {
            state.userList = action.payload
        }
    },
    extraReducers: {

    }
})


export const { setUserList } = user.actions;
export const userList = (state) => state.user.userList;
export default user.reducer;

/**
 case 'GET_ALL_USERS'           // immutable

 return {
     ...state,
     userList: [...state.userList, ...action.payload.user],
     obj: {...state.obj, obj2: 'value}
 }

 */


/**
 const arrow = () => {

 }

 arrow()

 */