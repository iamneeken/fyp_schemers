import {
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,

} from '../constants/productConstants'

export const productListReducer = (state= {products:[]}, action) =>{
    switch(action.type){
        case PRODUCTS_LIST_REQUEST:
            return {loading:true, products:[]}

        case PRODUCTS_LIST_SUCCESS:
            return {loading:false, products:action.payload}    
        
        case PRODUCTS_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state
    }
}

export const productDetailsReducer = (state= {product:{reviews:[]}}, action) =>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true, ...state} //... is a state operator

        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false, product:action.payload}    
        
        case PRODUCT_DETAILS_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state
    }
}

export const productReviewCreateReducer = (state = {}, action) => {
    switch(action.type){
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return {loading: true}
        
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return {loading: false, success:true}
        
        case PRODUCT_CREATE_REVIEW_FAIL:
            return {loading:false, error: action.payload}
        
        case PRODUCT_CREATE_REVIEW_RESET:
            return {}
        
        default:
            return state
    }
}