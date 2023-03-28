let initialState = {
    items: [],
    total: 0
};

function cartReducer(state=initialState, action){

    switch(action.type){
        case "ADD_TO_CART":{
            return{...state,
                items: [
                    ...state.items, {
                        product: action.payload,
                        count : 1
                    }
                ]
             
            };
        }

        case "REMOVE_FROM_CART":{
            return{
                ...state, 
                items: state.items.filter(i=>i.product.id !== action.payload)
            }
        } 
        
        case "INC_ITEM_COUNT":{
            return {
                ...state,
                items: state.items.map((i) => i.product.id === action.payload ? {...i,
                count: i.count+1}:i ),
            };
        }

        case "DEC_ITEM_COUNT":{
            return {
                ...state,
                items: state.items.map((i) => i.product.id === action.payload ? {...i,
                count: i.count-1}:i ),
            };
        }

        default :{
            return state
        }
    }

} 

export default cartReducer