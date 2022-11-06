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
        
        return itemInCart
        ?{...state, cart: state.cart.map((item)=>item.id===newItem.id?{...item,cantidad:item.cantidad+1}:item)}
        :{...state, cart:[...state.cart,{...newItem, cantidad:1}]}

        }



        case TYPES.REMOVE_ONE_FROM_CART:{
        let itemToDelete = state.cart.find((item)=>item.id===action.payload);
        return itemToDelete.cantidad > 1 
        ?{...state, cart: state.cart.map((item) => item.id===action.payload?{...item,cantidad:item.cantidad-1}:item)}
        :{...state, cart: state.cart.filter((item) => item.id !== action.payload),}
        };
        case TYPES.REMOVE_ALL_FROM_CART:{
        return {...state, cart: state.cart.filter((item) => item.id !== action.payload),}
        }
        
        case TYPES.READ_ALL_DATA: {
            return {
                ...state,
                products: action.payload.map(data=>data),
                
            };
            }
        case TYPES.GUARDAR_CARRO: { 
                let car=state.cart
                localStorage.setItem("compras", JSON.stringify(car)) 

                
            }

        default:
            return state;
    }
}