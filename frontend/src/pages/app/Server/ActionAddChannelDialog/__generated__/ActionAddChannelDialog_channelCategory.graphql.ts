/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ActionAddChannelDialog_channelCategory = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "ActionAddChannelDialog_channelCategory";
};
export type ActionAddChannelDialog_channelCategory$data = ActionAddChannelDialog_channelCategory;
export type ActionAddChannelDialog_channelCategory$key = {
    readonly " $data"?: ActionAddChannelDialog_channelCategory$data;
    readonly " $fragmentRefs": FragmentRefs<"ActionAddChannelDialog_channelCategory">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActionAddChannelDialog_channelCategory",
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
  "type": "ChannelCategory",
  "abstractKey": null
};
(node as any).hash = 'e76db239eb3b0aaeb1db70c978a3288b';
export default node;
