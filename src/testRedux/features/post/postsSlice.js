import {createSlice, nanoid} from "@reduxjs/toolkit";


const initialState =[
    {
        // id: '1',
        name: "",
        surname: "",
        birth_year: '',
        portfolio: "",
        // date: sub(new Date(), { minutes: 10 }).toISOString()

    }
]
const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        postAdded(state, action){
            state.push(action.payload)
        },
        // prepare(name, surname, birthYear, portfolio){
        //     return{
        //         payload:{
        //             id:nanoid(),
        //             name,
        //             surname,
        //             birthYear,
        //             portfolio,
        //             // date: new Date().toISOString()
        //         }
        //     }
        // }
    }
})
export const selectAllPosts = (state)=> state.posts;

export const {postAdded}= postsSlice.actions

export default postsSlice.reducer;
