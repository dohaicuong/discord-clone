/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MessagesHeader_channel = {
    readonly name: string;
    readonly " $refType": "MessagesHeader_channel";
};
export type MessagesHeader_channel$data = MessagesHeader_channel;
export type MessagesHeader_channel$key = {
    readonly " $data"?: MessagesHeader_channel$data;
    readonly " $fragmentRefs": FragmentRefs<"MessagesHeader_channel">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MessagesHeader_channel",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Channel",
  "abstractKey": null
};
(node as any).hash = '310ac1c884a183dbc8394b3a16736474';
export default node;
