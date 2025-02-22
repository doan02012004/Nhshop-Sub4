
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collapsed:false
}

const antSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setCollapsed: (state, action) =>{
            state.collapsed = action.payload
        },
      
    }
})
export const {setCollapsed} = antSlice.actions

export default antSlice.reducer
