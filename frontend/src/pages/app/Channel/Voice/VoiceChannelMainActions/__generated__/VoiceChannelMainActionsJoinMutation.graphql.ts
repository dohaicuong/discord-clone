/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type StreamSessionJoinInput = {
    candidates: Array<unknown>;
    offer: string;
};
export type VoiceChannelMainActionsJoinMutationVariables = {
    input: StreamSessionJoinInput;
};
export type VoiceChannelMainActionsJoinMutationResponse = {
    readonly streamSessionJoin: {
        readonly answer: string;
        readonly candidates: ReadonlyArray<unknown>;
    };
};
export type VoiceChannelMainActionsJoinMutation = {
    readonly response: VoiceChannelMainActionsJoinMutationResponse;
    readonly variables: VoiceChannelMainActionsJoinMutationVariables;
};



/*
mutation VoiceChannelMainActionsJoinMutation(
  $input: StreamSessionJoinInput!
) {
  streamSessionJoin(input: $input) {
    answer
    candidates
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "StreamSessionJoinPayload",
    "kind": "LinkedField",
    "name": "streamSessionJoin",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "answer",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "candidates",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "VoiceChannelMainActionsJoinMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VoiceChannelMainActionsJoinMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "deb986f2dbf6d4ec58fc15e95c2f1a43",
    "id": null,
    "metadata": {},
    "name": "VoiceChannelMainActionsJoinMutation",
    "operationKind": "mutation",
    "text": "mutation VoiceChannelMainActionsJoinMutation(\n  $input: StreamSessionJoinInput!\n) {\n  streamSessionJoin(input: $input) {\n    answer\n    candidates\n  }\n}\n"
  }
};
})();
(node as any).hash = '1cb6b01a606eb6bf6a18f2e952200602';
export default node;
