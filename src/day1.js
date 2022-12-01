import readFile from './readFile';

export async function day1First(filename) {
    const data = await readFile(filename);
    const individualCalories = calcIndividualCalories(data);
    return individualCalories[0];
}

export async function day1Second(filename) {
    const data = await readFile(filename);
    const individualCalories = calcIndividualCalories(data);
    return individualCalories[0] + individualCalories[1] + individualCalories[2];
}

const calcIndividualCalories = (data) => 
    data
        .split('\n\n')
        .map(items =>
            items.split('\n')
                .map(calorie => parseInt(calorie))
                .reduce((a, b) => a + b, 0)
        )
        .sort((a, b) => b - a);
