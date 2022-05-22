import * as React from 'react';

import SessionManagement from './SessionManagement'

export async function multiply(a, b) {
  return new Promise.resolve(a * b);
}

export function Session() {
  return (<SessionManagement />);
}

export function Key () {

}
