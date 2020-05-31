export interface mockBettingForkData  {
    startingValue: number;
    expectedValue: number;
    wholeBudget: number;
    minProbabilityPerCombination: number;
    minProfitPerCombination: number;
    minSuccedDraw: number;
}

export type BettingForkData = {
    startingValue: number,
    expectedValue: number,
    wholeBudget: number;
    minProbabilityPerCombination: number;
    minProfitPerCombination: number;
    minSuccedDraw: number;
}