import {
    SENSORSOPERATORS_FETCH,
    SENSORSOPERATORS_SUCCESS,
    SENSORSOPERATORS_FAILURE
}
from '../actions/sensorsandoperatorsAction'
import { SENSOR_FAILURE } from 'actions/sensorActions'

const initialState = {
    assigned: [],
    isFetching:false,
    error:''
}

const sensorsOperAssigned = (state = initialState, action) => {
    switch (action.type) {
        case SENSORSOPERATORS_FETCH:
        return {
            ...state,
            isFetching: true,
            error:''
        }
        case SENSORSOPERATORS_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isFetching:false,
                error:'',
                operators: action.payload.filter(e => e.hasOwnProperty('operator_id'))
            }
        case SENSOR_FAILURE:
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }
        default:
            return state
    }
}
export default sensorsOperAssigned