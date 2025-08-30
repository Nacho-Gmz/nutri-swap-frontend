import type { FoodName } from "./food.types";

interface GetFoodsNamesError {
  ok: false;
  message: string;
}

interface GetFoodsNamesSuccess {
  ok: true;
  foodNames: FoodName[];
}

export type { GetFoodsNamesError, GetFoodsNamesSuccess };
