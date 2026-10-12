import test from "node:test";
import assert from "node:assert/strict";
import { INITIAL_TURNS, traceStack } from "../lib/stack-game.ts";

test("the starting puzzle requires all three blue tiles to be turned", () => {
  const turns = [...INITIAL_TURNS];
  assert.equal(traceStack(turns).solved, false);
  for (const index of [1, 4, 8]) {
    turns[index] += 1;
    assert.equal(traceStack(turns).solved, index === 8);
  }
  assert.deepEqual(traceStack(turns).connected, [0, 1, 4, 5, 8]);
});

test("only the connected route wins across all 64 tile arrangements", () => {
  let wins = 0;
  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 4; b++) {
      for (let c = 0; c < 4; c++) {
        const turns = [...INITIAL_TURNS];
        [turns[1], turns[4], turns[8]] = [a, b, c];
        if (traceStack(turns).solved) {
          wins++;
          assert.deepEqual([a, b, c], [2, 0, 0]);
        }
      }
    }
  }
  assert.equal(wins, 1);
});

test("full rotations preserve the route, and resetting restores the puzzle", () => {
  const turns = [0, 6, 0, 0, 8, 2, 0, 0, 4];
  assert.equal(traceStack(turns).solved, true);
  assert.equal(traceStack([...INITIAL_TURNS]).solved, false);
});
