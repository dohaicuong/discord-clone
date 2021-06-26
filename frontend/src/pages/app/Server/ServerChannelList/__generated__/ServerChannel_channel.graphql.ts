/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChannelType = "TEXT" | "VOICE" | "%future added value";
export type ServerChannel_channel = {
    readonly id: string;
    readonly name: string;
    readonly channelType: ChannelType;
    readonly " $refType": "ServerChannel_channel";
};
export type ServerChannel_channel$data = ServerChannel_channel;
export type ServerChannel_channel$key = {
    readonly " $data"?: ServerChannel_channel$data;
    readonly " $fragmentRefs": FragmentRefs<"ServerChannel_channel">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ServerChannel_channel",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "channelType",
      "storageKey": null
    }
  ],
  "type": "Channel",
  "abstractKey": null
};
(node as any).hash = '28594ffe6aa05ba3b79bb6646c251040';
export default node;
