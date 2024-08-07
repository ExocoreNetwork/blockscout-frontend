export const withdrawPrinciple = [
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'clientChainLzId',
        type: 'uint16',
      },
      {
        internalType: 'bytes',
        name: 'assetsAddress',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'withdrawAddress',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'opAmount',
        type: 'uint256',
      },
    ],
    name: 'withdrawPrinciple',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'latestAssetState',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
