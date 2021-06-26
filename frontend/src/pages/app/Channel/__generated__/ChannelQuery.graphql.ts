/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChannelType = "TEXT" | "VOICE" | "%future added value";
export type ChannelQueryVariables = {
    channelId: string;
};
export type ChannelQueryResponse = {
    readonly channel: {
        readonly name?: string;
        readonly channelType?: ChannelType;
        readonly " $fragmentRefs": FragmentRefs<"Text_channel">;
    } | null;
};
export type ChannelQuery = {
    readonly response: ChannelQueryResponse;
    readonly variables: ChannelQueryVariables;
};



/*
query ChannelQuery(
  $channelId: ID!
) {
  channel: node(id: $channelId) {
    __typename
    ...Text_channel
    ... on Channel {
      name
      channelType
    }
    id
  }
}

fragment MessageList_messages on Channel {
  messages(last: 30) {
    edges {
      node {
        content
        createdAt
        author {
          id
          username
          avatar
          email
        }
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
  id
}

fragment MessagesHeader_channel on Channel {
  name
}

fragment Text_channel on Channel {
  ...MessagesHeader_channel
  ...MessageList_messages
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "channelId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "channelId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "channelType",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 30
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ChannelQuery",
    "selections": [
      {
        "alias": "channel",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Text_channel"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "type": "Channel",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChannelQuery",
    "selections": [
      {
        "alias": "channel",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": (v6/*: any*/),
                "concreteType": "MessageConnection",
                "kind": "LinkedField",
                "name": "messages",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MessageEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Message",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "content",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "createdAt",
                            "storageKey": null
                          },
                          {
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
                          },
                          (v5/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasPreviousPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "startCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "messages(last:30)"
              },
              {
                "alias": null,
                "args": (v6/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "MessageList_messages",
                "kind": "LinkedHandle",
                "name": "messages"
              },
              (v3/*: any*/)
            ],
            "type": "Channel",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7ebcfe4586c6c0a3dad780be861c52d9",
    "id": null,
    "metadata": {},
    "name": "ChannelQuery",
    "operationKind": "query",
    "text": "query ChannelQuery(\n  $channelId: ID!\n) {\n  channel: node(id: $channelId) {\n    __typename\n    ...Text_channel\n    ... on Channel {\n      name\n      channelType\n    }\n    id\n  }\n}\n\nfragment MessageList_messages on Channel {\n  messages(last: 30) {\n    edges {\n      node {\n        content\n        createdAt\n        author {\n          id\n          username\n          avatar\n          email\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment MessagesHeader_channel on Channel {\n  name\n}\n\nfragment Text_channel on Channel {\n  ...MessagesHeader_channel\n  ...MessageList_messages\n}\n"
  }
};
})();
(node as any).hash = 'cf1a43c787829b62143bcb8f26504f95';
export default node;
