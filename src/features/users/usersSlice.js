import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Dude Lebowski'},
    {id: '1', name: 'William Dafoe'},
    {id: '2', name: 'Steve Buscemi'}
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;