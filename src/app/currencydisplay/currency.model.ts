export class Currency {
    constructor(
        public rank: number,
        public name: string,
        public market_cap: number,
        public price: number,
        public volume: number,
        public circulating_supply: number
        ) {}

}