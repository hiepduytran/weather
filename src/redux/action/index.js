import * as Types from "../contains";

export const fetchDataSuccess = (weather) => ({
  type: Types.FETCH_DATA_SUCCESS,
  weather
});
