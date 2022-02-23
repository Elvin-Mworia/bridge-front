export const cartReducer=(cartstate,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
              return {...cartstate,Items:[...cartstate.Items,{...action.payload}],totalItems:cartstate.totalItems+1,Amount:cartstate.Amount+action.payload.price} ;
        case "REMOVE_FROM_CART":
               return {...cartstate,Items:cartstate.Items.filter((prod)=>prod.id !== action.payload.id),Amount:cartstate.Amount-action.payload.price,totalItems:cartstate.totalItems-1};
        case "ORDERS_BOUGHT":
            return {Items:0,totalItems:0,Amount:0};
        default:
            return cartstate;
    }

}