/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InvitePeopleAction_server = {
    readonly id: string;
    readonly title: string;
    readonly " $refType": "InvitePeopleAction_server";
};
export type InvitePeopleAction_server$data = InvitePeopleAction_server;
export type InvitePeopleAction_server$key = {
    readonly " $data"?: InvitePeopleAction_server$data;
    readonly " $fragmentRefs": FragmentRefs<"InvitePeopleAction_server">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InvitePeopleAction_server",
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
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Server",
  "abstractKey": null
};
(node as any).hash = '77dedf03ec0110acee560260461c09d7';
export default node;
