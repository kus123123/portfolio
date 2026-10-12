"use client";

import { useRef, useState } from "react";
import { Arrow, Spark } from "@/components/icons";
import { INITIAL_TURNS, ROTATABLE_TILES, TILE_PORTS, traceStack } from "@/lib/stack-game";

const PACKET_PATH = "M0 50H140Q160 50 160 70V140Q160 160 180 160H250Q270 160 270 180V250Q270 270 290 270H320";
const PORT_NAMES = ["top", "right", "bottom", "left"];

export function StackGame() {
  const [turns, setTurns] = useState<number[]>([...INITIAL_TURNS]);
  const [moves, setMoves] = useState(0);
  const [started, setStarted] = useState(false);
  const [hint, setHint] = useState<number | null>(null);
  const firstTile = useRef<HTMLButtonElement>(null);
  const { connected, solved } = traceStack(turns);

  function rotate(index: number) {
    if (solved) return;
    setStarted(true);
    setHint(null);
    setMoves((value) => value + 1);
    setTurns((current) => current.map((turn, i) => i === index ? turn + 1 : turn));
  }

  function reset() {
    setTurns([...INITIAL_TURNS]);
    setMoves(0);
    setHint(null);
    setStarted(true);
    firstTile.current?.focus();
  }

  function showHint() {
    const next = ROTATABLE_TILES.find((tile) => turns[tile] % 4 !== (tile === 1 ? 2 : 0));
    setHint(next ?? null);
  }

  return (
    <section className={`stack-game ${solved ? "is-solved" : ""}`} aria-labelledby="game-title">
      <div className="game-topline"><span className="eyebrow">01 / A small challenge</span><span className="game-badge">{solved ? "200 OK" : "~15 sec"}</span></div>
      <h2 id="game-title">{solved ? "Everything connects." : "Connect the stack."}</h2>
      <p id="game-instructions" className="game-instructions">{solved ? "That's the idea. Now see it in the real world." : "Turn the blue tiles. Give this request a way through."}</p>

      <div className="board-wrap">
        <div className="board-label"><span><i /> Browser</span><span>Database <i /></span></div>
        <div className="game-board" role="group" aria-label="Connection puzzle" aria-describedby="game-instructions">
          {TILE_PORTS.map((ports, index) => {
            const isRotatable = ROTATABLE_TILES.some((tile) => tile === index);
            const content = ports.length ? (
              <>
                <svg className="pipe" viewBox="0 0 100 100" aria-hidden="true" style={{ transform: `rotate(${turns[index] * 90}deg)` }}>
                  <path className="pipe-outline" d={index === 0 ? "M0 50H100" : "M50 0V30Q50 50 70 50H100"} />
                  <path className="pipe-core" d={index === 0 ? "M0 50H100" : "M50 0V30Q50 50 70 50H100"} />
                </svg>
                {isRotatable && <span className="rotate-mark" aria-hidden="true">&#8635;</span>}
                {index === 0 && <span className="source-dot" aria-hidden="true" />}
                {index === 4 && <span className="api-label" aria-hidden="true">API</span>}
              </>
            ) : <span className="tile-decoration" aria-hidden="true">{index === 2 ? <Spark /> : index === 3 ? "{ }" : index === 6 ? "</>" : "[ ]"}</span>;
            const className = `game-tile ${isRotatable ? "turnable" : "fixed"} ${connected.includes(index) ? "connected" : ""} ${hint === index ? "hinted" : ""}`;
            return isRotatable ? (
              <button key={index} ref={index === 1 ? firstTile : undefined} type="button" className={className} onClick={() => rotate(index)} aria-disabled={solved} aria-label={`Rotate tile ${index + 1}, connects ${ports.map((port) => PORT_NAMES[(port + turns[index]) % 4]).join(" and ")}`}>
                {content}
              </button>
            ) : <div className={className} key={index}>{content}</div>;
          })}
          {solved && <svg className="packet-overlay" viewBox="0 0 320 320" aria-hidden="true"><path className="success-route" d={PACKET_PATH} /><circle className="traveling-packet" r="7" fill="currentColor"><animateMotion dur="2.2s" repeatCount="3" path={PACKET_PATH} fill="freeze" /></circle></svg>}
        </div>
        <p className="game-feedback" role="status" aria-live="polite">{solved ? `Request delivered in ${moves} moves. Nicely connected.` : hint !== null ? `Turn tile ${hint + 1} until the pipes line up.` : started ? `${moves} ${moves === 1 ? "move" : "moves"}. Connect the browser through the API to the database.` : "A little play before the serious work."}</p>
      </div>

      <div className="game-actions">
        <button className="button button-primary button-small" type="button" onClick={solved || started ? reset : () => { setStarted(true); firstTile.current?.focus(); }}>{solved ? "Play again" : started ? "Start over" : "Try the puzzle"}<Arrow diagonal /></button>
        {started && !solved ? <button className="text-link" type="button" onClick={showHint}>A little hint</button> : <a className="text-link" href="#work">{solved ? "See the real projects" : "or just scroll"}<span aria-hidden="true">&#8595;</span></a>}
      </div>
    </section>
  );
}
