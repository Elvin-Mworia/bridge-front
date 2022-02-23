
export const user_Reducer=(state,action)=>{
    switch(action.type){
        case "LOGGED-IN":
            return {...state,customer:action.payload.customer,email:action.payload.email,id:action.payload.id};

        case "LOGGED_OUT":
            return {...state,customer:"",email:"",id:""}
       
        default:
              return state;
    }
}