/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerChannelListPaginationQueryVariables = {
    count: number;
    cursor?: string | null;
    id: string;
};
export type ServerChannelListPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"ServerChannelList_channelCategory">;
    } | null;
};
export type ServerChannelListPaginationQuery = {
    readonly response: ServerChannelListPaginationQueryResponse;
    readonly variables: ServerChannelListPaginationQueryVariables;
};



/*
query ServerChannelListPaginationQuery(
  $count: Int! = 10
  $cursor: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...ServerChannelList_channelCategory_1G22uz
    id
  }
}

fragment ServerChannelList_channelCategory_1G22uz on ChannelCategory {
  channels(first: $count, after: $cursor) {
    edges {
      node {
        id
        ...ServerChannel_channel
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}

fragment ServerChannel_channel on Channel {
  id
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ServerChannelListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              }
            ],
            "kind": "FragmentSpread",
            "name": "ServerChannelList_channelCategory"
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
    "name": "ServerChannelListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "ChannelConnection",
                "kind": "LinkedField",
                "name": "channels",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ChannelEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Channel",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v2/*: any*/)
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
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ServerChannelList_channels",
                "kind": "LinkedHandle",
                "name": "channels"
              }
            ],
            "type": "ChannelCategory",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8d704fecefd8364b9d4f2d1776b56746",
    "id": null,
    "metadata": {},
    "name": "ServerChannelListPaginationQuery",
    "operationKind": "query",
    "text": "query ServerChannelListPaginationQuery(\n  $count: Int! = 10\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ServerChannelList_channelCategory_1G22uz\n    id\n  }\n}\n\nfragment ServerChannelList_channelCategory_1G22uz on ChannelCategory {\n  channels(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...ServerChannel_channel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ServerChannel_channel on Channel {\n  id\n  name\n}\n"
  }
};
})();
(node as any).hash = '0526316f6cd024f442b8d1ee57d9136f';
export default node;
