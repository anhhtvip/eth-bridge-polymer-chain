export const abi = [
  {
    inputs: [
      {
        internalType: 'contract IbcDispatcher',
        name: '_dispatcher',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'invalidCounterPartyPortId',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'fromChainId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'toChainId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'AckBridge',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'AckDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'fromChainId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'toChainId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Bridge',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'fromChainId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'toChainId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'RecvBridge',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'RecvDeposit',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'ackPackets',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'balances',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'channelId',
        type: 'bytes32',
      },
      {
        internalType: 'uint64',
        name: 'timeoutSeconds',
        type: 'uint64',
      },
      {
        internalType: 'uint256',
        name: 'toChainId',
        type: 'uint256',
      },
    ],
    name: 'bridge',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'bridgePackets',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'fromChainId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'toChainId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'enum XBridge.IbcPacketStatus',
        name: 'ibcStatus',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'chainId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'connectedChannels',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'channelId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'cpChannelId',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'portId',
            type: 'string',
          },
          {
            internalType: 'bytes32',
            name: 'channelId',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'version',
            type: 'string',
          },
        ],
        internalType: 'struct CounterParty',
        name: 'local',
        type: 'tuple',
      },
      {
        internalType: 'uint8',
        name: 'ordering',
        type: 'uint8',
      },
      {
        internalType: 'bool',
        name: 'feeEnabled',
        type: 'bool',
      },
      {
        internalType: 'string[]',
        name: 'connectionHops',
        type: 'string[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'portId',
            type: 'string',
          },
          {
            internalType: 'bytes32',
            name: 'channelId',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'version',
            type: 'string',
          },
        ],
        internalType: 'struct CounterParty',
        name: 'counterparty',
        type: 'tuple',
      },
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'bytes',
                    name: 'prefix',
                    type: 'bytes',
                  },
                  {
                    internalType: 'bytes',
                    name: 'suffix',
                    type: 'bytes',
                  },
                ],
                internalType: 'struct OpIcs23ProofPath[]',
                name: 'path',
                type: 'tuple[]',
              },
              {
                internalType: 'bytes',
                name: 'key',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'value',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'prefix',
                type: 'bytes',
              },
            ],
            internalType: 'struct OpIcs23Proof[]',
            name: 'proof',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'height',
            type: 'uint256',
          },
        ],
        internalType: 'struct Ics23Proof',
        name: 'proof',
        type: 'tuple',
      },
    ],
    name: 'createChannel',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'channelId',
        type: 'bytes32',
      },
      {
        internalType: 'uint64',
        name: 'timeoutSeconds',
        type: 'uint64',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'depositPackets',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'enum XBridge.IbcPacketStatus',
        name: 'ibcStatus',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dispatcher',
    outputs: [
      {
        internalType: 'contract IbcDispatcher',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getConnectedChannels',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'channelId',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'cpChannelId',
            type: 'bytes32',
          },
        ],
        internalType: 'struct CustomChanIbcApp.ChannelMapping[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'string',
                name: 'portId',
                type: 'string',
              },
              {
                internalType: 'bytes32',
                name: 'channelId',
                type: 'bytes32',
              },
            ],
            internalType: 'struct IbcEndpoint',
            name: 'src',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'portId',
                type: 'string',
              },
              {
                internalType: 'bytes32',
                name: 'channelId',
                type: 'bytes32',
              },
            ],
            internalType: 'struct IbcEndpoint',
            name: 'dest',
            type: 'tuple',
          },
          {
            internalType: 'uint64',
            name: 'sequence',
            type: 'uint64',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint64',
                name: 'revision_number',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'revision_height',
                type: 'uint64',
              },
            ],
            internalType: 'struct Height',
            name: 'timeoutHeight',
            type: 'tuple',
          },
          {
            internalType: 'uint64',
            name: 'timeoutTimestamp',
            type: 'uint64',
          },
        ],
        internalType: 'struct IbcPacket',
        name: '',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bool',
            name: 'success',
            type: 'bool',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct AckPacket',
        name: 'ack',
        type: 'tuple',
      },
    ],
    name: 'onAcknowledgementPacket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'channelId',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'onCloseIbcChannel',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'channelId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'counterpartyChannelId',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'counterpartyVersion',
        type: 'string',
      },
    ],
    name: 'onConnectIbcChannel',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'version',
        type: 'string',
      },
      {
        internalType: 'enum ChannelOrder',
        name: '',
        type: 'uint8',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'portId',
            type: 'string',
          },
          {
            internalType: 'bytes32',
            name: 'channelId',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'version',
            type: 'string',
          },
        ],
        internalType: 'struct CounterParty',
        name: 'counterparty',
        type: 'tuple',
      },
    ],
    name: 'onOpenIbcChannel',
    outputs: [
      {
        internalType: 'string',
        name: 'selectedVersion',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'string',
                name: 'portId',
                type: 'string',
              },
              {
                internalType: 'bytes32',
                name: 'channelId',
                type: 'bytes32',
              },
            ],
            internalType: 'struct IbcEndpoint',
            name: 'src',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'portId',
                type: 'string',
              },
              {
                internalType: 'bytes32',
                name: 'channelId',
                type: 'bytes32',
              },
            ],
            internalType: 'struct IbcEndpoint',
            name: 'dest',
            type: 'tuple',
          },
          {
            internalType: 'uint64',
            name: 'sequence',
            type: 'uint64',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint64',
                name: 'revision_number',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'revision_height',
                type: 'uint64',
              },
            ],
            internalType: 'struct Height',
            name: 'timeoutHeight',
            type: 'tuple',
          },
          {
            internalType: 'uint64',
            name: 'timeoutTimestamp',
            type: 'uint64',
          },
        ],
        internalType: 'struct IbcPacket',
        name: 'packet',
        type: 'tuple',
      },
    ],
    name: 'onRecvPacket',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'success',
            type: 'bool',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct AckPacket',
        name: 'ackPacket',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'string',
                name: 'portId',
                type: 'string',
              },
              {
                internalType: 'bytes32',
                name: 'channelId',
                type: 'bytes32',
              },
            ],
            internalType: 'struct IbcEndpoint',
            name: 'src',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'portId',
                type: 'string',
              },
              {
                internalType: 'bytes32',
                name: 'channelId',
                type: 'bytes32',
              },
            ],
            internalType: 'struct IbcEndpoint',
            name: 'dest',
            type: 'tuple',
          },
          {
            internalType: 'uint64',
            name: 'sequence',
            type: 'uint64',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint64',
                name: 'revision_number',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'revision_height',
                type: 'uint64',
              },
            ],
            internalType: 'struct Height',
            name: 'timeoutHeight',
            type: 'tuple',
          },
          {
            internalType: 'uint64',
            name: 'timeoutTimestamp',
            type: 'uint64',
          },
        ],
        internalType: 'struct IbcPacket',
        name: 'packet',
        type: 'tuple',
      },
    ],
    name: 'onTimeoutPacket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'recvedPackets',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'portId',
            type: 'string',
          },
          {
            internalType: 'bytes32',
            name: 'channelId',
            type: 'bytes32',
          },
        ],
        internalType: 'struct IbcEndpoint',
        name: 'src',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'portId',
            type: 'string',
          },
          {
            internalType: 'bytes32',
            name: 'channelId',
            type: 'bytes32',
          },
        ],
        internalType: 'struct IbcEndpoint',
        name: 'dest',
        type: 'tuple',
      },
      {
        internalType: 'uint64',
        name: 'sequence',
        type: 'uint64',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'uint64',
            name: 'revision_number',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'revision_height',
            type: 'uint64',
          },
        ],
        internalType: 'struct Height',
        name: 'timeoutHeight',
        type: 'tuple',
      },
      {
        internalType: 'uint64',
        name: 'timeoutTimestamp',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_chainId',
        type: 'uint256',
      },
    ],
    name: 'setChainId',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'timeoutPackets',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'portId',
            type: 'string',
          },
          {
            internalType: 'bytes32',
            name: 'channelId',
            type: 'bytes32',
          },
        ],
        internalType: 'struct IbcEndpoint',
        name: 'src',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'portId',
            type: 'string',
          },
          {
            internalType: 'bytes32',
            name: 'channelId',
            type: 'bytes32',
          },
        ],
        internalType: 'struct IbcEndpoint',
        name: 'dest',
        type: 'tuple',
      },
      {
        internalType: 'uint64',
        name: 'sequence',
        type: 'uint64',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'uint64',
            name: 'revision_number',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'revision_height',
            type: 'uint64',
          },
        ],
        internalType: 'struct Height',
        name: 'timeoutHeight',
        type: 'tuple',
      },
      {
        internalType: 'uint64',
        name: 'timeoutTimestamp',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'channelId',
        type: 'bytes32',
      },
    ],
    name: 'triggerChannelClose',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IbcDispatcher',
        name: '_dispatcher',
        type: 'address',
      },
    ],
    name: 'updateDispatcher',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string[]',
        name: '_supportedVersions',
        type: 'string[]',
      },
    ],
    name: 'updateSupportedVersions',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]
