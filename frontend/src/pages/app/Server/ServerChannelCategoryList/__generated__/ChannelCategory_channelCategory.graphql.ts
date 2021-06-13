/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChannelCategory_channelCategory = {
    readonly id: string;
    readonly name: string;
    readonly " $fragmentRefs": FragmentRefs<"ServerChannelList_channelCategory">;
    readonly " $refType": "ChannelCategory_channelCategory";
};
export type ChannelCategory_channelCategory$data = ChannelCategory_channelCategory;
export type ChannelCategory_channelCategory$key = {
    readonly " $data"?: ChannelCategory_channelCategory$data;
    readonly " $fragmentRefs": FragmentRefs<"ChannelCategory_channelCategory">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChannelCategory_channelCategory",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ServerChannelList_channelCategory"
    }
  ],
  "type": "ChannelCategory",
  "abstractKey": null
};
(node as any).hash = 'f18611a3fb9d1b00844b7921220eba9f';
export default node;
