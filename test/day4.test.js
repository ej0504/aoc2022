import { day4First, day4Second } from '../src/day4'

test('day4-1-example', async () => {
    const data = await day4First('resources/day4-example.txt');
    expect(data).toBe(2);
});

test('day4-1-real', async () => {
    const data = await day4First('resources/day4-real.txt');
    expect(data).toBe(450);
});

test('day4-2-example', async () => {
    const data = await day4Second('resources/day4-example.txt');
    expect(data).toBe(70);
});

test('day4-2-real', async () => {
    const data = await day4Second('resources/day4-real.txt');
    expect(data).toBe(837);
});