import axios from "axios";

export const GET_HOLDING_BEGIN = 'GET_HOLDING_BEGIN';
export const GET_HOLDING_SUCCESS = 'GET_HOLDING_SUCCESS';
export const GET_HOLDING_FAILURE = 'GET_HOLDING_FAILURE';

export const GET_COIN_MARKET_BEGIN = 'GET_COIN_MARKET_BEGIN'
export const GET_COIN_MARKET_SUCCESS = 'GET_COIN_MARKET_SUCCESS'
export const GET_COIN_MARKET_FAILURE = 'GET_COIN_MARKET_FAILURE'

 
export const getHoldingsBegin = () => ({
    type: GET_HOLDING_BEGIN
})

export const getHoldingsSuccess = (myHoldings) => ({
    type: GET_HOLDING_SUCCESS,
    payload: { myHoldings }
})

export const getHoldingsFailure = (error) => ({
    type: GET_HOLDING_FAILURE,
    payload: { error }
})

export function getHoldings(holdings = [], currency = 'usd',
    orderBy = 'market_cap_disc', sparkline = true, priceChangePerc = '7d',
    perPage = 10, page = 1) {


    return async dispatch => {
        dispatch(getHoldingsBegin())

        let ids = holdings.map((item) => { return item.id }).join(", ")

let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%20%2C%20ethereum%20%2Clitecoin%20%20%2Cripple%20%2C%20dash%20%2C%20neo%20%20&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d`

        try {
            const response = await axios({
                url: apiUrl,
                method: 'GET',
                header: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status == 200) {

                let myHoldings = response.data

                dispatch(getHoldingsSuccess(response.data))
            } else {
                dispatch(getHoldingsFailure(response.data));
            }
        } catch (error_1) {
            dispatch(getHoldingsFailure(error_1));
        }


    }

}


