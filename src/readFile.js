import { promises as fs } from 'fs';

export default async function readFile(filename) {
    return await fs.readFile(filename, "utf8");
  }