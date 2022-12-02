import { day2First, day2Second } from '../src/day2'

test('day2-1-example', async () => {
    const data = await day2First('resources/day2-1-example.txt');
    expect(data).toBe(15);
});

test('day2-1-real', async () => {
    const data = await day2First('resources/day2-1-real.txt');
    expect(data).toBe(14375);
});

test('day2-2-example', async () => {
    const data = await day2Second('resources/day2-1-example.txt');
    expect(data).toBe(12);
});

test('day2-2-real', async () => {
    const data = await day2Second('resources/day2-1-real.txt');
    expect(data).toBe(10274);
});