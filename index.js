
function IsHappy(str){
    if (Number(str[0]) + Number(str[1])+ Number(str[2]) === Number(str[3]) + Number(str[4]) + Number(str[5]) ){
       return "Yes";
    }
    return "No";
}

function splitString(str, groupLength) {
    let result = [];
    for (let i = 0; i < str.length; i += groupLength) {
        result.push(str.slice(i, i + groupLength));
    }
    return result;
}

function ChangeAvg(str) {
    let str_list = splitString(str, 3);

    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i].length === 3) {  
            let randomChar;
            do {
                randomChar = String.fromCharCode(Math.floor(Math.random() * (256 - 32) + 32));
            } while (str_list[i].includes(randomChar));

            str_list[i] = str_list[i][0] + randomChar + str_list[i][2];
        }
    }
    str_list.sort();
    console.log(str_list);
    return str_list.join("");
}

const consonants = [
    'б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ','ґ',
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'  
];

function CalcConsonants(word){
    let count = 0;
    for(let letter of word){
        if(consonants.includes(letter)){
            count++;
        }
    }
    return count;
}

function SotrByConsonants(str){
    let words = str.split(" ");
    let wordss_with_num = [];
    for(var word of words ){
        wordss_with_num.push([CalcConsonants(word), word]);
    }
    wordss_with_num.sort();
    console.log(wordss_with_num);
    return wordss_with_num.map(w => w[1]).join(" ");
}

function FindAandB(){
    let results = [];
    for (let A = 10; A < 100; A++) {
        for (let B = 10; B < 100; B++) {
            let X = 100 * A + B;
            let Y = 100 * B + A;

            if (X % 99 === 0 && Y % 49 === 0) {
                results.push(`A = ${A}, B = ${B}`);
            }
        }
    }
    console.log(results);
    return results.join("\n") || "Не знайдено";
}