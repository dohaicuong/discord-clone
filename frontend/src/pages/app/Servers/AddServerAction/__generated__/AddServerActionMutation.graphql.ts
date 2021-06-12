/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ServerCreateInput = {
    logo?: unknown | null;
    nickname?: string | null;
    title: string;
};
export type AddServerActionMutationVariables = {
    input: ServerCreateInput;
    connections: Array<string>;
};
export type AddServerActionMutationResponse = {
    readonly serverCreate: {
        readonly userServer: {
            readonly id: string;
            readonly server: {
                readonly id: string;
                readonly title: string;
                readonly logo: string | null;
            };
        } | null;
    };
};
export type AddServerActionMutation = {
    readonly response: AddServerActionMutationResponse;
    readonly variables: AddServerActionMutationVariables;
};



/*
mutation AddServerActionMutation(
  $input: ServerCreateInput!
) {
  serverCreate(input: $input) {
    userServer {
      id
      server {
        id
        title
        logo
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "UsersOnServers",
  "kind": "LinkedField",
  "name": "userServer",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Server",
      "kind": "LinkedField",
      "name": "server",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "logo",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddServerActionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ServerCreatePayload",
        "kind": "LinkedField",
        "name": "serverCreate",
        "plural": false,
        "selections": [
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddServerActionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ServerCreatePayload",
        "kind": "LinkedField",
        "name": "serverCreate",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "userServer",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "UsersOnServersEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "689e3e81867882017817dc8f18f84554",
    "id": null,
    "metadata": {},
    "name": "AddServerActionMutation",
    "operationKind": "mutation",
    "text": "mutation AddServerActionMutation(\n  $input: ServerCreateInput!\n) {\n  serverCreate(input: $input) {\n    userServer {\n      id\n      server {\n        id\n        title\n        logo\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b2be3dece26b61134782f9339df5d354';
export default node;
