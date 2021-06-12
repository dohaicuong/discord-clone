/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServersFragment_userServers = {
    readonly userServers: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly server: {
                    readonly id: string;
                    readonly " $fragmentRefs": FragmentRefs<"ServerFragment_server">;
                };
            };
        }>;
    };
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"AddServerAction_user">;
    readonly " $refType": "ServersFragment_userServers";
};
export type ServersFragment_userServers$data = ServersFragment_userServers;
export type ServersFragment_userServers$key = {
    readonly " $data"?: ServersFragment_userServers$data;
    readonly " $fragmentRefs": FragmentRefs<"ServersFragment_userServers">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "userServers"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ServerListPaginationQuery.graphql.ts'),
      "identifierField": "id"
    }
  },
  "name": "ServersFragment_userServers",
  "selections": [
    {
      "alias": "userServers",
      "args": null,
      "concreteType": "UsersOnServersConnection",
      "kind": "LinkedField",
      "name": "__Servers_userServers_connection",
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
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Server",
                  "kind": "LinkedField",
                  "name": "server",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ServerFragment_server"
                    }
                  ],
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
      "storageKey": null
    },
    (v1/*: any*/),
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AddServerAction_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();
(node as any).hash = '35431f6686d3fb83b4ec90f89558150e';
export default node;
