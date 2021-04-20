import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer} from './components/reducers/productReducers'
import { cartReducer } from './components/reducers/cartReducers'
import { userLoginReducer, userRegisterReducer} from './components/reducers/userReducers'

//Registering the reducers
const reducer = combineReducers({ 
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})

const cartItemsFromLocal = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromLocal = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    cart: { cartItems : cartItemsFromLocal },
    userLogin: {userInfo: userInfoFromLocal }
}

const middleWare= [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleWare)))

export default store