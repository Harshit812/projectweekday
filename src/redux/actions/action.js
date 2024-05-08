import { fetchWeekDayJobsData } from '../services/service';
import { FETCH_WEEKDAY_JOBS_REQUEST,FETCH_WEEKDAY_JOBS_SUCCESS,FETCH_WEEKDAY_JOBS_FAILURE, SET_FILTERS } from "../types/type";

export const fetchWeekDayJobsRequest = () => ({
    type: FETCH_WEEKDAY_JOBS_REQUEST,
});
  
export const fetchWeekDayJobsSuccess = (data) => ({
    type: FETCH_WEEKDAY_JOBS_SUCCESS,
    payload: data,
});
  
export const fetchWeekDayJobsFailure = (error) => ({
    type: FETCH_WEEKDAY_JOBS_FAILURE,
    payload: error,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const fetchWeekDayJobsDataAsync = (limit, offset) => {
    return async (dispatch) => {
      dispatch(fetchWeekDayJobsRequest());
      try {
        const response = await fetchWeekDayJobsData(limit, offset);  
        const data = JSON.parse(response);
        dispatch(fetchWeekDayJobsSuccess(data));
      } catch (error) {
        dispatch(fetchWeekDayJobsFailure(error));
      }
    };
};