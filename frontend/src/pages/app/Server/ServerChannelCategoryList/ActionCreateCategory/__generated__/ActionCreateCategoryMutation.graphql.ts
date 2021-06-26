/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChannelCategoryCreateInput = {
    name: string;
    serverId: unknown;
};
export type ActionCreateCategoryMutationVariables = {
    input: ChannelCategoryCreateInput;
    connections: Array<string>;
};
export type ActionCreateCategoryMutationResponse = {
    readonly channelCategoryCreate: {
        readonly channelCategory: {
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"ChannelCategory_channelCategory">;
        } | null;
    } | null;
};
export type ActionCreateCategoryMutation = {
    readonly response: ActionCreateCategoryMutationResponse;
    readonly variables: ActionCreateCategoryMutationVariables;
};



/*
mutation ActionCreateCategoryMutation(
  $input: ChannelCategoryCreateInput!
) {
  channelCategoryCreate(input: $input) {
    channelCategory {
      id
      ...ChannelCategory_channelCategory
    }
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
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ActionCreateCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ChannelCategoryCreatePayload",
        "kind": "LinkedField",
        "name": "channelCategoryCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ChannelCategory",
            "kind": "LinkedField",
            "name": "channelCategory",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ChannelCategory_channelCategory"
              }
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
    "name": "ActionCreateCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ChannelCategoryCreatePayload",
        "kind": "LinkedField",
        "name": "channelCategoryCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ChannelCategory",
            "kind": "LinkedField",
            "name": "channelCategory",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": (v5/*: any*/),
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
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "channelType",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__typename",
                            "storageKey": null
                          }
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
                "storageKey": "channels(first:10)"
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ServerChannelList_channels",
                "kind": "LinkedHandle",
                "name": "channels"
              }
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
            "name": "channelCategory",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "Channel"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "36b815ca0695fc949b6206a98dae3243",
    "id": null,
    "metadata": {},
    "name": "ActionCreateCategoryMutation",
    "operationKind": "mutation",
    "text": "mutation ActionCreateCategoryMutation(\n  $input: ChannelCategoryCreateInput!\n) {\n  channelCategoryCreate(input: $input) {\n    channelCategory {\n      id\n      ...ChannelCategory_channelCategory\n    }\n  }\n}\n\nfragment ActionAddChannelDialog_channelCategory on ChannelCategory {\n  id\n  name\n}\n\nfragment ChannelCategory_channelCategory on ChannelCategory {\n  id\n  name\n  ...ServerChannelList_channelCategory\n  ...ActionAddChannelDialog_channelCategory\n}\n\nfragment ServerChannelList_channelCategory on ChannelCategory {\n  channels(first: 10) {\n    edges {\n      node {\n        id\n        ...ServerChannel_channel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ServerChannel_channel on Channel {\n  id\n  name\n  channelType\n}\n"
  }
};
})();
(node as any).hash = '94c5cf70becc082d50eada042f3a323e';
export default node;
