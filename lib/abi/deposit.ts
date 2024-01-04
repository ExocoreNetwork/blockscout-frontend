export const depositTo = [
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
        name: 'stakerAddress',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'opAmount',
        type: 'uint256',
      },
    ],
    name: 'depositTo',
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
