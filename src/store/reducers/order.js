import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../../shared/utility';
const initialState={
    orders:[],
    loading:false
};
const purchaseStart=(state,action)=>{
     return (updatedObject(state,{ loading: true,
                purchased:false}));
}
const purchaseSuccess=(state,action)=>{
     const newOrder =  updatedObject(action.orderData,{id: action.orderId});
            return(updatedObject(state,{
                 loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)
                   }));

}
const purchaseFail=(state,action)=>{
     return {
                ...state,
                loading: false
            };
}
const purchaseInit=(state,action)=>{
     return(updatedObject(state,{purchased:false}));
}
const purchaseFetchOrderStart=(state,action)=>{
     return (updatedObject(state,{ loading:true}));
}
const purchaseFetchOrderFail=(state,action)=>{
     return (updatedObject(state,{ loading:false}));
}
const purchaseFetchOrderSuccess=(state,action)=>{
     return(updatedObject(state,{orders:action.orders,
            loading:false}));
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.PURCHASE_BURGER_START:return purchaseStart(state,action);
        case actionTypes.PURCHASE_BURGER_SUCCESS:return purchaseSuccess(state,action);
        case actionTypes.PURCHASE_BURGER_FAIL:return purchaseFail(state,action);
        case actionTypes.PURCHASE_INIT:return purchaseInit(state,action);
        case actionTypes.FETCH_ORDERS_START:return purchaseFetchOrderStart(state,action);
        case actionTypes.FETCH_ORDERS_FAIL:return purchaseFetchOrderFail(state,action);
        case actionTypes.FETCH_ORDERS_SUCCESS:return purchaseFetchOrderSuccess(state,action);
       default: return state;
   
   
    }

}
export default reducer;