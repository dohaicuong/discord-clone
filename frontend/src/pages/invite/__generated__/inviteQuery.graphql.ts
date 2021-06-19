/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type inviteQueryVariables = {
    hostId: string;
    serverId: string;
};
export type inviteQueryResponse = {
    readonly host: {
        readonly username?: string;
    } | null;
    readonly server: {
        readonly title?: string;
        readonly logo?: string | null;
        readonly serverUsers?: {
            readonly totalCount: number;
        };
    } | null;
};
export type inviteQuery = {
    readonly response: inviteQueryResponse;
    readonly variables: inviteQueryVariables;
};



/*
query inviteQuery(
  $hostId: ID!
  $serverId: ID!
) {
  host: node(id: $hostId) {
    __typename
    ... on User {
      username
    }
    id
  }
  server: node(id: $serverId) {
    __typename
    ... on Server {
      title
      logo
      serverUsers(first: 1) {
        totalCount
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "hostId"
  },
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
    "variableName": "hostId"
  }
],
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "serverId"
  }
],
v4 = {
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
      "args": null,
      "kind": "ScalarField",
      "name": "logo",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
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
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "serverUsers(first:1)"
    }
  ],
  "type": "Server",
  "abstractKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "inviteQuery",
    "selections": [
      {
        "alias": "host",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "server",
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v4/*: any*/)
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
    "name": "inviteQuery",
    "selections": [
      {
        "alias": "host",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "server",
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8190cc526ac67e3e5ab87bce4ca2e484",
    "id": null,
    "metadata": {},
    "name": "inviteQuery",
    "operationKind": "query",
    "text": "query inviteQuery(\n  $hostId: ID!\n  $serverId: ID!\n) {\n  host: node(id: $hostId) {\n    __typename\n    ... on User {\n      username\n    }\n    id\n  }\n  server: node(id: $serverId) {\n    __typename\n    ... on Server {\n      title\n      logo\n      serverUsers(first: 1) {\n        totalCount\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '5af410eeb274836ea9c338cfdfdd7831';
export default node;
