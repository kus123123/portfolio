// Ports go clockwise: north, east, south, west. Tiles rotate in quarter turns.
export const ROTATABLE_TILES = [1, 4, 8] as const;
export const INITIAL_TURNS = [0, 1, 0, 0, 3, 2, 0, 0, 3] as const;
export const TILE_PORTS: readonly (readonly number[])[] = [
  [1, 3], [0, 1], [], [], [0, 1], [0, 1], [], [], [0, 1],
];

export function traceStack(turns: readonly number[]) {
  let tile = 0;
  let incoming = 3;
  const connected: number[] = [];

  while (!connected.includes(tile)) {
    const ports = TILE_PORTS[tile].map((port) => (port + turns[tile]) % 4);
    if (!ports.includes(incoming)) break;
    connected.push(tile);
    const outgoing = ports.find((port) => port !== incoming);
    if (outgoing === undefined) break;
    if (tile === 8 && outgoing === 1) return { connected, solved: connected.includes(4) };

    const row = Math.floor(tile / 3) + [-1, 0, 1, 0][outgoing];
    const col = tile % 3 + [0, 1, 0, -1][outgoing];
    if (row < 0 || row > 2 || col < 0 || col > 2) break;
    tile = row * 3 + col;
    incoming = (outgoing + 2) % 4;
  }

  return { connected, solved: false };
}
