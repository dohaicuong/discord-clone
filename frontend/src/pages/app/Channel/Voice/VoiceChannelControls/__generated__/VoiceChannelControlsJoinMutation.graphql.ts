/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type StreamSessionJoinInput = {
    candidates: Array<unknown>;
    channelId: unknown;
    offer: string;
};
export type VoiceChannelControlsJoinMutationVariables = {
    input: StreamSessionJoinInput;
};
export type VoiceChannelControlsJoinMutationResponse = {
    readonly streamSessionJoin: {
        readonly answer: string;
        readonly candidates: ReadonlyArray<unknown>;
        readonly streamSession: {
            readonly id: string;
        };
    };
};
export type VoiceChannelControlsJoinMutation = {
    readonly response: VoiceChannelControlsJoinMutationResponse;
    readonly variables: VoiceChannelControlsJoinMutationVariables;
};



/*
mutation VoiceChannelControlsJoinMutation(
  $input: StreamSessionJoinInput!
) {
  streamSessionJoin(input: $input) {
    answer
    candidates
    streamSession {
      id
    }
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "StreamSession",
        "kind": "LinkedField",
        "name": "streamSession",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
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
    "name": "VoiceChannelControlsJoinMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VoiceChannelControlsJoinMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e454572186fbfe7cda913bdcfe14e368",
    "id": null,
    "metadata": {},
    "name": "VoiceChannelControlsJoinMutation",
    "operationKind": "mutation",
    "text": "mutation VoiceChannelControlsJoinMutation(\n  $input: StreamSessionJoinInput!\n) {\n  streamSessionJoin(input: $input) {\n    answer\n    candidates\n    streamSession {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3414153df51bd980e3cbba1030ca48c2';
export default node;
