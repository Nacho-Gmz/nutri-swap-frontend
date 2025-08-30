import type { Swap } from "./food.types";

interface SwapFoodError {
  ok: false;
  message: string;
}

interface SwapFoodSuccess {
  ok: true;
  swaps: Swap[];
}

export type { SwapFoodError, SwapFoodSuccess };
