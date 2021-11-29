import React, { Component } from 'react';

class GridSquare extends Component {
  state = {
    isActive: false,
    squareValue: 0
  }
    // this.getALife = this.getALife.bind(this);


  // componentDidMount() {
  //   this.setState({ isActive: this.props.isActive })
  // }

  getALife = (event) => {
    // console.log(this)
    // event.preventDefault()
    // !event.target.value ? event.target.value = true : event.target.value = false
    if (event) {
      this.changeState(event)
    }

    if (!this.state.isActive) {
      this.state.isActive = !this.state.isActive
      this.state.squareValue++
      this.props.updateGameBoard(this)
    } else {
      this.state.isActive = !this.state.isActive
      this.state.squareValue--
      this.props.updateGameBoard(this)
    }
  }

    // this.state.isActive ? this.setState({ isActive: false }) : this.setState({ isActive: true })
    // console.log(this.props.gameBoard)
    // this.props.gameBoard[id].props.isActive = this.state.isActive
  // changeState = (event) => {
  //
  // }
  // }

  // setAttribute = (value) => {
  //   value ? true : false
  // }

  changeState = (event) => {
   event.target.classList.toggle("square-active")
  }

  render() {
    return (
      <div
        className="square"
        id={ `${this.props.id}` }
        onClick={ event => this.getALife(event) }
      >
        <p className="square__inner-two" onClick={ event => this.getALife(event) }></p>
        <p className="square__border" onClick={ event => this.getALife(event) }></p>
      </div>
    )
  }
}

export default GridSquare;

// value={ false }
// onChange={ (value) => this.setAttribute(value) }
