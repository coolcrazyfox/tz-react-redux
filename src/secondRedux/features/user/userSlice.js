import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    first_name: '',
    surname: '',
    birth_year: '',
    portfolio: '',
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.first_name = action.payload
        },
        setLastName: (state, action) => {
            state.surname = action.payload
        },
        setBirthDay: (state, action) => {
            state.birth_year = action.payload
        },
        setResume: (state, action) => {
            state.portfolio = action.payload
        },
        // addTodo(state, action){
        //     state.first_name.push(action.payload)
        // },
    }

})
export default  userSlice.reducer;
export const {setFirstName, setLastName, setResume, setBirthDay} = userSlice.actions;

