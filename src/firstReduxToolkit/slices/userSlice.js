import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    id: null,
    name: null,
    surname: null,
    birth_year: null,
    portfolio: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action){
            state.name.push(action.payload)
            state.surname.push(action.payload)
            state.birth_year.push(action.payload)
            state.portfolio.push(action.payload)

        },
        setUser(state, action) {
            state.id = action.payload.id
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.birth_year = action.payload.birth_year
            state.portfolio = action.payload.portfolio

        },
        removeUser(state) {
            state.id = null
            state.name =  null
            state.surname =  null
            state.birth_year =  null
            state.portfolio = null

        },
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
