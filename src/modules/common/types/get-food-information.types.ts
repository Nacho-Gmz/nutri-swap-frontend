import type { Food } from "./food.types";

interface GetFoodInformationError {
  ok: false;
  message: string;
}

interface GetFoodInformationSuccess {
  ok: true;
  foodInfo: Food;
}

export type { GetFoodInformationError, GetFoodInformationSuccess };
