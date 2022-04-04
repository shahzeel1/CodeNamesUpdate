import * as React from 'react';

export class InstructionsButton extends React.Component {
    public handleClick(e) {
      e.preventDefault();
      this.props.onClick(e);
    }
  
    public render() {
      return (
        <button
          onClick={(e) => this.handleClick(e)}
          className="gear"
          aria-label="settings"
        >
          <svg
            width="30"
            height="50"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"
              fill="#EEE"
              stroke="#BBB"
              strokeWidth="0.5"
            />
          </svg>
        </button>
      );
    }
  }
  
  export class InstructionsPanel extends React.Component {
    public render() {
      return (
        <div className="settings">
          <div
            onClick={(e) => this.props.toggleView(e)}
            className="close-settings"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L30 30M30 0L0 30"
                transform="translate(1 1)"
                stroke="black"
                strokeWidth="2"
                role="button"
                aria-label="close settings"
              />
            </svg>
          </div>
          <div className="settings-content">
            <h2>INSTRUCTIONS:</h2>
            <p>
              {' '}
              Codenames is played by two teams. The gameboard consists of a grid
              of 25 words. 8 or 9 words are assigned to the Red team and another 8
              or 9 words are assigned to the Blue Team. Each team has one player
              that is the “Spymaster”. Only the Spymaster can see which words are
              assigned to their respective team. The Spymasters take turns giving
              clues to their teammates and the clue should try to guide the
              teammates to guess their team’s words. Whichever team guesses all
              their words first will win the game.{' '}
            </p>
            &nbsp;
            <h3>Roles</h3>
            <p>
              {' '}
              All players are divided into two teams, blue and red. One player
              from each team is the Spymaster. The rest are players who guess.{' '}
            </p>
            &nbsp;
            <h3>Giving Clues</h3>
            <p>
              When it's your team's turn, as spymaster you can give a clue. Choose
              a clue word that connects one or more of your team's words on the
              gameboard. Then enter the clue word and the number of words it
              relates to.{' '}
            </p>
          </div>
        </div>
      );
    }
  }
  