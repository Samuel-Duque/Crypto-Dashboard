import type { CryptoSummary } from "../types/CryptoSummary";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

//API endpoint y query parameter para expresar en dolares
export async function getCryptos(): Promise<Crypto[]> {
  const response = await fetch(
    "https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
  );
  const data: Crypto[] = await response.json();

  return data;
}
