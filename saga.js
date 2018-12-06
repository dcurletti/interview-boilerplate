/* global fetch */

import { all, call, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";

import { actionTypes, increment } from "./actions";

es6promise.polyfill();

function* counterSaga(action) {
  try {
    console.log(action);
  } catch (e) {
    console.error(e);
  }
}

function* rootSaga() {
  yield all([
    // call(runClockSaga),
    takeLatest(actionTypes.INCREMENT, counterSaga)
  ]);
}

export default rootSaga;
