export const delegationABI = [
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'clientChainLzId',
        type: 'uint16',
      },
      {
        internalType: 'uint64',
        name: 'lzNonce',
        type: 'uint64',
      },
      {
        internalType: 'bytes',
        name: 'assetsAddress',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'stakerAddress',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'operatorAddr',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'opAmount',
        type: 'uint256',
      },
    ],
    name: 'delegateToThroughClientChain',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'clientChainLzId',
        type: 'uint16',
      },
      {
        internalType: 'uint64',
        name: 'lzNonce',
        type: 'uint64',
      },
      {
        internalType: 'bytes',
        name: 'assetsAddress',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'stakerAddress',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'operatorAddr',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'opAmount',
        type: 'uint256',
      },
    ],
    name: 'undelegateFromThroughClientChain',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
