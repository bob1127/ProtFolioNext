import { useEffect } from "react";
import gsap from "gsap";

const ROWS = 6;
const COLS = 6;
const BLOCK_SIZE = 50;
const COOLDOWN = 1000;
let isFlipped = false;

function Flip() {
  useEffect(() => {
    const createTile = (row, col) => {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.innerHTML = `
        <div class="tile-face tile-front"></div>
        <div class="tile-face tile-back"></div>
      `;

      const bgPosition = `${col * 20}% ${row * 20}%`;
      tile.querySelector(".tile-front").style.backgroundPosition = bgPosition;
      tile.querySelector(".tile-back").style.backgroundPosition = bgPosition;

      return tile;
    };

    const createBoard = () => {
      const board = document.querySelector(".board");
      for (let i = 0; i < ROWS; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < COLS; j++) {
          row.appendChild(createTile(i, j));
        }
        board.appendChild(row);
      }
    };

    const initializeTileAnimations = () => {
      const tiles = document.querySelectorAll(".tile");
      tiles.forEach((tile, index) => {
        let lastEnterTime = 0;

        tile.addEventListener("mouseenter", () => {
          const currentTime = Date.now();
          if (currentTime - lastEnterTime > COOLDOWN) {
            lastEnterTime = currentTime;

            let tiltY;
            if (index % 6 === 0) {
              tiltY = -40;
            } else if (index % 6 === 5) {
              tiltY = 40;
            } else if (index % 6 === 1) {
              tiltY = -20;
            } else if (index % 6 === 4) {
              tiltY = 20;
            } else if (index % 6 === 2) {
              tiltY = -10;
            } else {
              tiltY = 10;
            }

            animateTile(tile, tiltY);
          }
        });
      });

      const flipButton = document.getElementById("flipButton");
      flipButton.addEventListener("click", () => flipAllTiles(tiles));
    };

    const animateTile = (tile, tiltY) => {
      gsap
        .timeline()
        .set(tile, { rotateX: isFlipped ? 180 : 0, rotateY: 0 })
        .to(tile, {
          rotateX: isFlipped ? 450 : 270,
          rotateY: tiltY,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(
          tile,
          {
            rotateX: isFlipped ? 540 : 360,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        );
    };

    const flipAllTiles = (tiles) => {
      isFlipped = !isFlipped;
      gsap.to(tiles, {
        rotateX: isFlipped ? 180 : 0,
        duration: 1,
        stagger: {
          amount: 0.5,
          from: "random",
        },
        ease: "power2.inOut",
      });
    };

    const createBlocks = () => {
      const blockContainer = document.getElementById("blocks");
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const numCols = Math.ceil(screenWidth / BLOCK_SIZE);
      const numRows = Math.ceil(screenHeight / BLOCK_SIZE);
      const numBlocks = numCols * numRows;

      for (let i = 0; i < numBlocks; i++) {
        const block = document.createElement("div");
        block.classList.add("block-content");
        block.dataset.index = i;
        blockContainer.appendChild(block);
      }

      return { numCols, numBlocks };
    };

    const highlightBlock = (event) => {
      const { numCols } = window.blockInfo;
      const blockContainer = document.getElementById("blocks");
      const rect = blockContainer.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const col = Math.floor(x / BLOCK_SIZE);
      const row = Math.floor(y / BLOCK_SIZE);
      const index = row * numCols + col;

      const block = blockContainer.children[index];
      if (block) {
        block.classList.add("highlight");
        setTimeout(() => {
          block.classList.remove("highlight");
        }, 250);
      }
    };

    const init = () => {
      createBoard();
      initializeTileAnimations();
      window.blockInfo = createBlocks();
      document.addEventListener("mousemove", highlightBlock);
    };

    init();

    return () => {
      document.removeEventListener("mousemove", highlightBlock);
    };
  }, []);

  return (
    <>
      <div className="flip-container ">
        <nav className="flip-nav ">
          <button
            id="flipButton"
            className="mt-[80px] text-[12px] sm:text-[18px]"
          >
            Flip
          </button>
        </nav>

        <section className="board"></section>

        <div className="blocks-container">
          <div id="blocks"></div>
        </div>
      </div>
    </>
  );
}

export default Flip;
