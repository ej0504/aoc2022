import { day5First, day5Second } from '../src/day5'

test('day5-1-example', async () => {
    const data = await day5First('resources/day5-example.txt');
    expect(data).toBe('CMZ');
});

test('day5-1-real', async () => {
    const data = await day5First('resources/day5-real.txt');
    // one line change to log out all the steps
    expect(data).toBe('FCJTPRN');
});

test('day5-2-example', async () => {
    const data = await day5Second('resources/day5-example.txt');
    expect(data).toBe(70);
});

test('day5-2-real', async () => {
    const data = await day5Second('resources/day5-real.txt');
    expect(data).toBe(2413);
});