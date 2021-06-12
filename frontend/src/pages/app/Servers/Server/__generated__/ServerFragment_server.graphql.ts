/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ServerFragment_server = {
    readonly id: string;
    readonly title: string;
    readonly logo: string | null;
    readonly " $refType": "ServerFragment_server";
};
export type ServerFragment_server$data = ServerFragment_server;
export type ServerFragment_server$key = {
    readonly " $data"?: ServerFragment_server$data;
    readonly " $fragmentRefs": FragmentRefs<"ServerFragment_server">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ServerFragment_server",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "logo",
      "storageKey": null
    }
  ],
  "type": "Server",
  "abstractKey": null
};
(node as any).hash = '81f01fd88151144e7db611089b3f03bb';
export default node;
