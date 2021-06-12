/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignupMutationInput = {
    avatar?: unknown | null;
    email: string;
    password: string;
    username: string;
};
export type signupMutationVariables = {
    input: SignupMutationInput;
};
export type signupMutationResponse = {
    readonly signup: {
        readonly token: string;
        readonly user: {
            readonly username: string;
        };
    };
};
export type signupMutation = {
    readonly response: signupMutationResponse;
    readonly variables: signupMutationVariables;
};



/*
mutation signupMutation(
  $input: SignupMutationInput!
) {
  signup(input: $input) {
    token
    user {
      username
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "token",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "signupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SignupMutationPayload",
        "kind": "LinkedField",
        "name": "signup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "signupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SignupMutationPayload",
        "kind": "LinkedField",
        "name": "signup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b5301a2c1141fc79d4109f8e5dfa9562",
    "id": null,
    "metadata": {},
    "name": "signupMutation",
    "operationKind": "mutation",
    "text": "mutation signupMutation(\n  $input: SignupMutationInput!\n) {\n  signup(input: $input) {\n    token\n    user {\n      username\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2e43da78ae9df01a1e3fae86eb3df69d';
export default node;
