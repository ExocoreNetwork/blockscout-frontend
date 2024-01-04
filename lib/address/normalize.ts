import { getAddress } from 'viem';

export default function normalize(address: string) {
  let filteredAddress = address;
  if (address.length > 42) {
    filteredAddress = address.slice(0, 42);
  }

  return getAddress(filteredAddress, 1);
}
