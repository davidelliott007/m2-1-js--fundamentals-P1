/**
 * FIBONACCI GENERATOR
 *
 * The Fibonacci sequence is a sequence of numbers where every value is the sum
 * of the previous 2 values.
 *
 * It looks like this:
 *
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 *
 * Why?
 *
 *                   13 +21 = 34
 *                8 +13 =21
 *             5 +8 =13
 *
 * See? Every number in the sequence is the result of adding the two numbers to
 * the left. The sequence starts with "0, 1", and every number beyond that
 * can be calculated by adding the previous 2 numbers.
 *
 * Write a program which calculates the 50th number in the fibonacci sequence
 *
 * (Correct answer: 12586269025)
 * (The numbers get big quickly!)
 *
 */


let prevValue1 = 0;
let prevValue2 = 1;
let totalValue = 0;

console.log("0: ",totalValue);

for (let fiboIterator = 1; fiboIterator < 51; fiboIterator++) {
    console.log(fiboIterator, ": ",totalValue);

    totalValue = prevValue1 + prevValue2;
    prevValue1 = prevValue2;
    prevValue2 = totalValue;
}

