/**
 * @flow
 * @relayHash 8674e23cb1ca908373aa2cf60b60b7b9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProtectedRouteQueryVariables = {||};
export type ProtectedRouteQueryResponse = {|
  +checkAuth: ?boolean
|};
export type ProtectedRouteQuery = {|
  variables: ProtectedRouteQueryVariables,
  response: ProtectedRouteQueryResponse,
|};
*/


/*
query ProtectedRouteQuery {
  checkAuth
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "checkAuth",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ProtectedRouteQuery",
  "id": null,
  "text": "query ProtectedRouteQuery {\n  checkAuth\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProtectedRouteQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "ProtectedRouteQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3d9f57c35d52bda6fa7e50e7f3d7dc0f';
module.exports = node;
