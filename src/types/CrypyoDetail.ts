export interface CryptoDetails {
  id: string;
  name: string;
  symbol: string;
  image: string;

  market_data: {
    current_price: {
      usd: number;
    };
  };
  market_cap: {
    usd: number;
  };
  ath: {
    usd: number;
  };
}
