import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'



const store = configureStore({
    reducer : {
        cartStore : cartSlice,
       
    },
   

    
})

export default store