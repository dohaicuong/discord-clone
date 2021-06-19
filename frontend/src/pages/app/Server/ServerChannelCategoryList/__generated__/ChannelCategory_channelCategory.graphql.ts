/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChannelCategory_channelCategory = {
    readonly id: string;
    readonly name: string;
    readonly " $fragmentRefs": FragmentRefs<"ServerChannelList_channelCategory" | "ActionAddChannelDialog_channelCategory">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ActionAddChannelDialog_channelCategory"
    }
  ],
  "type": "ChannelCategory",
  "abstractKey": null
};
(node as any).hash = '2db24a1b26f015700672ac8840b80806';
export default node;
