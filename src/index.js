module.exports = function toReadable(number) {
    let numb = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred"
    };
    if (number === 0) {
        return "zero";
    }

    let arr = String(number).split("");
    let arr2 = [];

    if (arr.length == 3) {
        arr2.push(numb[Math.trunc(+number / 100)]);
        if (arr[1] == 1) {
            arr2.push(numb[arr[1] + arr[2]]);
        } else if (arr[1] == 0) {
        } else {
            arr2.push(numb[arr[1] + "0"]);
        }
        if (arr[2] == 0) {
            arr2.push();
        } else {
            if (arr[1] == 1) {
            } else {
                arr2.push(numb[arr[2]]);
            }
        }
        arr2.splice(1, 0, "hundred");
    }

    if (arr.length == 2) {
        if (arr[0] == 1) {
            arr2.push(numb[arr[0] + arr[1]]);
        } else {
            arr2.push(numb[arr[0] + "0"]);
        }
        if (arr[1] == 0) {
            arr2.push();
        } else {
            if (arr[0] == 1) {
            } else {
                arr2.push(numb[arr[1]]);
            }
        }
    }
    if (arr.length == 1) {
        arr2.push(numb[arr[0]]);
    }

    return arr2.join(" ");
};
