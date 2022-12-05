
import readFile from './readFile';

export async function day5First(filename) {
    const data = await readFile(filename);
    // input
    const halves = data.split(/\n\n/);
    const setup = halves[0].split(/\n/);

    const indexMap = calcIndexMap(setup[setup.length - 1]);
    const stackMap = calcStacks(indexMap, setup);

    halves[1].split(/\n/).map(line => line.match(/[0-9]/g)).forEach(command => {
        const amount = command[0];
        const from = command[1];
        const to = command[2];

        // copy elements
        //// range 0- amount
        for(let i = 0; i < amount; i++) {
            let c = stackMap.get(from)?.pop();
            if(c) {
                stackMap.get(to).push(c);
            }
        }
    });

    let result = '';
    for(const stack of stackMap.values()) {
        let c = stack[stack.length - 1];
        if(c) {
            result += c;
        }
    }
    return result;
}

const calcIndexMap = (str) => {
    const map = new Map();
    for(let i = 0; i < str.length; i++) {
        const c = str[i];
        if(c.match(/[0-9]/)) {
            map.set(i, c);
        }
    }
    return map;
};

const calcStacks = (indexMap, setup) => {
    const stackMap = new Map();

    for(let i = setup.length - 2; i >= 0; i--) {
        let line = setup[i];
        for(let j = 0; j < line.length; j++) {
            let c = line[j];

            if(c.match(/[A-Z|a-z]/)) {
                if(stackMap.has(indexMap.get(j))) {
                    stackMap.get(indexMap.get(j)).push(c);
                } else {
                    stackMap.set(indexMap.get(j), [c]);
                }
            }
        }
    }
    return stackMap;
};

export async function day5Second(filename) {
    const data = await readFile(filename);

    return data;
}



