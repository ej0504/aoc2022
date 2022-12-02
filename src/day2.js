import readFile from './readFile';

const hands = {
    ROCK:  { name: "ROCK", index: 0 },
    PAPER: { name: "PAPER", index: 1 },
    SCISSORS: { name: "SCISSORS", index: 2 },
};

const result = {
    WIN: { name: "WIN", score: 6 },
    LOSS: { name: "LOSS", score: 0 },
    DRAW: { name: "DRAW", score: 3 },
};

const winTable = [
    [result.DRAW, result.LOSS, result.WIN],
    [result.WIN, result.DRAW, result.LOSS],
    [result.LOSS, result.WIN, result.DRAW],
];

const opponentMap = {
    'A' : hands.ROCK,
    'B' : hands.PAPER,
    'C' : hands.SCISSORS,
};

const playerMap = {
    'X' : hands.ROCK,
    'Y' : hands.PAPER,
    'Z' : hands.SCISSORS,
};

const resultMap = {
    'X' : result.LOSS,
    'Y' : result.DRAW,
    'Z' : result.WIN,
};

export async function day2First(filename) {
    const data = await readFile(filename);
    return data
        .split('\n')
        .map(items => {
            const opponent = opponentMap[items[0]];
            const player = playerMap[items[2]];
            const score = player.index + 1 + winTable[player.index][opponent.index].score;
            return score;
        })
        .reduce((a, b) => a + b, 0);
}

export async function day2Second(filename) {
    const data = await readFile(filename);
    return data
        .split('\n')
        .map(items => {
            const opponent = opponentMap[items[0]];
            const result = resultMap[items[2]];
            const playerIndex = reverseResultLookup(opponent, result);
            const score = playerIndex + 1 + result.score;
            return score;
        })
        .reduce((a, b) => a + b, 0);
}

const reverseResultLookup = (opponent, result) => {
    for(let i = 0; i < 3; i++) {
        if(winTable[i][opponent.index].name == result.name) {
            return i;
        }
    }
    return -1;
};

