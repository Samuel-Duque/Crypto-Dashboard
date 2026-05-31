import type { CryptoSummary } from "../types/CryptoSummary";
import type { CryptoDetails } from "../types/CrypyoDetail";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

//API endpoint y query parameter para expresar en dolares
export async function getCryptos(): Promise<CryptoSummary[]> {
  const response = await fetch(
    "https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
  );
  const data: CryptoSummary[] = await response.json();

  return data;
  console.log(data);
}

export async function getCryptoById(id: string): Promise<CryptoDetails[]> {
  const response = await fetch(
    "https://pro-api.coingecko.com/api/v3/coins/${id}",
  );

  const data: CryptoDetails[] = await response.json();

  return data;
}
