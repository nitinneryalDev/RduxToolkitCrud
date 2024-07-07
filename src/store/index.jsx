import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/UserSlice";
    

const store = configureStore( {
    // When we have multiple slices it workes as a combined reducer
    reducer: {
        users:usersSlice, 

    },

})

export default store;