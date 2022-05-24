import * as React from 'react';
import KeyManagement from './component/KeyManagement';
import SessionManagement from './component/SessionManagement';
import {
  ReduxSetAuth,
  ReduxSetLoading,
  ReduxSetDetailKey,
} from './redux/actions';
import styleIndex from './styles';
import reducer from './redux/reducers';

export async function multiply(a, b) {
  return Promise.resolve(a * b);
}
// Component
export function Sessions(props) {
  return <SessionManagement props={props} />;
}

export function Keys(props) {
  return <KeyManagement props={props} />;
}

// Redux
export function SetAuth(payload) {
  return ReduxSetAuth(payload);
}

export function SetLoading(payload) {
  return ReduxSetLoading(payload);
}

export function SetDetailKey(payload) {
  return ReduxSetDetailKey(payload);
}

// Variable
export let MainReducer = reducer;
export let Style = styleIndex;
