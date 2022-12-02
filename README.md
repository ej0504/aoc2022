# aoc2022
AdventOfCode2022 repo

Note this is my first attempt at Node with Jest and ECMAScript6, so expect somewhat janky setup and config.

To run all tests, use the following
`NODE_OPTIONS=--experimental-vm-modules npx jest`
To run a single test, use the describe arg in the test, eg
`NODE_OPTIONS=--experimental-vm-modules npx jest -t='reads a file into text'`
