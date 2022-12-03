import { day3First, day3Second } from '../src/day3'

test('day3-1-example', async () => {
    const data = await day3First('resources/day3-1-example.txt');
    expect(data).toBe(157);
});

test('day3-1-real', async () => {
    const data = await day3First('resources/day3-1-real.txt');
    expect(data).toBe(8394);
});

test('day3-2-example', async () => {
    const data = await day3Second('resources/day3-1-example.txt');
    expect(data).toBe(70);
});

test('day3-2-real', async () => {
    const data = await day3Second('resources/day3-1-real.txt');
    expect(data).toBe(2413);
});