import React from 'react';

export default class Header extends React.Component {
  render() {
    return(
      <nav className="nav bg-dark">
        <a className="nav-link active" href="/">Home</a>
        <a className="nav-link active" href="/">Russia</a>
      </nav>
    );
  }
}