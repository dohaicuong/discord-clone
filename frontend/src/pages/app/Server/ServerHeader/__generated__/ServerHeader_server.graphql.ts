/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerHeader_server = {
    readonly title: string;
    readonly " $fragmentRefs": FragmentRefs<"ServerHeaderMenu_server">;
    readonly " $refType": "ServerHeader_server";
};
export type ServerHeader_server$data = ServerHeader_server;
export type ServerHeader_server$key = {
    readonly " $data"?: ServerHeader_server$data;
    readonly " $fragmentRefs": FragmentRefs<"ServerHeader_server">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ServerHeader_server",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ServerHeaderMenu_server"
    }
  ],
  "type": "Server",
  "abstractKey": null
};
(node as any).hash = '92156791b4c4b1581c46a0c3f654465e';
export default node;
