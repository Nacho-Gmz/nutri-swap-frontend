interface FoodName {
  id: number;
  name: string;
}

interface Swap {
  alimento: Food;
  similitud: number;
}

interface Food {
  name: string;
  category: string;
  quantity: number;
  unit: string;
  gross_weight: number;
  net_weight: number;
  calories: number;
  protein: number;
  lipids: number;
  carbohydrates: number;
  id: number;
  created_at: Date;
}

export type { FoodName, Food, Swap };
