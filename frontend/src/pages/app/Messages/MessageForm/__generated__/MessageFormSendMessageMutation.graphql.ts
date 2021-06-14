/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MessageCreateInput = {
    channelId: unknown;
    content: string;
};
export type MessageFormSendMessageMutationVariables = {
    input: MessageCreateInput;
    connections: Array<string>;
};
export type MessageFormSendMessageMutationResponse = {
    readonly messageCreate: {
        readonly message: {
            readonly content: string;
            readonly createdAt: string;
            readonly author: {
                readonly id: string;
                readonly username: string;
                readonly avatar: string | null;
                readonly email: string;
            } | null;
        };
    } | null;
};
export type MessageFormSendMessageMutation = {
    readonly response: MessageFormSendMessageMutationResponse;
    readonly variables: MessageFormSendMessageMutationVariables;
};



/*
mutation MessageFormSendMessageMutation(
  $input: MessageCreateInput!
) {
  messageCreate(input: $input) {
    message {
      content
      createdAt
      author {
        id
        username
        avatar
        email
      }
      id
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
  "name": "content",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "author",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatar",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
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
    "name": "MessageFormSendMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MessageCreatePayload",
        "kind": "LinkedField",
        "name": "messageCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "kind": "LinkedField",
            "name": "message",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v6/*: any*/)
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "MessageFormSendMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MessageCreatePayload",
        "kind": "LinkedField",
        "name": "messageCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "kind": "LinkedField",
            "name": "message",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v6/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "message",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "Message"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ea3eebf6b8b8df4479aa801da9cae431",
    "id": null,
    "metadata": {},
    "name": "MessageFormSendMessageMutation",
    "operationKind": "mutation",
    "text": "mutation MessageFormSendMessageMutation(\n  $input: MessageCreateInput!\n) {\n  messageCreate(input: $input) {\n    message {\n      content\n      createdAt\n      author {\n        id\n        username\n        avatar\n        email\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8a2ef05a295cd4a6a8111680e2fbba22';
export default node;
