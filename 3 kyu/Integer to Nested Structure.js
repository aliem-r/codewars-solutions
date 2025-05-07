// https://www.codewars.com/kata/5992757ab2555777fb000067/

const primes = [2, 3, 5, 7];

// HELPER FUNCTIONS
// ————————————————————

// Checks if n is prime
function isPrime(num) {
    if (num < 2) return false;
    if (num % 2 === 0) return num === 2;
    if (num % 3 === 0) return num === 3;

    for (let i = 5; i <= Math.sqrt(num); i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

// Returns the prime factors of n in an array
function primeFactors(num) {
    const factors = [];

    while (num % 2 === 0) {
        factors.push(2);
        num /= 2;
    }

    while (num % 3 === 0) {
        factors.push(3);
        num /= 3;
    }

    for (let i = 5; i <= Math.sqrt(num); i += 6) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }

        while (num % (i + 2) === 0) {
            factors.push(i + 2);
            num /= i + 2;
        }
    }

    if (num > 1) factors.push(num);

    return factors;
}

// Obtains the position of given prime
function primeIndex(num) {
    if (num < 2 || !isPrime(num)) return -1;

    if (primes.includes(num)) {
        return primes.indexOf(num) + 1;
    }

    let last = primes[primes.length - 1];
    for (let i = last + 2; i <= num; i += 2) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes.length;
}

// Returns the prime at given index
function primeAt(idx) {
    if (idx < 1) return -1;

    let last = primes[primes.length - 1];
    while (primes.length < idx) {
        last += 2;
        if (isPrime(last)) primes.push(last);
    }

    return primes[idx - 1];
}

// Converts an array to a binary string where "1" = "[" and "0" = "]"
function arrayToBin(arr) {
    return arr.map((sub) => "1" + arrayToBin(sub) + "0").join("");
}

// Converts a binary string to an array
function binToArray(bin) {
    return JSON.parse(
        bin.replace(/1/g, "[").replace(/0/g, "]").replace(/\]\[/g, "],[")
    );
}

// MAIN FUNCTIONS

function encode(num) {
    function breakDown(num) {
        return primeFactors(num).map((prime) => {
            const idx = primeIndex(prime);
            return idx === 1 ? [] : breakDown(idx);
        });
    }

    const arr = breakDown(num);
    const bin = arrayToBin(arr).replace(/(10+)$/, "");
    return parseInt(bin, 2);
}

function decode(num) {
    let bin = "1" + num.toString(2) + "1";

    const zerosCount = [...bin].reduce(
        (sum, bit) => sum + (bit === "1" ? 1 : -1),
        0
    );
    bin += "0".repeat(zerosCount);

    const arr = binToArray(bin);

    function reconstruct(arr) {
        if (arr.length === 0) return 1;
        return arr.map(reconstruct).reduce((acc, idx) => acc * primeAt(idx), 1);
    }

    return reconstruct(arr);
}

console.log(decode(185)); // 0
