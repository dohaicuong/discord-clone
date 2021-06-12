/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AddServerAction_user = {
    readonly id: string;
    readonly username: string;
    readonly " $refType": "AddServerAction_user";
};
export type AddServerAction_user$data = AddServerAction_user;
export type AddServerAction_user$key = {
    readonly " $data"?: AddServerAction_user$data;
    readonly " $fragmentRefs": FragmentRefs<"AddServerAction_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AddServerAction_user",
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
      "name": "username",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'f45e54eaffb933840e54dc1b761a5ac3';
export default node;
