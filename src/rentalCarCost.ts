export function rentalCarCost(d: number): number {
    const value = d * 40;
    const discount = d >= 7 ? 50 : d >= 3 ? 20 : 0;

    return value - discount;
} 
