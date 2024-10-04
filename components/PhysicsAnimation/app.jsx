import React, { useRef, useEffect } from "react";
import Matter from "matter-js";
import p5 from "p5";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sketch = (p) => {
        let engine;
        let world;
        let circles = [];
        // let mouse;
        // let mouseConstraint;
        let selected = [];
        // let mouseDown = false;

        const wordsToDisplay = [
          "WebsiteDesign",
          "SEO Optimization",
          "ShortVideo",
          "Marketing",
          "Photography",
          "Behance",
          "Email",
          "Discord",
          "YouTube",
          "WebsiteDesign",
          "SEO Optimization",
          "ShortVideo",
          "Marketing",
          "Photography",
          "Behance",
          "Email",
          "Discord",
          "YouTube",
          "WebsiteDesign",
          "SEO Optimization",
          "ShortVideo",
          "Marketing",
          "Photography",
          "Behance",
          "Email",
          "Discord",
          "YouTube",
        ];

        const colors = [
          "#F2CA61",
          "#F26161",
          "#DB7AFD",
          "#FFD700",
          "#FF4500",
          "#61F29B",
          "#10b981",
          "#FFFFFF",
          "#61D8F2",
          "#F2CA61",
          "#F26161",
          "#DB7AFD",
          "#FFD700",
          "#FF4500",
          "#61F29B",
          "#10b981",
          "#FFFFFF",
          "#61D8F2",
        ];

        const resizeCanvasAndWorld = () => {
          p.resizeCanvas(window.innerWidth, window.innerHeight * 0.4);

          const ground = Matter.Composite.allBodies(world).find(
            (body) => body.label === "ground"
          );
          const wallLeft = Matter.Composite.allBodies(world).find(
            (body) => body.label === "wallLeft"
          );
          const wallRight = Matter.Composite.allBodies(world).find(
            (body) => body.label === "wallRight"
          );

          if (ground) {
            Matter.Body.setPosition(ground, {
              x: p.width / 2,
              y: p.height - 10,
            });
            Matter.Body.setVertices(
              ground,
              Matter.Bodies.rectangle(p.width / 2, p.height - 10, p.width, 20)
                .vertices
            );
          }

          if (wallLeft) {
            Matter.Body.setPosition(wallLeft, { x: -5, y: p.height / 2 });
            Matter.Body.setVertices(
              wallLeft,
              Matter.Bodies.rectangle(-5, p.height / 2, 10, p.height).vertices
            );
          }

          if (wallRight) {
            Matter.Body.setPosition(wallRight, {
              x: p.width + 5,
              y: p.height / 2,
            });
            Matter.Body.setVertices(
              wallRight,
              Matter.Bodies.rectangle(p.width + 5, p.height / 2, 10, p.height)
                .vertices
            );
          }

          createCircles();
        };

        const createCircles = () => {
          circles.forEach(({ body }) => Matter.World.remove(world, body));
          circles = [];

          wordsToDisplay.forEach((text, index) => {
            const circleWidth = text.length * 20 + 10;
            const circleHeight = 20;
            const x = p.random(circleWidth / 2, p.width - circleWidth / 2);
            const y = p.random(circleHeight / 2, p.height - circleHeight / 2);
            const color = colors[index % colors.length];

            const circle = Matter.Bodies.rectangle(
              x,
              y,
              circleWidth,
              circleHeight,
              {
                label: "circle",
                render: {
                  fillStyle: color,
                  strokeStyle: "black",
                  lineWidth: 1.5,
                },
              }
            );

            circles.push({ body: circle, text });
            Matter.World.add(world, circle);
          });
        };

        p.setup = () => {
          p.createCanvas(window.innerWidth, window.innerHeight * 0.2).parent(
            canvasRef.current
          );

          engine = Matter.Engine.create();
          world = engine.world;

          const ground = Matter.Bodies.rectangle(
            p.width / 2,
            p.height - 10,
            p.width,
            20,
            { isStatic: true, label: "ground" }
          );
          const wallLeft = Matter.Bodies.rectangle(
            -5,
            p.height / 2,
            10,
            p.height,
            { isStatic: true, label: "wallLeft" }
          );
          const wallRight = Matter.Bodies.rectangle(
            p.width + 5,
            p.height / 2,
            10,
            p.height,
            { isStatic: true, label: "wallRight" }
          );
          Matter.World.add(world, [ground, wallLeft, wallRight]);

          createCircles();

          // mouse = Matter.Mouse.create(p.canvas.elt);
          // mouseConstraint = Matter.MouseConstraint.create(engine, {
          //   mouse: mouse,
          //   constraint: {
          //     stiffness: 0.2,
          //     render: {
          //       visible: false,
          //     },
          //   },
          // });
          // Matter.World.add(world, mouseConstraint);

          // Matter.Events.on(mouseConstraint, "mousedown", () => {
          //   mouseDown = true;
          //   updateSelection();
          // });

          // Matter.Events.on(mouseConstraint, "mouseup", () => {
          //   mouseDown = false;
          //   selected.forEach((body) => {
          //     body.render.fillStyle = "#00ff00";
          //   });
          //   selected.length = 0;
          // });

          // Matter.Events.on(mouseConstraint, "mousemove", () => {
          //   if (mouseDown) {
          //     updateSelection();
          //   }
          // });

          const updateSelection = () => {
            const position = mouse.position;
            const justSelected = Matter.Query.point(
              circles.map((c) => c.body),
              position
            );
            selected.push(...justSelected);
            justSelected.forEach((body) => {
              body.render.fillStyle = "yellow";
            });
          };

          resizeCanvasAndWorld();
        };

        p.draw = () => {
          p.background("#ffffff");
          Matter.Engine.update(engine);

          circles.forEach(({ body, text }) => {
            const pos = body.position;
            const angle = body.angle;

            p.push();
            p.translate(pos.x, pos.y);
            p.rotate(angle);
            p.rectMode(p.CENTER);
            p.fill(body.render.fillStyle);
            p.stroke(body.render.strokeStyle);
            p.strokeWeight(body.render.lineWidth);
            p.rect(0, 0, text.length * 14 + 10, 40, 40);
            p.noStroke();
            p.fill("#0f0f0f");
            p.textSize(14);
            p.textAlign(p.CENTER, p.CENTER);
            p.text(text.toUpperCase(), 0, 0);
            p.pop();
          });
        };

        p.windowResized = () => {
          resizeCanvasAndWorld();
        };

        p.mouseMoved = () => {
          for (let { body } of circles) {
            if (
              p.dist(p.mouseX, p.mouseY, body.position.x, body.position.y) < 50
            ) {
              Matter.Body.applyForce(
                body,
                { x: body.position.x, y: body.position.y },
                { x: p.random(-0.2, 0.2), y: p.random(-0.2, 0.2) }
              );
            }
          }
        };
      };

      new p5(sketch);

      return () => {
        if (canvasRef.current) {
          canvasRef.current.innerHTML = "";
        }
      };
    }
  }, []);

  return (
    <div
      ref={canvasRef}
      className="bg-black"
      style={{ overflow: "auto", height: "40vh" }}
    ></div>
  );
};

export default App;
