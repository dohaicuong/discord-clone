/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type StreamSessionJoinInput = {
    candidates: Array<unknown>;
    offer: string;
};
export type VoiceJoinSessionMutationVariables = {
    input: StreamSessionJoinInput;
};
export type VoiceJoinSessionMutationResponse = {
    readonly streamSessionJoin: {
        readonly answer: string;
        readonly candidates: ReadonlyArray<unknown>;
    };
};
export type VoiceJoinSessionMutation = {
    readonly response: VoiceJoinSessionMutationResponse;
    readonly variables: VoiceJoinSessionMutationVariables;
};



/*
mutation VoiceJoinSessionMutation(
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
    "name": "VoiceJoinSessionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VoiceJoinSessionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c894fe2c976f06593f76ff967059bd19",
    "id": null,
    "metadata": {},
    "name": "VoiceJoinSessionMutation",
    "operationKind": "mutation",
    "text": "mutation VoiceJoinSessionMutation(\n  $input: StreamSessionJoinInput!\n) {\n  streamSessionJoin(input: $input) {\n    answer\n    candidates\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e5fa2ea36332aa0e0abc0fa3c66ee081';
export default node;
