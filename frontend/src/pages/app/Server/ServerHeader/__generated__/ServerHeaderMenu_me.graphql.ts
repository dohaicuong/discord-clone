/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerHeaderMenu_me = {
    readonly " $fragmentRefs": FragmentRefs<"InvitePeopleAction_me">;
    readonly " $refType": "ServerHeaderMenu_me";
};
export type ServerHeaderMenu_me$data = ServerHeaderMenu_me;
export type ServerHeaderMenu_me$key = {
    readonly " $data"?: ServerHeaderMenu_me$data;
    readonly " $fragmentRefs": FragmentRefs<"ServerHeaderMenu_me">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ServerHeaderMenu_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InvitePeopleAction_me"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'f6c5348e28cd04b49695d2fd438eb243';
export default node;
