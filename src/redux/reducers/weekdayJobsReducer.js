import {SET_FILTERS, FETCH_WEEKDAY_JOBS_REQUEST,FETCH_WEEKDAY_JOBS_SUCCESS, FETCH_WEEKDAY_JOBS_FAILURE} from '../types/type'

const initialState = {
  jdList: [],
  totalCount: 0,
  loading: false,
  error: null,
  filters: []
};


const weekdayJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEEKDAY_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_WEEKDAY_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jdList: action.payload.jdList,
        totalCount: action.payload.totalCount,
      };
    case FETCH_WEEKDAY_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_FILTERS:
        return {
          ...state,
          filters: action.payload,
      };
    default:
      return state;
  }
};

export default weekdayJobsReducer;
