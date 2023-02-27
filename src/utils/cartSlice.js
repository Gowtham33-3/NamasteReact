import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            console.log(action.payload);
            state.items.push(action.payload)
        },
        removeItem: (state,action)=> {
            const idx=state.items.findIndex((item)=>(item.id===action.payload))
            state.items.splice(idx,1)
            console.log(state.items)
        },

        clearCart:(state)=>{
            state.items=[];
        },
    }

})

export const {addItem,clearCart,removeItem} =cartSlice.actions

export default cartSlice.reducer