function printSolution (numArr, usedArr) {
    const solution = [];
    for(let i = 0; i < numArr.length; i++) {
        if(usedArr[i] == 1) {
            solution.push(numArr[i]);
        }
    }
    console.log(solution);
}

function sumOfSubset (usedArr, numArr, target, index) {
    if(index >= usedArr.length) {
        return;
    }
    let sum = 0;
    for(let i = 0; i < numArr.length; i++) {
        sum += numArr[i] * usedArr[i];
    }
    if(sum + numArr[index] == target) {
        usedArr[index] = 1;
        printSolution (numArr, usedArr);
        usedArr[index] = 0;
        sumOfSubset (usedArr, numArr, target, index + 1);
    }
    else if (sum + usedArr[index] > target) {
        return;
    }
    else {
        usedArr[index] = 1;
        sumOfSubset (usedArr, numArr, target, index + 1);
        usedArr[index] = 0;
        sumOfSubset (usedArr, numArr, target, index + 1);
    }
}

const usedArr = [0, 0, 0, 0, 0];
const numArr = [7, 2, 6, 11, 5];
const target = 13
sumOfSubset (usedArr, numArr, target, 0);
