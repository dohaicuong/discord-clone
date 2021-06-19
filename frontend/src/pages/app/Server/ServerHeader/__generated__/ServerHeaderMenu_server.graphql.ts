/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerHeaderMenu_server = {
    readonly " $fragmentRefs": FragmentRefs<"InvitePeopleAction_server">;
    readonly " $refType": "ServerHeaderMenu_server";
};
export type ServerHeaderMenu_server$data = ServerHeaderMenu_server;
export type ServerHeaderMenu_server$key = {
    readonly " $data"?: ServerHeaderMenu_server$data;
    readonly " $fragmentRefs": FragmentRefs<"ServerHeaderMenu_server">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ServerHeaderMenu_server",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InvitePeopleAction_server"
    }
  ],
  "type": "Server",
  "abstractKey": null
};
(node as any).hash = '1da462512eefb65eefd576e8a05ffd84';
export default node;
