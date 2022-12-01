import readFile from '../src/readFile';

test('reads a file into text', async () => {
    const data = await readFile('resources/sample.txt');
    expect(data)
        .toBe(
        `Hello
There
It's
me`);
});