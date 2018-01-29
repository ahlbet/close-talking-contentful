import React, { Component } from 'react';
import Link from 'gatsby-link';

import abstractionMovie from '../../assets/images/fourfoureight/abstraction.mp4';

import Highlight from 'react-highlight.js';

class Abstraction extends Component {
  toggleCode() {
    const code = document.getElementById('abstraction-code');
    if (code.style.display === 'none') {
      code.style.display = 'block';
    } else {
      code.style.display = 'none';
    }
  }

  render() {
    return (
      <div>
        <div className="section-448 abstraction-448">
          <h3>Abstraction Projection</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <video
            className="video-448"
            controls="controls"
            src={abstractionMovie}
          />

          <button
            id="abstraction-toggle"
            className="code-toggle"
            onClick={this.toggleCode}
          >
            Show/Hide Code
          </button>

          <div id="abstraction-code" style={{ display: 'none' }}>
            <Highlight language={'javascript'}>
              {`
                var dancingWords = [];
                var speed = 0;
                var addSpeed = 100;

                var paragraph = [
                  'unpleasant',
                  'unacceptable',
                  'uninspiring',
                  'impenetrable',
                  'irrelevant',
                  'irreverent',
                  'irreligious',
                  'unrepentant',
                  'dislike',
                  'dislocate',
                  'disembody',
                  'deconstruct',
                  'irrational',
                  'irreducible',
                  'irredeemable',
                  'unrecognisable',
                  'derailed',
                  'deranged',
                  'deform',
                  'free form'
                ];

                var group1 = ['unpleasant', 'unacceptable', 'uninspiring', 'impenetrable'];
                var group2 = ['irrelevant', 'irreverent', 'irreligious', 'unrepentant'];
                var group3 = ['dislike', 'dislocate', 'disembody', 'deconstruct'];
                var group4 = ['irrational', 'irreducible', 'irredeemable', 'unrecognisable'];
                var group5 = ['derailed', 'deranged', 'deform', 'free form'];

                var letters1 = [];
                var letters2 = [];
                var letters3 = [];
                var letters4 = [];
                var letters5 = [];

                function separateLetters(arr, dest) {
                  for (var i = 0; i < arr.length; i++) {
                    var wordLetters = arr[i].split('');
                    dest.push(wordLetters);
                  }
                }

                function letterDance(arr, startX, startY) {
                  for (var i = 0; i < arr.length; i++) {
                    for (var j = 0; j < arr[i].length; j++) {
                      var span = createSpan(arr[i][j]);
                      var dancingLetter = new DanceSpan(span, startX + j * 20, startY + i * 30);
                      dancingWords.push(dancingLetter);
                    }
                  }
                }

                function DanceSpan(element, x, y) {
                  element.position(x, y);

                  this.brownian = function() {
                    x += random(-speed, speed);
                    y += random(-speed, speed);
                    element.position(x, y);
                  };
                }

                function setup() {
                  separateLetters(group1, letters1);
                  separateLetters(group2, letters2);
                  separateLetters(group3, letters3);
                  separateLetters(group4, letters4);
                  separateLetters(group5, letters5);
                  letterDance(letters1, 10, 0);
                  letterDance(letters2, 300, 0);
                  letterDance(letters3, 600, 0);
                  letterDance(letters4, 10, 200);
                  letterDance(letters5, 600, 200);
                }

                function draw() {
                  for (var i = 0; i < dancingWords.length; i++) {
                    dancingWords[i].brownian();
                  }

                  speed += 0.0001;
                }
              `}
            </Highlight>
          </div>
        </div>
      </div>
    );
  }
}

export default Abstraction;
