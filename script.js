function min_arr1(number1) {
    let min_arr1 = number1[0];
    for (let i = 0; i < number1.length; i++) {
        if (min_arr1 > number1[i]) {
            min_arr1 = number1[i];
        }
    }
    return min_arr1;
}

function max_arr1(number1) {
    let max_arr1 = number1[0];
    for (let i = 0; i < number1.length; i++) {
        if (max_arr1 < number1[i]) {
            max_arr1 = number1[i];
        }
    }
    return max_arr1;
}

function min_arr2(number2) {
    let min_arr2 = number2[0];
    for (let i = 0; i < number2.length; i++) {
        if (min_arr2 > number2[i]) {
            min_arr2 = number2[i];
        }
    }
    return min_arr2;
}

function max_arr2(number2) {
    let max_arr2 = number2[0];
    for (let i = 0; i < number2.length; i++) {
        if (max_arr2 < number2[i]) {
            max_arr2 = number2[i];
        }
    }
    return max_arr2;
}
// mảng 1 có các phần tử là [8,9,4,6,5]
// mảng 2 có các phần tử là [3,10,6,4]

let checkmin_arr1 = min_arr1([8,9,4,6,5]);
let checkmax_arr1 = max_arr1([8,9,4,6,5]);
let checkmin_arr2 = min_arr2([3,10,6,4]);
let checkmax_arr2 = max_arr2([3,10,6,4]);
function check() {
    if (checkmin_arr1 > checkmin_arr2 && checkmax_arr1 < checkmax_arr2) {
        return true;
    }
    else return false;
}
console.log(check());