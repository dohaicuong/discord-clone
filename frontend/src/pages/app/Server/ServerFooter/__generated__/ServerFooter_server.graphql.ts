/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerFooter_server = {
    readonly serverUsers: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly nickname: string;
                readonly user: {
                    readonly avatar: string | null;
                };
            };
        }>;
    };
    readonly " $refType": "ServerFooter_server";
};
export type ServerFooter_server$data = ServerFooter_server;
export type ServerFooter_server$key = {
    readonly " $data"?: ServerFooter_server$data;
    readonly " $fragmentRefs": FragmentRefs<"ServerFooter_server">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ServerFooter_server",
  "selections": [
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
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
                    }
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
    }
  ],
  "type": "Server",
  "abstractKey": null
};
(node as any).hash = '80428271b1adc44149f3d1fcfeefe0c8';
export default node;
