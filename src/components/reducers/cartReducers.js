import {
        CART_ADD_ITEM,
        CART_REMOVE_ITEM,
        CART_SAVE_SHIPPING_ADDRESS,
    } from '../constants/cartConstants'

export const cartReducer = (state= {cartItems:[], shippingAddress:{}}, action) => {
    switch(action.type){

        case CART_ADD_ITEM:
            const item = action.payload //payload is product 
            const existItem = state.cartItems.find(x => x.product === item.product) //This function checks whether the item exists or not

            if(existItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map(x => 
                        x.product === existItem.product ? item 
                        : x)
                }

            }
            else{
                //If the item does not exist
                return{
                    ...state, //spread operator, this return the original state
                    cartItems:[...state.cartItems,item]
                }
            }

        case CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter(x => x.product !== action.payload)
            }    
        
        case CART_SAVE_SHIPPING_ADDRESS:
            return{
                ...state,
                shippingAddress:action.payload
            }
        default:
            return state
    }

}