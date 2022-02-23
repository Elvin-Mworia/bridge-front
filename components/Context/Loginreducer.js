export const Loginreducer=(loginstate,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...loginstate,isLoggedIn:!loginstate.isLoggedIn};
        case "LOGOUT":
            return {...loginstate,isLoggedIn:false};    

        default:
              return loginstate;
    }
}