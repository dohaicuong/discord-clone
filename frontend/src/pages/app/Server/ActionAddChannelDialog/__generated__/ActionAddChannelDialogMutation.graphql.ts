/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChannelType = "TEXT" | "VOICE" | "%future added value";
export type ChannelCreateInput = {
    channelCategoryId: unknown;
    channelType?: ChannelType | null;
    name: string;
};
export type ActionAddChannelDialogMutationVariables = {
    input: ChannelCreateInput;
    connections: Array<string>;
};
export type ActionAddChannelDialogMutationResponse = {
    readonly channelCreate: {
        readonly channel: {
            readonly " $fragmentRefs": FragmentRefs<"ServerChannel_channel">;
        };
    } | null;
};
export type ActionAddChannelDialogMutation = {
    readonly response: ActionAddChannelDialogMutationResponse;
    readonly variables: ActionAddChannelDialogMutationVariables;
};



/*
mutation ActionAddChannelDialogMutation(
  $input: ChannelCreateInput!
) {
  channelCreate(input: $input) {
    channel {
      ...ServerChannel_channel
      id
    }
  }
}

fragment ServerChannel_channel on Channel {
  id
  name
  channelType
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ActionAddChannelDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ChannelCreatePayload",
        "kind": "LinkedField",
        "name": "channelCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Channel",
            "kind": "LinkedField",
            "name": "channel",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ServerChannel_channel"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ActionAddChannelDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ChannelCreatePayload",
        "kind": "LinkedField",
        "name": "channelCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Channel",
            "kind": "LinkedField",
            "name": "channel",
            "plural": false,
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
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "channelType",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "channel",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "Channel"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e52a51b6062112bca1bddbb3b9d0c279",
    "id": null,
    "metadata": {},
    "name": "ActionAddChannelDialogMutation",
    "operationKind": "mutation",
    "text": "mutation ActionAddChannelDialogMutation(\n  $input: ChannelCreateInput!\n) {\n  channelCreate(input: $input) {\n    channel {\n      ...ServerChannel_channel\n      id\n    }\n  }\n}\n\nfragment ServerChannel_channel on Channel {\n  id\n  name\n  channelType\n}\n"
  }
};
})();
(node as any).hash = 'b0a7903ba0bdc99618caa991952b4ae4';
export default node;
