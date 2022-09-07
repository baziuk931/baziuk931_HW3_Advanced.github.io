//getMaxDigit(number)

function getMaxDigit(n) {

    let m = n.toString().split('');
    let maxDigit = m[0];

    for (let i = 1; i < m.length; i++) {
        if (m[i] > maxDigit) maxDigit = m[i]
    }

    return maxDigit;
}

document.writeln(`Функція №1: ${getMaxDigit(123456)}<br>`)

// getDegree(number)


function getDegree(number, degree) {
    let result = number;

    for (let i = 1; i < degree; i++) {
        result = result * number;
    }

    return result;
}

document.writeln(`Функція №2: ${getDegree(2, 5)}<br>`)

//getUpperCase(string)

function getUpperCase(name = '') {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

document.writeln(`Функція №3: ${getUpperCase('iryna')}<br>`)

//getRandomNumber(number, number)

function getRandomNumber(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n)
}

document.writeln(`Функція №5: ${getRandomNumber(1, 22)}<br>`)


//countLetter(character, string)

function countLetter(letter, word) {
    let counter = 0;

    for (let i = 0; i < word.length; i++) {

        if (word.charAt(i) == letter) {
            counter += 1;
        }
    }
    return counter;
}

document.writeln(`Функція №6: ${countLetter('e', 'coffee')}<br>`)

//getRandomPassword(number)

function getRandomPassword(n=8) {
    let e = 1;

    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            e *= 10;
            Math.floor(Math.random() * e);

        }
    }
    else {
       e=100000000;
    }
return Math.floor(Math.random() * e);
}

document.writeln(`Функція №9: ${getRandomPassword()}<br>`)



