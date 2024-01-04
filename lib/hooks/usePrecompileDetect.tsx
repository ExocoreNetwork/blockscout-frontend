import { decodeFunctionData } from 'viem';

import type { Transaction } from 'types/api/transaction';

import { delegationABI } from 'lib/abi/delegation';
import { depositTo } from 'lib/abi/deposit';
import { withdrawPrinciple } from 'lib/abi/withdraw';
import {
  DELEGATION_PRECOMPILE,
  DEPOSIT_PRECOMPILE,
  WITHDRAW_PRECOMPILE,
} from 'lib/addressConsts';

export type PrecompileDetectParamsError = {
  error: string | unknown;
};

export type PrecompileDetectParamsResult = {
  functionName: string;
  args?: ReadonlyArray<unknown>;
};

export type PrecompileDetectResult = {
  status: boolean;
  params: PrecompileDetectParamsResult | PrecompileDetectParamsError;
};

export function useDepositDetect(tx?: Transaction): PrecompileDetectResult {
  if (!tx) {
    return {
      status: false,
      params: {
        error: 'Invalid tx data',
      },
    };
  }
  if (tx.to?.hash.toLocaleLowerCase() !== DEPOSIT_PRECOMPILE) {
    return {
      status: false,
      params: {
        error: 'Invalid address',
      },
    };
  }
  try {
    const { functionName, args } = decodeFunctionData({
      abi: depositTo,
      data: tx.raw_input as `0x${string}`,
    });
    return {
      status: true,
      params: {
        functionName,
        args,
      },
    };
  } catch (error) {
    return {
      status: false,
      params: {
        error,
      },
    };
  }
}

export function useWithdrawDetect(tx?: Transaction): PrecompileDetectResult {
  if (!tx) {
    return {
      status: false,
      params: {
        error: 'Invalid tx data',
      },
    };
  }
  if (tx.to?.hash.toLocaleLowerCase() !== WITHDRAW_PRECOMPILE) {
    return {
      status: false,
      params: {
        error: 'Invalid address',
      },
    };
  }
  try {
    const { functionName, args } = decodeFunctionData({
      abi: withdrawPrinciple,
      data: tx.raw_input as `0x${string}`,
    });
    return {
      status: true,
      params: {
        functionName,
        args,
      },
    };
  } catch (error) {
    return {
      status: false,
      params: {
        error,
      },
    };
  }
}

export function useDelegateDetect(tx?: Transaction): PrecompileDetectResult {
  if (!tx) {
    return {
      status: false,
      params: {
        error: 'Invalid tx data',
      },
    };
  }
  if (tx.to?.hash.toLocaleLowerCase() !== DELEGATION_PRECOMPILE) {
    return {
      status: false,
      params: {
        error: 'Invalid address',
      },
    };
  }
  try {
    const { functionName, args } = decodeFunctionData({
      abi: delegationABI,
      data: tx.raw_input as `0x${string}`,
    });
    return {
      status: true,
      params: {
        functionName,
        args,
      },
    };
  } catch (error) {
    return {
      status: false,
      params: {
        error,
      },
    };
  }
}

export default function usePrecompileDetect(tx?: Transaction) {
  const { status: depositStatus, params: depositParams } = useDepositDetect(tx);
  const { status: withdrawStatus, params: withdrawParams } =
    useWithdrawDetect(tx);
  const { status: delegateStatus, params: delegateParams } =
    useDelegateDetect(tx);

  return {
    deposit: {
      status: depositStatus,
      params: depositParams,
    },
    delegate: {
      status: delegateStatus,
      params: delegateParams,
    },
    withdraw: {
      status: withdrawStatus,
      params: withdrawParams,
    },
  };
}
