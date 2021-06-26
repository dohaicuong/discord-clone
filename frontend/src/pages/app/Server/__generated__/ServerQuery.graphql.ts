/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerQueryVariables = {
    serverId: string;
};
export type ServerQueryResponse = {
    readonly server: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"ServerHeader_server" | "ServerFooter_server" | "ServerChannelCategoryList_server">;
    } | null;
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"ServerHeader_me">;
    } | null;
};
export type ServerQuery = {
    readonly response: ServerQueryResponse;
    readonly variables: ServerQueryVariables;
};



/*
query ServerQuery(
  $serverId: ID!
) {
  server: node(id: $serverId) {
    __typename
    id
    ...ServerHeader_server
    ...ServerFooter_server
    ...ServerChannelCategoryList_server
  }
  me {
    ...ServerHeader_me
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

fragment InvitePeopleAction_me on User {
  id
}

fragment InvitePeopleAction_server on Server {
  id
  title
}

fragment ServerChannelCategoryList_server on Server {
  channelCategories(first: 10) {
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

fragment ServerFooter_server on Server {
  serverUsers(first: 1, filters: {currentUser: true}) {
    edges {
      node {
        id
        nickname
        user {
          avatar
          id
        }
      }
    }
  }
}

fragment ServerHeaderMenu_me on User {
  ...InvitePeopleAction_me
}

fragment ServerHeaderMenu_server on Server {
  ...InvitePeopleAction_server
}

fragment ServerHeader_me on User {
  ...ServerHeaderMenu_me
}

fragment ServerHeader_server on Server {
  title
  ...ServerHeaderMenu_server
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "serverId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "serverId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v7 = {
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
    "name": "ServerQuery",
    "selections": [
      {
        "alias": "server",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ServerHeader_server"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ServerFooter_server"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ServerChannelCategoryList_server"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ServerHeader_me"
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
    "name": "ServerQuery",
    "selections": [
      {
        "alias": "server",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "filters",
                    "value": {
                      "currentUser": true
                    }
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 1
                  }
                ],
                "concreteType": "ServerServerUsers_Connection",
                "kind": "LinkedField",
                "name": "serverUsers",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UsersOnServersEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "UsersOnServers",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "nickname",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "user",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "avatar",
                                "storageKey": null
                              },
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "serverUsers(filters:{\"currentUser\":true},first:1)"
              },
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
                          (v2/*: any*/),
                          (v5/*: any*/),
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
                                      (v2/*: any*/),
                                      (v5/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "channelType",
                                        "storageKey": null
                                      },
                                      (v3/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v6/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v7/*: any*/)
                            ],
                            "storageKey": "channels(first:10)"
                          },
                          {
                            "alias": null,
                            "args": (v4/*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "ServerChannelList_channels",
                            "kind": "LinkedHandle",
                            "name": "channels"
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": "channelCategories(first:10)"
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c8d381d50213dd1dbd45e589675be95f",
    "id": null,
    "metadata": {},
    "name": "ServerQuery",
    "operationKind": "query",
    "text": "query ServerQuery(\n  $serverId: ID!\n) {\n  server: node(id: $serverId) {\n    __typename\n    id\n    ...ServerHeader_server\n    ...ServerFooter_server\n    ...ServerChannelCategoryList_server\n  }\n  me {\n    ...ServerHeader_me\n    id\n  }\n}\n\nfragment ActionAddChannelDialog_channelCategory on ChannelCategory {\n  id\n  name\n}\n\nfragment ChannelCategory_channelCategory on ChannelCategory {\n  id\n  name\n  ...ServerChannelList_channelCategory\n  ...ActionAddChannelDialog_channelCategory\n}\n\nfragment InvitePeopleAction_me on User {\n  id\n}\n\nfragment InvitePeopleAction_server on Server {\n  id\n  title\n}\n\nfragment ServerChannelCategoryList_server on Server {\n  channelCategories(first: 10) {\n    edges {\n      node {\n        id\n        ...ChannelCategory_channelCategory\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ServerChannelList_channelCategory on ChannelCategory {\n  channels(first: 10) {\n    edges {\n      node {\n        id\n        ...ServerChannel_channel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ServerChannel_channel on Channel {\n  id\n  name\n  channelType\n}\n\nfragment ServerFooter_server on Server {\n  serverUsers(first: 1, filters: {currentUser: true}) {\n    edges {\n      node {\n        id\n        nickname\n        user {\n          avatar\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ServerHeaderMenu_me on User {\n  ...InvitePeopleAction_me\n}\n\nfragment ServerHeaderMenu_server on Server {\n  ...InvitePeopleAction_server\n}\n\nfragment ServerHeader_me on User {\n  ...ServerHeaderMenu_me\n}\n\nfragment ServerHeader_server on Server {\n  title\n  ...ServerHeaderMenu_server\n}\n"
  }
};
})();
(node as any).hash = 'aed319eab6924744afc3246888500e70';
export default node;
