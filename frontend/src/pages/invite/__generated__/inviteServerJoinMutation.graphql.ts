/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ServerJoinInput = {
    serverId: unknown;
};
export type inviteServerJoinMutationVariables = {
    input: ServerJoinInput;
};
export type inviteServerJoinMutationResponse = {
    readonly serverJoinUser: {
        readonly userServer: {
            readonly id: string;
        } | null;
    };
};
export type inviteServerJoinMutation = {
    readonly response: inviteServerJoinMutationResponse;
    readonly variables: inviteServerJoinMutationVariables;
};



/*
mutation inviteServerJoinMutation(
  $input: ServerJoinInput!
) {
  serverJoinUser(input: $input) {
    userServer {
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ServerJoinPayload",
    "kind": "LinkedField",
    "name": "serverJoinUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UsersOnServers",
        "kind": "LinkedField",
        "name": "userServer",
        "plural": false,
        "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "inviteServerJoinMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "inviteServerJoinMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c99e689a293eb9140fd3eab10d286a9c",
    "id": null,
    "metadata": {},
    "name": "inviteServerJoinMutation",
    "operationKind": "mutation",
    "text": "mutation inviteServerJoinMutation(\n  $input: ServerJoinInput!\n) {\n  serverJoinUser(input: $input) {\n    userServer {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8a416dad7783e83a373f7ad505f3bd69';
export default node;
