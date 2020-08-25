const table_ru_en = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'yo',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'й': 'y',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'ts',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'sch',
    'ъ': '\'',
    'ы': 'i',
    'ь': '\'',
    'э': 'e',
    'ю': 'u',
    'я': 'ya',
    '«': '"',
    '»': '"',
    '–': '-',
    '—': '-',
    '№': '#',
    '`': '\'',
};

const table_en_ru = {
    'a': 'а',
    'b': 'б',
    'v': 'в',
    'g': 'г',
    'd': 'д',
    'e': 'е',
    'yo': 'ё',
    'z': 'з',
    'i': 'и',
    'y': 'й',
    'k': 'к',
    'l': 'л',
    'm': 'м',
    'n': 'н',
    'o': 'о',
    'p': 'п',
    'r': 'р',
    's': 'с',
    't': 'т',
    'u': 'у',
    'f': 'ф',
    'h': 'х',
    'ch': 'ч',
    '\'': 'ь',
    '"': '«',
    '-': '–',
    '#': '№'
};

const maxSymbolsInSingleEnMessage = 160;
const maxSymbolsInSingleRuMessage = 70;

const maxSymbolsInMultipleEnMessage = 153;
const maxSymbolsInMultipleRuMessage = 67;

const switchElement = document.getElementById("translateSwitch");
const messageElement = document.getElementById("message");
const symbolCounterElement = document.getElementById("symbolCounter");
const smsCounterElement = document.getElementById("smsCounter");

switchElement.onchange = function translateHandler() {
    const translateValue = switchElement.checked;
    if (translateValue) {
        translateToEn();
    } else {
        translateToRu();
    }
};

messageElement.oninput = function(event) {
    countSymbolsAndMessages();
};

function countSymbolsAndMessages() {
    const inputText = messageElement.value;
    if (inputText.length > 0) {
        let isOnlyEnCharacters = true;
        for (const i of inputText) {
            if (i in table_ru_en || i.toLowerCase() in table_ru_en) {
                isOnlyEnCharacters = false;
                break;
            }
        }
        smsCounterElement.value = '1';
        if (isOnlyEnCharacters) {
            if (inputText.length > maxSymbolsInSingleEnMessage) {
                smsCounterElement.value = inputText.length % maxSymbolsInMultipleEnMessage === 0 ? inputText.length / maxSymbolsInMultipleEnMessage : Math.floor(inputText.length/maxSymbolsInMultipleEnMessage) + 1;
            }
        } else {
            if (inputText.length > maxSymbolsInSingleRuMessage) {
                smsCounterElement.value = inputText.length % maxSymbolsInMultipleRuMessage === 0 ? inputText.length / maxSymbolsInMultipleRuMessage : Math.floor(inputText.length/maxSymbolsInMultipleRuMessage) + 1;
            }
        }

    } else {
        smsCounterElement.value = '0';
    }

    symbolCounterElement.value = inputText.length;
}

function translateToEn() {
    const inputText = messageElement.value;
    let translatedText = "";
    for (const i of inputText) {
        if (i in table_ru_en) {
            translatedText = translatedText.concat(table_ru_en[i]);
        } else if (i.toLowerCase() in table_ru_en) {
            translatedText = translatedText.concat(capitalizeFirstLetter(table_ru_en[i.toLowerCase()]));
        } else {
            translatedText = translatedText.concat(i);
        }
    }
    messageElement.value = translatedText;

    countSymbolsAndMessages();
}

function translateToRu() {
    const inputText = messageElement.value;
    let translatedText = "";
    let multipleKey = "";
    for (const i of inputText) {
        multipleKey = multipleKey.concat(i);
        if (i in table_en_ru) {
            translatedText = translatedText.concat(table_en_ru[i]);
            multipleKey = "";
        } else if (i.toLowerCase() in table_en_ru) {
            translatedText = translatedText.concat(capitalizeFirstLetter(table_en_ru[i.toLowerCase()]));
            multipleKey = "";
        } else if (multipleKey in table_en_ru) {
            translatedText = translatedText.concat(table_en_ru[multipleKey]);
            multipleKey = "";
        } else if (multipleKey.toLowerCase() in table_en_ru) {
            translatedText = translatedText.concat(capitalizeFirstLetter(table_en_ru[multipleKey.toLowerCase()]));
        } else if (i === 'c' || i === 'C') {
            multipleKey = multipleKey.concat(i)
        } else {
            if (multipleKey === 'c') {
                translatedText = translatedText.concat(multipleKey);
                multipleKey = "";
            }
            translatedText = translatedText.concat(i);
        }
    }
    messageElement.value = translatedText;

    countSymbolsAndMessages();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}