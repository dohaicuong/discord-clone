/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerHeader_me = {
    readonly " $fragmentRefs": FragmentRefs<"ServerHeaderMenu_me">;
    readonly " $refType": "ServerHeader_me";
};
export type ServerHeader_me$data = ServerHeader_me;
export type ServerHeader_me$key = {
    readonly " $data"?: ServerHeader_me$data;
    readonly " $fragmentRefs": FragmentRefs<"ServerHeader_me">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ServerHeader_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ServerHeaderMenu_me"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'ed4d0cc9f5936d3d13bd5b78ab5316e8';
export default node;
