import React, { Component } from 'react';

const GridForm = ({ gameBoard, neighbors, readyUp, activeSquares }) => {

  const findActives = (event) => {
    console.log(activeSquares)
    // const actives = gameBoard.filter(square => {
    //   console.log(square)
    // })
    // console.log(actives)
    // findNeighbors(actives)
  }

  const findNeighbors = (event) => {
    event.preventDefault()
    activeSquares.forEach(active => {
      // console.log(active)
      assignNeighbors(active.props.id)
    })
  }

  const assignNeighbors = (square) => {
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
    activeSquares.forEach(activeSquare => {
      surroundingSquares.forEach(neighbor => {
        if (neighbor === activeSquare.props.id) {
          livingNeighbors++
        }
      })
      evaluateNeighbors(livingNeighbors, activeSquare)
      console.log(activeSquare)
    })
    console.log(livingNeighbors)
  }

  const evaluateNeighbors = (livingNeighbors, activeSquare) => {
    if (livingNeighbors < 1 || livingNeighbors > 3) {
      activeSquare.getALife()
      console.log(activeSquare.state.isActive)
    }

    // const determineValue = surroundingSquares.reduce((acc, square) => {
      //   acc += square.squareValue
      //   return acc
      // }, 0)
      // console.log(determineValue)
  }
  // if (count > 3 || count < 2) {

    // }
  // neighbors.forEach(neighbor => {
    //   if (gameBoard[active.id + neighbor].squareValue) {
      //     count += 1
      //   }
      // })

  return (
    <>
      {
        gameBoard.length &&
          <>
            <button
              className="game-board__start-button"
              onClick={ event => findNeighbors(event) }
            >Begin Game</button>
          </>
      }
    </>
  )
}

export default GridForm;

// this.checkNeighbors(actives)
// checkNeighbors = (actives) => {
  //   const neighbors = [];
  //   actives.forEach(active => {
    //     this.state.neighbors.forEach(neighbor => {
      //       neighbors.push(active.id + neighbor)
      //     })
      //   })
      //   console.log(neighbors)
      // }

      // checkNeighbors = (id) => {
        //   -1
        //   +1
        //   -99
        //   +99
        //   -100
        //   +100
        //   -101
        //   +101
        //   -199
        //   +199
        //   -6400
        //   +6400
        //   -6401
        //   +6401
        //   -6499
        //   +6499
        // }

        // return (
          //   <button
          //     className="game-board__start-button"
          //     // onClick={ componentDidMount }
          //   >Begin Game</button>
          // )
