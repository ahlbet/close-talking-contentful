import React, { Component } from 'react';
import Link from 'gatsby-link';

import opening2 from '../../assets/images/fourfoureight/opening2.mp4';

import Highlight from 'react-highlight.js';

class Opening2 extends Component {
  toggleCode() {
    const code = document.getElementById('opening2-code');
    if (code.style.display === 'none') {
      code.style.display = 'block';
    } else {
      code.style.display = 'none';
    }
  }

  render() {
    return (
      <div>
        <div className="section-448 opening2-448">
          <h3>Preshow Projections: Idea Two</h3>
          <p>
            The second sketch is based off of the work of Daniel Shiffman. The
            sketch attempts to evoke the interior of a maze-like brain. You see
            the maze building itself wall by wall. It is randomly generated as
            each wall is either a forward slash or a backwards slash, chosen at
            the time of creation.
          </p>

          <p>
            The maze itself is broken and impossible to complete, much like the
            interior of the narrator's brain. The repetition is endless and
            tormenting as each maze refuses to work.
          </p>

          <p>
            Once the maze is complete, it disappears, leaving you with the words
            "please open the curtains".
          </p>

          <p>
            This sketch ended up being included in the preshow. It played, on
            repeat, for about 2/3 of the preshow.
          </p>

          <video className="video-448" controls="controls" src={opening2} />

          <button
            id="opening2-toggle"
            className="code-toggle"
            onClick={this.toggleCode}
          >
            Show/Hide Code
          </button>

          <div id="opening2-code" style={{ display: 'none' }}>
            <Highlight language={'javascript'}>
              {`
                const fontSz = 36;
                let x = 0;
                let y = 10;
                const xSpacing = 20;
                const ySpacing = 10;
                const prob = 0.5;
                let timer = 0;

                function setup() {
                  createCanvas(600, 600);
                  textSize(fontSz);
                  textAlign(CENTER, CENTER);
                }

                function draw() {
                  let rand = random(1);

                  if (rand < prob) {
                    strokeWeight(1);
                    line(x, y, x + xSpacing, y + ySpacing);
                  } else {
                    strokeWeight(1);
                    line(x + xSpacing, y, x, y + ySpacing);
                  }

                  x += xSpacing;

                  if (x > width) {
                    x = 0;
                    y += ySpacing;
                  }

                  if (y > height) {
                    clear();
                    text('please open the curtains', width / 2, height / 2);
                    timer++;
                  }

                  if (timer > 100) {
                    clear();
                    x = 0;
                    y = 10;
                    timer = 0;
                  }
                }
              `}
            </Highlight>
          </div>
        </div>
      </div>
    );
  }
}

export default Opening2;
