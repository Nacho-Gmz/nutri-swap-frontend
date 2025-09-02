import type { FoodName } from "@/modules/common/types";

interface GetUserSwapsError {
  ok: false;
  message: string;
}

interface GetUserSwapsSuccess {
  ok: true;
  userSwaps: Swap[];
}

interface Swap {
  original_food: FoodName;
  swapped_food: FoodName;
}

export type { GetUserSwapsError, GetUserSwapsSuccess, Swap };
