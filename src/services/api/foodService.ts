import type { AlimentoData } from "@/types/Food";
import axios from "axios";

const foodClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/alimentos`,
  timeout: 10000,
});

export async function getAlimentoById(alimentoId: number) {
  try {
    const { data } = await foodClient.get(`/alimento/${alimentoId}`);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function getAlimentoByName(alimentoName: string) {
  try {
    const { data } = await foodClient.get(`/alimento/${alimentoName}`);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function createAlimento(alimento: AlimentoData) {
  try {
    const { data } = await foodClient.post(`/alimento`, alimento);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function updateAlimento(
  alimentoNombre: string,
  alimento: Partial<AlimentoData>
) {
  try {
    const { data } = await foodClient.put(
      `/alimento/${alimentoNombre}`,
      alimento
    );
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function deleteAlimento(alimentoNombre: string) {
  try {
    const { data } = await foodClient.delete(`/alimento/${alimentoNombre}`);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function getAlimentos() {
  try {
    const { data } = await foodClient.get(`/alimentos`);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function getAlimentosCategoria(categoriaAlimentos: string) {
  try {
    const { data } = await foodClient.get(
      `/alimentos/categoria/${categoriaAlimentos}`
    );
    return [null, data];
  } catch (error) {
    return [error];
  }
}
