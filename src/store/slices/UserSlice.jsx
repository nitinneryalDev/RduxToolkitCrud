import { clearUsers } from "../actions";
import { createSlice  } from "@reduxjs/toolkit"; 


const vulnerable = () => {
    console.log('Frontend working :', clearUsers )

}

vulnerable()



const usersSlice = createSlice( {
    name:"user" , 
    initialState:[] ,
    reducers: {
        addUser(state , action) {
            state.push(action.payload)
            console.log(action.payload)
        } ,
        removeUser(state , action) {
          
           state.splice(action.payload , 1 )

        },
        clearUsers(state , action) {
          return [];
        },
    } ,


    extraReducers(builder) {
        builder.addCase( clearUsers , () => {
            return  [] ;
        } )
    }
});

// console.log(usersSlice.actions)

export  default usersSlice.reducer;
export const {addUser , removeUser    } = usersSlice.actions;