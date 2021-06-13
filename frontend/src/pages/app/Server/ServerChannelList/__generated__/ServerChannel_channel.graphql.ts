/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerChannel_channel = {
    readonly id: string;
    readonly name: string;
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
    }
  ],
  "type": "Channel",
  "abstractKey": null
};
(node as any).hash = 'ec0a92480afd58e0809b9bfbb5812b8c';
export default node;
