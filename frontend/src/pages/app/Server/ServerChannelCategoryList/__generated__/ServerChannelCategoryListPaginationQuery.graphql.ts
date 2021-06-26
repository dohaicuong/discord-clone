/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerChannelCategoryListPaginationQueryVariables = {
    count: number;
    cursor?: string | null;
    id: string;
};
export type ServerChannelCategoryListPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"ServerChannelCategoryList_server">;
    } | null;
};
export type ServerChannelCategoryListPaginationQuery = {
    readonly response: ServerChannelCategoryListPaginationQueryResponse;
    readonly variables: ServerChannelCategoryListPaginationQueryVariables;
};



/*
query ServerChannelCategoryListPaginationQuery(
  $count: Int! = 10
  $cursor: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...ServerChannelCategoryList_server_1G22uz
    id
  }
}

fragment ActionAddChannelDialog_channelCategory on ChannelCategory {
  id
  name
}

fragment ChannelCategory_channelCategory on ChannelCategory {
  id
  name
  ...ServerChannelList_channelCategory
  ...ActionAddChannelDialog_channelCategory
}

fragment ServerChannelCategoryList_server_1G22uz on Server {
  channelCategories(first: $count, after: $cursor) {
    edges {
      node {
        id
        ...ChannelCategory_channelCategory
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

fragment ServerChannelList_channelCategory on ChannelCategory {
  channels(first: 10) {
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
  channelType
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
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v8 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ServerChannelCategoryListPaginationQuery",
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
            "name": "ServerChannelCategoryList_server"
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
    "name": "ServerChannelCategoryListPaginationQuery",
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
                "concreteType": "ChannelCategoryConnection",
                "kind": "LinkedField",
                "name": "channelCategories",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ChannelCategoryEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ChannelCategory",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": (v6/*: any*/),
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
                                      (v5/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "channelType",
                                        "storageKey": null
                                      },
                                      (v2/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v7/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v8/*: any*/)
                            ],
                            "storageKey": "channels(first:10)"
                          },
                          {
                            "alias": null,
                            "args": (v6/*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "ServerChannelList_channels",
                            "kind": "LinkedHandle",
                            "name": "channels"
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ServerChannelCategoryList_channelCategories",
                "kind": "LinkedHandle",
                "name": "channelCategories"
              }
            ],
            "type": "Server",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "20126d7448a5f5349d2bff0350a8f18f",
    "id": null,
    "metadata": {},
    "name": "ServerChannelCategoryListPaginationQuery",
    "operationKind": "query",
    "text": "query ServerChannelCategoryListPaginationQuery(\n  $count: Int! = 10\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ServerChannelCategoryList_server_1G22uz\n    id\n  }\n}\n\nfragment ActionAddChannelDialog_channelCategory on ChannelCategory {\n  id\n  name\n}\n\nfragment ChannelCategory_channelCategory on ChannelCategory {\n  id\n  name\n  ...ServerChannelList_channelCategory\n  ...ActionAddChannelDialog_channelCategory\n}\n\nfragment ServerChannelCategoryList_server_1G22uz on Server {\n  channelCategories(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...ChannelCategory_channelCategory\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ServerChannelList_channelCategory on ChannelCategory {\n  channels(first: 10) {\n    edges {\n      node {\n        id\n        ...ServerChannel_channel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ServerChannel_channel on Channel {\n  id\n  name\n  channelType\n}\n"
  }
};
})();
(node as any).hash = '5a4f20bcbba7177cc0e892d41ccb20e1';
export default node;
