import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <div id="question1">
      <span>
        1. Is React a JavaScript library for building user interfaces?
      </span>
    </div>

    <div className="options-main-container">
      <form className="options">
        <input type="radio" value="Yes" name="answer" />
        <label>Yes</label>
        <br />
        <input type="radio" value="No" name="answer" />
        <label>No</label>
      </form>
      <div id="question2">
        <span>2. Is JSX a syntax extension for JavaScript?</span>
      </div>
      <form className="options">
        <input type="radio" value="Yes" name="answer" />
        <label>Yes</label>
        <br />
        <input type="radio" value="No" name="answer" />
        <label>No</label>
      </form>
    </div>
  </div>,
  document.getElementById('root')
);
