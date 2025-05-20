import type { SwapInfo } from "@/types/Swap";
import axios from "axios";

const swapClient = axios.create({
  baseURL: `${import.meta.env.BASE_URL}/swap`,
  timeout: 10000,
});

export async function getUserSwaps(userId: number) {
  try {
    const { data } = await swapClient.get(`/swap/${userId}`);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function swap(swapInfo: SwapInfo) {
  try {
    const { data } = await swapClient.post(`/swap`, swapInfo);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function saveSwap(swapInfo: SwapInfo) {
  try {
    const { data } = await swapClient.post(`/save`, swapInfo);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function logOut() {}
