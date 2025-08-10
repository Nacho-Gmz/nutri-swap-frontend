interface NombreAlimento {
  id: number;
  name: string;
}

interface Swap {
  alimento: Alimento;
  similitud: number;
}

interface Alimento {
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

export type { NombreAlimento, Alimento, Swap };
