import * as React from 'react'

// @ts-ignore: no types for package
import Chessground from 'react-chessground'
import "react-chessground/dist/styles/chessground.css"

import { ChessboardCmp } from './types'

const Chessboard: ChessboardCmp = (props) => {
    // TODO: Calculate appropriate width and height for chessboard
    return <Chessground width="650px" height="650px" />
}

export default Chessboard