export function nextBigger(n: number): number {
    const digits = n.toString().split("");

    // Find the first digit that is smaller than the digit to its right
    let pos1: number | undefined;
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] > digits[i - 1]) {
            pos1 = i - 1;
            break;
        }
    }

    // If no occurrence is found, return -1
    // This means the digits are in descending order, and no bigger number can be formed
    if (pos1 === undefined) return -1;

    // Find the smallest digit on the right side of pos1 that is larger than digits[pos1]
    let pos2!: number;
    for (let i = digits.length - 1; i > pos1; i--) {
        if (digits[pos1] < digits[i]) {
            pos2 = i;
            break;
        }
    }

    // Swap the found digits
    [digits[pos1], digits[pos2]] = [digits[pos2], digits[pos1]];

    // Split digits[] into two parts: left and right
    const left = digits.slice(0, pos1 + 1);
    const right = digits.slice(pos1 + 1).reverse(); // Reverse the right part to get the smallest number possible

    // join the left and right parts and convert to a number
    return Number([...left, ...right].join(""));
}
