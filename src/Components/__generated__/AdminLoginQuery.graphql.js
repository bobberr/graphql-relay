/**
 * @flow
 * @relayHash 59048bc90ff3aa766ad0583132e7eb3b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AdminLoginQueryVariables = {|
  login: string,
  password: string,
|};
export type AdminLoginQueryResponse = {|
  +logInAdmin: ?boolean
|};
export type AdminLoginQuery = {|
  variables: AdminLoginQueryVariables,
  response: AdminLoginQueryResponse,
|};
*/


/*
query AdminLoginQuery(
  $login: String!
  $password: String!
) {
  logInAdmin(login: $login, password: $password)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "login",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "logInAdmin",
    "args": [
      {
        "kind": "Variable",
        "name": "login",
        "variableName": "login",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password",
        "type": "String!"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AdminLoginQuery",
  "id": null,
  "text": "query AdminLoginQuery(\n  $login: String!\n  $password: String!\n) {\n  logInAdmin(login: $login, password: $password)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AdminLoginQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AdminLoginQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e21ea2d2593e73cc20f9046b58bbc2a0';
module.exports = node;
