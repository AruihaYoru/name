
const syllables = [
    'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ',
    'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン',
    'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
    'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ',
    'キャ', 'キュ', 'キョ', 'シャ', 'シュ', 'ショ', 'チャ', 'チュ', 'チョ', 'ニャ', 'ニュ', 'ニョ',
    'ヒャ', 'ヒュ', 'ヒョ', 'ミャ', 'ミュ', 'ミョ', 'リャ', 'リュ', 'リョ',
    'ギャ', 'ギュ', 'ギョ', 'ジャ', 'ジュ', 'ジョ', 'ビャ', 'ビュ', 'ビョ', 'ピャ', 'ピュ', 'ピョ',
    'ヴァ', 'ヴィ', 'ヴ', 'ヴェ', 'ヴォ', 'ウィ', 'ウェ', 'ウォ', 'クァ', 'クィ', 'クェ', 'クォ',
    'シェ', 'ジェ', 'チェ', 'ツァ', 'ツェ', 'ツォ', 'ティ', 'ディ', 'デュ', 'ファ', 'フィ', 'フェ', 'フォ', 'フュ'
];
const specialChars = ['ー', 'ッ', '・'];


const namePartsCollection = {
    fantasy: {
        prefixes: ['アル', 'エル', 'シル', 'ゼ', 'クロ', 'ライ', 'フィ', 'レ', 'マ', 'クァ', 'ユン', 'アスト', 'ベル', 'グレイ', 'ルシ', 'フェン', 'トル', 'ミスト', 'シャ'],
        middles: ['ク', 'ス', 'ティ', 'ファ', 'ラ', 'ド', 'ミ', 'ネ', 'ー', 'リ', 'ヴァ', 'フォ', 'ザ', 'ル', 'ン'],
        suffixes: ['ア', 'ス', 'ン', 'ト', 'ル', 'ラ', 'ナ', 'ド', 'ティス', 'オス', 'リア', 'ディア', 'シオン', 'フィル', 'ガルド', 'ウィス', 'フォード', 'ノア', 'ラム']
    },
    slavic: {
        prefixes: ['ウラジ', 'スタニ', 'ドミ', 'イェ', 'ボ', 'ミロ', 'アレク', 'イヴァン', 'ニコ', 'セル', 'ヤロ', 'カジ'],
        middles: ['ス', 'ラフ', 'ミール', 'ノフ', 'チェ', 'ー', 'リ', 'コ', 'ゴ', 'レ', 'ジ'],
        suffixes: ['スキー', 'ヴィチ', 'コフ', 'スラフ', 'ア', 'ナ', 'ロワ', 'ポフ', 'エフ', 'スカヤ', 'ミール', 'ネンコ']
    },
    asian: {
        prefixes: ['リ', 'シャオ', 'ジン', 'ハク', 'コウ', 'メイ', 'シュン', 'カイ', 'レン', 'ユエ', 'フェイ', 'ロン'],
        middles: ['ン', 'ウ', 'ェイ', 'ー', 'ファ', 'ミ', 'レ', 'カ', 'ホ', 'ユ', 'ン'],
        suffixes: ['エン', 'ハ', 'リン', 'キ', 'ヤ', 'ファン', 'ウェイ', 'ミン', 'ラン', 'ユウ', 'シャ', 'ホウ', 'ゼン']
    },
    latin: {
        prefixes: ['アウ', 'ユリ', 'コルネ', 'マル', 'セプティ', 'クラウ', 'ティベ', 'ガイ', 'クィン', 'カシ'],
        middles: ['リ', 'ウス', 'ー', 'ディ', 'ウェ', 'ティ', 'ニ', 'フラ', 'ウィ'],
        suffixes: ['ウス', 'アヌス', 'ス', 'オ', 'ア', 'イア', 'リウス', 'セプス', 'トル', 'マックス', 'ラ']
    }
};
const nameSeparators = ['・', ' '];



function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


function generateKatakanaWord() {
    const length = Math.floor(Math.random() * 3) + 3;
    let word = '';
    for (let i = 0; i < length; i++) {
        if (i > 0 && Math.random() < 0.25) {
            word += getRandomElement(specialChars);
        } else {
            word += getRandomElement(syllables);
        }
    }
    if (word.endsWith('ッ') || word.endsWith('・')) {
        word = word.slice(0, -1) + getRandomElement(['ク', 'ト', 'プ']);
    }
    if (word.startsWith('ッ') || word.startsWith('・') || word.startsWith('ン')) {
         word = getRandomElement(['ア','カ','サ','タ','ナ']) + word.slice(1);
    }
    return word;
}

function generatePersonName(style = 'fantasy') {
    const parts = namePartsCollection[style];
    if (!parts) return "（不明なスタイル）";
    if (Math.random() < 0.7) {
        return getRandomElement(parts.prefixes) + getRandomElement(parts.middles) + getRandomElement(parts.suffixes);
    } else {
        const firstName = getRandomElement(parts.prefixes) + getRandomElement(parts.suffixes);
        const lastName = getRandomElement(parts.prefixes) + getRandomElement(parts.suffixes);
        return `${firstName}${getRandomElement(nameSeparators)}${lastName}`;
    }
}

function generateFromTemplate(templateString) {
    let result = '';
    const wildcards = ['_', '＿'];
    for (const char of templateString) {
        if (wildcards.includes(char)) {
            result += getRandomElement(syllables);
        } else {
            result += char;
        }
    }
    return result;
}


function displayResults(element, generatorFunc, count = 10, ...args) {
    element.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const word = generatorFunc(...args);
        const p = document.createElement('p');
        p.textContent = word;
        element.appendChild(p);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const generateRandomBtn = document.getElementById('generateRandomBtn');
    const katakanaOutput = document.getElementById('katakanaOutput');
    const nameOutput = document.getElementById('nameOutput');
    const nameStyleSelect = document.getElementById('nameStyle');
    const generateNameStyleBtn = document.getElementById('generateNameStyleBtn');
    const styledNameOutput = document.getElementById('styledNameOutput');
    const templateInput = document.getElementById('templateInput');
    const generateFromTemplateBtn = document.getElementById('generateFromTemplateBtn');
    const templateOutput = document.getElementById('templateOutput');


    function initialLoad() {
        if (!document.querySelector('option[value="latin"]')) {
            const latinOption = document.createElement('option');
            latinOption.value = 'latin';
            latinOption.textContent = 'ラテン・古代ローマ風';
            nameStyleSelect.appendChild(latinOption);
        }
        
        generateRandomBtn.click();
        generateNameStyleBtn.click();
    }
    
    generateRandomBtn.addEventListener('click', () => {
        displayResults(katakanaOutput, generateKatakanaWord, 10);
        displayResults(nameOutput, generatePersonName, 10, 'fantasy');
    });

    generateNameStyleBtn.addEventListener('click', () => {
        const selectedStyle = nameStyleSelect.value;
        displayResults(styledNameOutput, generatePersonName, 10, selectedStyle);
    });

    generateFromTemplateBtn.addEventListener('click', () => {
        const template = templateInput.value;
        if (!template) {
            templateOutput.innerHTML = '<p style="color: red;">テンプレートを入力してください。</p>';
            return;
        }
        displayResults(templateOutput, generateFromTemplate, 10, template);
    });
    
    initialLoad();
});