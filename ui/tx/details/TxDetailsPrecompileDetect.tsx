import { Skeleton } from '@chakra-ui/react';
import React from 'react';

import normalize from 'lib/address/normalize';
import type {
  PrecompileDetectParamsResult,
  PrecompileDetectResult,
} from 'lib/hooks/usePrecompileDetect';
import Tag from 'ui/shared/chakra/Tag';
import DetailsInfoItem from 'ui/shared/DetailsInfoItem';
import DetailsInfoItemDivider from 'ui/shared/DetailsInfoItemDivider';

interface Props {
  data: PrecompileDetectResult;
  isPlaceholderData: boolean;
  isDelegationAssociated?: boolean;
}

const TxDetailsPrecompileDetect = ({
  data,
  isPlaceholderData,
  isDelegationAssociated = false,
}: Props) => {
  const { status, params } = data;
  if (!status) {
    return null;
  }
  const { functionName, args } = params as PrecompileDetectParamsResult;
  return (
    <>
      <DetailsInfoItemDivider />
      <DetailsInfoItem
        title="Operation Type"
        flexWrap="nowrap"
        hint="Operation Type"
        isLoading={isPlaceholderData}
      >
        <Tag
          colorScheme="gray"
          isLoading={isPlaceholderData}
          isTruncated
          ml={3}
        >
          {functionName}
        </Tag>
      </DetailsInfoItem>
      {args && Boolean(args?.length) && (
        <>
          <DetailsInfoItem
            title="clientChainLzId"
            flexWrap="nowrap"
            hint="-"
            isLoading={isPlaceholderData}
          >
            <Skeleton isLoaded={!isPlaceholderData} overflow="hidden">
              {args[0] as string}
            </Skeleton>
          </DetailsInfoItem>
          {isDelegationAssociated && (
            <DetailsInfoItem
              title="lzNonce"
              flexWrap="nowrap"
              hint="-"
              isLoading={isPlaceholderData}
            >
              <Skeleton isLoaded={!isPlaceholderData} overflow="hidden">
                {args[1] as string}
              </Skeleton>
            </DetailsInfoItem>
          )}
          <DetailsInfoItem
            title="assetsAddress"
            flexWrap="nowrap"
            hint="-"
            isLoading={isPlaceholderData}
          >
            <Skeleton isLoaded={!isPlaceholderData} overflow="hidden">
              {normalize(String(args[isDelegationAssociated ? 2 : 1]))}
            </Skeleton>
          </DetailsInfoItem>
          <DetailsInfoItem
            title="stakerAddress"
            flexWrap="nowrap"
            hint="-"
            isLoading={isPlaceholderData}
          >
            <Skeleton isLoaded={!isPlaceholderData} overflow="hidden">
              {normalize(String(args[isDelegationAssociated ? 3 : 2]))}
            </Skeleton>
          </DetailsInfoItem>
          <DetailsInfoItem
            title="opAmount"
            flexWrap="nowrap"
            hint="-"
            isLoading={isPlaceholderData}
          >
            <Skeleton isLoaded={!isPlaceholderData} overflow="hidden">
              {(args[isDelegationAssociated ? 4 : 3] as bigint).toString()}
            </Skeleton>
          </DetailsInfoItem>
        </>
      )}
    </>
  );
};

export default TxDetailsPrecompileDetect;
