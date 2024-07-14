import {createSlice} from "@reduxjs/toolkit"
import { List } from "../../Api/Data";


const userSlice = createSlice({
    name:"user",
    initialState: List,
    reducers:{
       addUser:(state, action) => {
        state.push(action.payload)
       },
       updateUser:(state, action) =>{
        const {id , name, email} = action.payload;
        const uu = state.find(user => user.id == id);
        if (uu) {
            uu.name = name;
            uu.email = email;
        }
       },
       delUser:(state, action) =>{
        const {id} = action.payload;
        const uu = state.find(user => user.id == id);
        if (uu) {
            return state.filter(f => f.id !== id)
        }
       },

    }
})

export const {addUser, updateUser,delUser} = userSlice.actions
export default userSlice.reducer;