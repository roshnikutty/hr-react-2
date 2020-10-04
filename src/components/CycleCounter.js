import React from 'react';

class CycleCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonText: 0
    };
  }

  handleClick = (e) => {
    const { cycle } = this.props;
    e.preventDefault();
    if (this.state.buttonText < cycle - 1) {
      this.setState({ buttonText: this.state.buttonText + 1 });
    } else {
      this.setState({ buttonText: 0 });
    }
  } 

  render() {
    return (
      <button
        data-testid="cycle-counter"
        style={{ fontSize: '1rem', width: 120, height: 30, }}
        onClick={e => this.handleClick(e)}
    >{this.state.buttonText}</button>
    );
  }
}

export default CycleCounter;
