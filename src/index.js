import * as React from 'react';

import SessionManagement from './SessionManagement'
import KeyManagement from './KeyManagement'

export async function multiply(a, b) {
  return new Promise.resolve(a * b);
}

export function Sessions() {
  return (<SessionManagement />);
}

export function Keys () {
  return (<KeyManagement />);
}
