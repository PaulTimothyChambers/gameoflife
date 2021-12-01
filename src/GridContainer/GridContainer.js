import React, { Component } from 'react';
import GridSquare from '../GridSquare/GridSquare';
import GridForm from '../GridForm/GridForm';

class GridContainer extends Component {
  state = {
    gameBoardInitialize: [],
    gameBoard: [],
    activeSquares: [],
    neighbors: [
      -1,
      1,
      -99,
      99,
      -100,
      100,
      -101,
      101,
      -199,
      199,
      -6400,
      6400,
      -6401,
      6401,
      -6499,
      6499
    ]
  }

  componentDidMount() {
    const emptyBoard = Array(6500).fill(null);
    this.loadGameInitializeBoard(emptyBoard)
  }

  // isActive = useRef(false)
  //
  // useEffect(() => {
  //   setIsActive(prevActive => prevActive = !isActive)
  // })

  findActives = (event) => {
    console.log(this.state.activeSquares)
    // const actives = gameBoard.filter(square => {
    //   console.log(square)
    // })
    // console.log(actives)
    // findNeighbors(actives)
  }

  findNeighbors = (event) => {
    event.preventDefault()
    this.state.activeSquares.forEach(active => {
      // console.log(active)
      this.assignNeighbors(active.props.id)
    })
  }

  assignNeighbors = (square) => {
    let surroundingSquares;
    if (square > 100 && square < 6401) {
      surroundingSquares = [
        square-1,
        square+1,
        square-99,
        square+99,
        square-100,
        square+100,
        square-101,
        square+101
      ]
    } else if (square > 1 && square < 101) {
      surroundingSquares = [
        square-1,
        square+1,
        square+99,
        square+100,
        square+101
      ]
    } else if (square > 6401 && square < 6500) {
      surroundingSquares = [
        square-1,
        square+1,
        square-99,
        square-100,
        square-101
      ]
    } else if (square === 1) {
      surroundingSquares = [
        square+1,
        square+100,
        square+101
      ]
    } else if (square === 100) {
      surroundingSquares = [
        square-1,
        square+99,
        square+100
      ]
    } else if (square === 6401) {
      surroundingSquares = [
        square+1,
        square-100,
        square-99
      ]
    } else if (square === 6500) {
      surroundingSquares = [
        square-1,
        square-99,
        square-100
      ]
    }
    console.log(surroundingSquares)
    let livingNeighbors = 0
    this.state.activeSquares.forEach(activeSquare => {
      surroundingSquares.forEach(neighbor => {
        if (neighbor === activeSquare.props.id) {
          livingNeighbors++
        }
      })
      this.evaluateNeighbors(livingNeighbors, activeSquare)
      console.log(activeSquare)
    })
    console.log(livingNeighbors)
  }

  evaluateNeighbors = (livingNeighbors, activeSquare) => {
    if (livingNeighbors < 1 || livingNeighbors > 3) {
      activeSquare.getALife()
      console.log(activeSquare.state.isActive)
    }
  }
  // prepGameBoard = (event) => {
  //   event.preventDefault()
  //   if (this.state.gameBoardInitialize.length) {
  //     this.setState({ gameBoard: this.state.gameBoardInitialize })
  //   }
  //   this.loadGameBoard()
  // }

  // setAttribute = (value, i) => {
  //   console.log(this.state.gameBoard)
  //   console.log(i)
  //   this.state.gameBoard[i].setAtrribute("value", false ? true : false)
  // }

  loadGameInitializeBoard = (board) => {
    const newBoard = board.map((ele, i) => {
      i++
      return (
        <>
          <GridSquare
            key={ Date.now() + i++ }
            id={ i }
            updateGameBoard={ this.updateGameBoard }
          />
        </>
      )
    })
    this.setState({ gameBoard: newBoard })
  }

  updateGameBoard = (square) => {
    if (square.ref) {
      this.state.activeSquares.push(square)
    } else {
      this.state.activeSquares.splice(this.state.activeSquares.indexOf(square), 1)
    }
    // const oldBoard = this.state.gameBoard
    // oldBoard.splice(oldBoard.indexOf(square), 1, square)
    // console.log(oldBoard)
    // this.setState({ gameBoard: oldBoard })
    console.log(this.state.activeSquares)
  }
  // let value = this.state.gameBoard[id - 1].props.children.props.value
  // !value ? value = true : value = false
  //
  // loadGameBoard() {
  //   const newBoard = this.state.gameBoard.map((ele, i) => {
  //     i++
  //     return (
  //       <>
  //         <GridSquare
  //           key={ Date.now() + i }
  //           id={ i }
  //           gameBoard={ this.state.gameBoard }
  //         />
  //       </>
  //     )
  //   })
  // }

  render() {
    return (
      <>
        {
          this.state.gameBoard.length &&
            <section className="game-board">
              <button
                className="game-board__start-button"
                onClick={ event => this.findNeighbors(event) }
              >
                Begin Game
              </button>
              { this.state.gameBoard }
            </section>
        }
      </>
    )
  }
}
// {
  //   !this.state.gameBoard.length &&
  //     <>
  //       {
    //         this.state.gameBoardInitialize.length &&
    //           <>
    //             <GridForm
    //               gameBoard={ this.state.gameBoardInitialize }
    //               neighbors={ this.state.neighbors }
    //             />
    //             <section className="game-board">
    //               { this.state.gameBoardInitialize }
    //             </section>
    //           </>
    //       }
    //     </>
    // }

export default GridContainer;
