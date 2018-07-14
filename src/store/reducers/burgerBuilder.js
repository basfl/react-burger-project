import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../../shared/utility';

const initialState = {
    ingredients:null,
    totalPrice: 4,
    error: false,
    building:false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
const addIngredients=(state,action)=>{
     const updatedIngredient={[action.ingredientName]:state.ingredients[action.ingredientName]+1,};
        const updatedIngredients=updatedObject(state.ingredients,updatedIngredient);
        const updatedState={ ingredients:updatedIngredients,
            totalPrice:state.totalPrice+INGREDIENT_PRICES[action.ingredientName],
            building:true

        }
        return(updatedObject(state,updatedState));

}
    const removeIngredients=(state,action)=>{
        const updatedIng={[action.ingredientName]:state.ingredients[action.ingredientName]-1,};
        const updatedIngs=updatedObject(state.ingredients,updatedIng);
        const updatedSt={ ingredients:updatedIngs,
            totalPrice:state.totalPrice+INGREDIENT_PRICES[action.ingredientName],
            building:true

        }
        return(updatedObject(state,updatedSt));

    }
    const setIngredients=(state,action)=>{
         return(updatedObject(state,{ingredients:{
              salad:action.ingredient.salad,
              bacon:action.ingredient.bacon,
              cheese:action.ingredient.cheese,
              meat:action.ingredient.meat
          },
            error:false,
            totalPrice:4,
            building:false
        }));

    }
    const fetchIngredients=(state,action)=>{
        return(updatedObject(state,{ error:true}));
    }
const reducer = (state = initialState, action) => {
     switch(action.type){
        case actionTypes.ADD_INGREDIENT: return addIngredients(state,action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredients(state,action);
        case actionTypes.SET_INGREDIENT: return setIngredients(state,action);
        case actionTypes.FETCH_INGREDIENT_FAIL:return fetchIngredients(state,action);
        default:return state;
    }

};

export default reducer;