import { TYPES } from "../actions/carritoAction";

export const carritoEstadoInicial = {
    products : [],
    
    cart : []
}

export function carritoReducer(state , action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
        let newItem = state.products.find((product) => product.id === action.payload);
        
        let itemInCart = state.cart.find(item=>item.id===newItem.id)
        let car_sin_producto=[...state.cart,{...newItem,cantidad:1}]
        
        let car_con_producto=[...state.cart.map((item)=>item.id===newItem.id?{...item,cantidad:item.cantidad+1}:item)]

        if (!itemInCart){localStorage.setItem("carro", JSON.stringify(car_sin_producto))}else{
        localStorage.setItem("carro", JSON.stringify(car_con_producto))}


        return itemInCart
        ?{...state, cart: state.cart.map((item)=>item.id===newItem.id?{...item,cantidad:item.cantidad+1}:item)}
        :{...state, cart:[...state.cart,{...newItem, cantidad:1}]}
        

        }



        case TYPES.REMOVE_ONE_FROM_CART:{
        let itemToDelete = state.cart.find((item)=>item.id===action.payload);
        var carro = JSON.parse(localStorage.getItem("carro"))



        if(itemToDelete){
            if(itemToDelete.cantidad === 1 ){
                let newData = carro.filter((item) => item.id !== action.payload)
                localStorage.setItem("carro", JSON.stringify(newData));
            }else{
                let producto = carro.find((product) => product.id === action.payload);
            
                producto.cantidad= itemToDelete.cantidad - 1 ;
                localStorage.setItem("carro", JSON.stringify(carro));}
            }
        
 
        
            


        return itemToDelete.cantidad > 1 
        ?{...state, cart: state.cart.map((item) => item.id===action.payload?{...item,cantidad:item.cantidad-1}:item)}
        :{...state, cart: state.cart.filter((item) => item.id !== action.payload),}
        };



        case TYPES.REMOVE_ALL_FROM_CART:{
            
            var carro = JSON.parse(localStorage.getItem("carro"))
            let newData = carro.filter((item) => item.id !== action.payload)
            localStorage.setItem("carro", JSON.stringify(newData));


        return {...state, cart: state.cart.filter((item) => item.id !== action.payload),}
        }
        
        case TYPES.READ_ALL_DATA: {
            return {
                ...state,
                products: action.payload.map(data=>data),
                
            };
            }
        
        case TYPES.LOCAL: { 
            
            return{
                ...state,
                cart : action.payload.map(data=>data),
            }

            
        }

        default:
            return state;
    }
}




