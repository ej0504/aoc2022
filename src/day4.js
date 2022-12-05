
import readFile from './readFile';

const sum = (a, b) => a + b;

export async function day4First(filename) {
    const data = await readFile(filename);

    return data
        .split(/\n/)
        .map(line => line.match(/[0-9]/g))
        .filter(matches => matches[0] <= matches[1] && matches[2] <= matches[3])
        .map(a => {
            return {
                a1: Math.min(a[0], a[1]), a2: Math.max(a[0], a[1]),
                b1: Math.min(a[2], a[3]), b2: Math.max(a[2], a[3])};
        })
        .filter(x =>
                (x.a1 <= x.b1 && x.a2 >= x.b2)
            ||  (x.b1 <= x.a1 && x.b2 >= x.a2))
        // .filter( x => !(x.a1 == x.b1 && x.a2 == x.b2))
        // .map(x  => x.a1 + "-" + x.a2 + "," + x.b1 + "-" + x.b2 + "\n")
        // .reduce((a, b) => a + b, "");
        .length;
        // .map(rucksack => {
        //     const first = [...rucksack.substring(0, rucksack.length / 2)];
        //     const second = [...rucksack.substring(rucksack.length / 2)]
        //     return priority(intersection(first, second)[0]);
        // })
        // .reduce(sum, 0);
       ;
}

export async function day4Second(filename) {
    const data = await readFile(filename);
    // const lines = data.split(/\n/);
    // var sum = 0;
    // for(let i = 0; i < lines.length; i+=3) {
    //     sum += priority(intersection([...lines[i]], intersection([...lines[i + 1]], [...lines[i + 2]]))[0]);
    // }
    return data;
}



