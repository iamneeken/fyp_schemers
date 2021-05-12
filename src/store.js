import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer, productReviewCreateReducer} from './components/reducers/productReducers'
import { cartReducer } from './components/reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer} from './components/reducers/userReducers'

//Registering the reducers
const reducer = combineReducers({ 
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productReviewCreate: productReviewCreateReducer, 

    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
})

const cartItemsFromLocal = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromLocal = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const shippingAddressFromLocal = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: { 
        cartItems : cartItemsFromLocal,
        shippingAddress: shippingAddressFromLocal
    },
    userLogin: {userInfo: userInfoFromLocal }
}

const middleWare= [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleWare)))

export default store