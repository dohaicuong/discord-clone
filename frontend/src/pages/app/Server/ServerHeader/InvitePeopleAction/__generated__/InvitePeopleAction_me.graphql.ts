/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InvitePeopleAction_me = {
    readonly id: string;
    readonly " $refType": "InvitePeopleAction_me";
};
export type InvitePeopleAction_me$data = InvitePeopleAction_me;
export type InvitePeopleAction_me$key = {
    readonly " $data"?: InvitePeopleAction_me$data;
    readonly " $fragmentRefs": FragmentRefs<"InvitePeopleAction_me">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InvitePeopleAction_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '4294f94e76ad08844034a14a9851215c';
export default node;
