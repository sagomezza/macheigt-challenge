const pairOfValues = (intArray, targetSum) => {
    targetSum = Number(targetSum)
    intArray = intArray.split(',');
    if (isNaN(targetSum)) {
        return 'Your target sum is not a number, check it and try again!'
    }
    let answer = ``;
    let convertedArray = intArray.map(elem => {
        if (isNaN(Number(elem))) answer += `Filtered strings from the list! ${"\n"}`;
        return Number(elem);
    });
    let cleanArray = convertedArray.filter(Number.isFinite);
    if (cleanArray.length === 0) {
        return 'The list is not made by numbers separated by comma, check it and try again!'
    } else {
        for (i = 0; i < cleanArray.length; i += 1) {
            let num = cleanArray[i]
            let secondValue = num < 0 ? ((num - targetSum) * -1) : (targetSum - num);
            let secondValueIndex = cleanArray.indexOf(secondValue, 1)
            if (secondValueIndex >= 0 && secondValueIndex !== i) {
                answer += `${num}, ${secondValue}${"\n"}`;
                cleanArray.splice(secondValueIndex, 1);
            }
            cleanArray.splice(i, 1);
            i = -1;
        }
        return answer;
    }
}

exports.pairOfValues = pairOfValues;
