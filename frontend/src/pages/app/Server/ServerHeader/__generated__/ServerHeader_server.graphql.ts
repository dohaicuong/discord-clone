/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerHeader_server = {
    readonly title: string;
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
    }
  ],
  "type": "Server",
  "abstractKey": null
};
(node as any).hash = '463b037968356d6e521c460378efa2cc';
export default node;
