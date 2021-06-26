/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Text_channel = {
    readonly " $fragmentRefs": FragmentRefs<"MessagesHeader_channel" | "MessageList_messages">;
    readonly " $refType": "Text_channel";
};
export type Text_channel$data = Text_channel;
export type Text_channel$key = {
    readonly " $data"?: Text_channel$data;
    readonly " $fragmentRefs": FragmentRefs<"Text_channel">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Text_channel",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MessagesHeader_channel"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MessageList_messages"
    }
  ],
  "type": "Channel",
  "abstractKey": null
};
(node as any).hash = '64f149b8471000b873de5e6fc5d17422';
export default node;
