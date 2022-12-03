
import readFile from './readFile';

const sum = (a, b) => a + b;

export async function day3First(filename) {
    const data = await readFile(filename);

    return data
        .split(/\n/)
        .map(rucksack => {
            const first = [...rucksack.substring(0, rucksack.length / 2)];
            const second = [...rucksack.substring(rucksack.length / 2)]
            return priority(intersection(first, second)[0]);
        })
        .reduce(sum, 0);
       ;
}

export async function day3Second(filename) {
    const data = await readFile(filename);
    const lines = data.split(/\n/);
    var sum = 0;
    for(let i = 0; i < lines.length; i+=3) {
        sum += priority(intersection([...lines[i]], intersection([...lines[i + 1]], [...lines[i + 2]]))[0]);
    }
    return sum;
}

const intersection = (a, b) => {
    const map = new Map();
    a.forEach(x => map.set(x, x));
    return b.filter(x => map.has(x));
};

const priority = y => (y.charCodeAt() > 'Z'.charCodeAt())
    ? (y.charCodeAt() - 'a'.charCodeAt() + 1)
    : (y.charCodeAt() - 'A'.charCodeAt() + 27);

