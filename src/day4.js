
import readFile from './readFile';

export async function day4First(filename) {
    const data = await readFile(filename);

    return countFiltered(data, x =>
        (x.a1 <= x.b1 && x.a2 >= x.b2)
    ||  (x.b1 <= x.a1 && x.b2 >= x.a2));
}

export async function day4Second(filename) {
    const data = await readFile(filename);
    return countFiltered(data, x =>
       !(x.a2 < x.b1 || x.b2 < x.a1));
}

const countFiltered = (data, filter) => {
    return data
        .split(/\n/)
        .map(line => line.match(/[0-9]+/g))
        .map(a => {
            return {
                a1: Math.min(a[0], a[1]), a2: Math.max(a[0], a[1]),
                b1: Math.min(a[2], a[3]), b2: Math.max(a[2], a[3])};
        })
        .filter(filter)
        .length;
};



