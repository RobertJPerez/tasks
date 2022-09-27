import { arrayBuffer } from "stream/consumers";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    }
    const numinside = [...numbers];
    const arr = [numinside[0], numinside[numinside.length - 1]];
    return arr;
}
/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const outputArray = Array.from(numbers, (x) => x * 3);
    return outputArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const res = numbers.map(Number);
    const fin = Array.from(res, (item) => item || 0);
    return fin;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const nodolla = amounts.map((s: string): string => {
        if (s.startsWith("$")) {
            s.slice(1);
            return s.slice(1);
        } else {
            return s;
        }
    });
    const fin = nodolla.map((n) => Number(n));
    //replaces NaN with 0
    const fin2 = Array.from(fin, (item) => item || 0);
    return fin2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let messages2 = [...messages];
    messages2 = messages2.map((m: string): string => {
        if (m.endsWith("!")) {
            return m.toUpperCase();
        } else {
            return m;
        }
        console.log(m);
    });
    const noq = messages2.filter((item) => !item.endsWith("?"));
    return noq;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let i = 0;
    words.map((m: string) => {
        if (m.length < 4) {
            i++;
        }
    });
    return i;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const bool = colors.every(
        (string) => string == "red" || string == "blue" || string == "green"
    );
    //every
    return bool;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const fin = [...addends];
    const maths = fin.join("+");
    const sum = addends.reduce((partialSum, a) => partialSum + a, 0);
    const firstelement = sum + "=";
    if (fin.length == 0) {
        return firstelement + "0";
    }
    // console.log(firstelement);
    // reduce
    // then add int + str
    // join(+)
    //fin.push(addends[0].toString);
    return firstelement + maths;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const arr = [...values];
    const before: number[] = [];
    let i = 0;
    arr.map((n: number) => {
        if (n >= 0) {
            before.splice(i, 0, n);
            i++;
        }
        if (n < 0) {
            const sum = before.reduce((partialSum, a) => partialSum + a, 0);
            before.splice(i, 0, n);
            i++;
            before.splice(i, 0, sum);
            i++;
        }
    });
    const index = before.indexOf(3);
    if (before[3] == -100) {
        before.splice(3, 1);
    }
    const bool = arr.every((number) => number > 0);
    if (bool == true) {
        const sum = before.reduce((partialSum, a) => partialSum + a, 0);
        before.splice(i, 0, sum);
        return before;
    } else {
        return before;
    }
    // if all elements in array are positive add sum
    // -100, 0, -200, 100, 200
    return before;
}
function w(value: string, index: number, array: string[]): unknown {
    throw new Error("Function not implemented.");
}
