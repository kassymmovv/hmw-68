import axios from '../axios-orders';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const fetchCounterRequest = () => {
    return {type: FETCH_COUNTER_REQUEST};
};

export const fetchCounterSuccess = counter => {
    return {type: FETCH_COUNTER_SUCCESS, counter}
};

export const fetchCounterError = error => {
    return {type: FETCH_COUNTER_ERROR, error}
};

export const fetchCounter = () => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axios.get('/counter.json').then(response => {
            dispatch(fetchCounterSuccess(response.data));
            console.log(response.data);
        }, error => {
            dispatch(fetchCounterError(error))
        })
    }
};

 export const  postCounter =  () => {
    return (dispatch,getState) => {
        const counter =getState().counter;
        dispatch(fetchCounterRequest());
        axios.put('/counter.json', counter).then(response=>{
            dispatch(fetchCounterSuccess(response.data))
        },error=>error)
    }
};

export const incrementCounter = () => {
    return dispatch => {
        dispatch({type: INCREMENT});
        dispatch(postCounter())
    }

};

export const decrementCounter = () => {
    return dispatch => {
        dispatch({type: DECREMENT});
        dispatch(postCounter())
    }

};

export const addCounter = amount => {
    return dispatch => {
        dispatch({type: ADD,amount});
        dispatch(postCounter())
    }
};

export const subtract = amount => {
    return dispatch => {
        dispatch({type: SUBTRACT,amount});
        dispatch(postCounter())
    }
};