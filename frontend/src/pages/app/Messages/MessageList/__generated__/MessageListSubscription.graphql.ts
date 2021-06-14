/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MessageListSubscriptionVariables = {
    channelId?: unknown | null;
    connections: Array<string>;
};
export type MessageListSubscriptionResponse = {
    readonly messageCreated: {
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
export type MessageListSubscription = {
    readonly response: MessageListSubscriptionResponse;
    readonly variables: MessageListSubscriptionVariables;
};



/*
subscription MessageListSubscription(
  $channelId: RelayId
) {
  messageCreated(filters: {channelId: $channelId}) {
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "channelId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "channelId",
        "variableName": "channelId"
      }
    ],
    "kind": "ObjectValue",
    "name": "filters"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "author",
  "plural": false,
  "selections": [
    (v4/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MessageListSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MessageCreateSubscriptionPayload",
        "kind": "LinkedField",
        "name": "messageCreated",
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MessageListSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MessageCreateSubscriptionPayload",
        "kind": "LinkedField",
        "name": "messageCreated",
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/),
              (v4/*: any*/)
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
    "cacheID": "21541860d86e759b83b76d96ca5246b4",
    "id": null,
    "metadata": {},
    "name": "MessageListSubscription",
    "operationKind": "subscription",
    "text": "subscription MessageListSubscription(\n  $channelId: RelayId\n) {\n  messageCreated(filters: {channelId: $channelId}) {\n    message {\n      content\n      createdAt\n      author {\n        id\n        username\n        avatar\n        email\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '80a150a55b209ec5461472581c24fe5d';
export default node;
