import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";
import streamsApi from "../apis/streamsApi";
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async dispatch => {
  const response = await streamsApi.post("/streams", formValues);

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async dispatch => {
  const response = await streamsApi.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streamsApi.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const repsonse = await streamsApi.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: repsonse.data });
};
export const deleteStream = id => async dispatch => {
  await streamsApi.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
