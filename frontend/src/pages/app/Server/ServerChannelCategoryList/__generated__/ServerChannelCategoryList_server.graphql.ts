/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerChannelCategoryList_server = {
    readonly channelCategories: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"ChannelCategory_channelCategory">;
            };
        }>;
    };
    readonly id: string;
    readonly " $refType": "ServerChannelCategoryList_server";
};
export type ServerChannelCategoryList_server$data = ServerChannelCategoryList_server;
export type ServerChannelCategoryList_server$key = {
    readonly " $data"?: ServerChannelCategoryList_server$data;
    readonly " $fragmentRefs": FragmentRefs<"ServerChannelCategoryList_server">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "channelCategories"
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
      "operation": require('./ServerChannelCategoryListPaginationQuery.graphql.ts'),
      "identifierField": "id"
    }
  },
  "name": "ServerChannelCategoryList_server",
  "selections": [
    {
      "alias": "channelCategories",
      "args": null,
      "concreteType": "ChannelCategoryConnection",
      "kind": "LinkedField",
      "name": "__ServerChannelCategoryList_channelCategories_connection",
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
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ChannelCategory_channelCategory"
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
    (v1/*: any*/)
  ],
  "type": "Server",
  "abstractKey": null
};
})();
(node as any).hash = '5a4f20bcbba7177cc0e892d41ccb20e1';
export default node;
