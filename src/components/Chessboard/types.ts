import React from 'react'

type Color = 'white' | 'black'

export interface ChessboardCmp extends React.FC<ChessboardCmpProps> {}

export interface ChessboardCmpProps {
    onMove?: (from: string, to: string) => void;
    fen?: string,
    orientation?: Color,
    turnColor?: Color,
    check?: Color | boolean, // true for current color, false (boolean) for unset
}