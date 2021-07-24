export class Stock {
    public ask: number; 
    public bid: number;
    public bookValue: number; 
    public epsForward: number;
    public epsTrailingTwelveMonths: number;
    public fiftyDayAverage: number; 

    
    constructor(ask: number, bid: number, bookValue: number, epsForward: number, epsTrailingTwelveMonths: number, fiftyDayAverage: number) {
        this.ask = ask;
        this.bid = bid;
        this.bookValue = bookValue;
        this.epsForward = epsForward;
        this.epsTrailingTwelveMonths = epsTrailingTwelveMonths;
        this.fiftyDayAverage = fiftyDayAverage;
    }
}