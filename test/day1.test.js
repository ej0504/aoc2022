import { day1First, day1Second } from '../src/day1'

test('day1-1-example', async () => {
    const data = await day1First('resources/day1-1-example.txt');
    expect(data).toBe(24000);
});

test('day1-1-real', async () => {
    const data = await day1First('resources/day1-1-real.txt');
    expect(data).toBe(70369);
});

test('day1-2-real', async () => {
    const data = await day1Second('resources/day1-1-real.txt');
    expect(data).toBe(203002);
});