import * as marketActions from './marketAction'


const initial_state = {
    myHoldings: [],
    error: null,
    loading: false
}

function marketReducer(state = initial_state, action) {
    switch (action.type) {
        case 'GET_HOLDINGS_BEGIN':
            return {
                ...state,
                loading: true
            }
        case 'GET_HOLDING_SUCCESS':
            return {
                ...state,
                myHoldings: action.payload.myHoldings
            }
        case 'GET_HOLDINGS_FAILURE':
            return {
                ...state,
                error: action.payload.error
            }

        // case marketActions.GET_COIN_MARKET_BEGIN:
        //     return {
        //         ...state,
        //         loading: true
        //     }

        // case marketActions.GET_COIN_MARKET_SUCCESS:
        //     return {
        //         ...state,
        //         coins: action.payload.coins
        //     }

        // case marketActions.GET_COIN_MARKET_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload.error
        //     }

        //     return {
        //         ...state,
        //         loading: true
        //     }

        default:
            return state
    }
}

export default marketReducer;