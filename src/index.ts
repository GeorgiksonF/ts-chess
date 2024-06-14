enum FigureColors {
    WHITE = 'WHITE',
    BLACK = 'BLACK' 
}

enum FigureType {
    PAWN = 'Pawn',
    KNIGHT = 'Knight',
    BISHOP = 'Bishop',
    QUEEN = 'Queen',
    KING = 'King'
}

enum FigureImage {
    PAWN = 'Pawn',
    KNIGHT = 'Knight',
    BISHOP = 'Bishop',
    QUEEN = 'Queen',
    KING = 'King'
}

interface FigureData {
    type: string
    color: string
    position: { x: number, y: number }

    // doMove: (x: number, y: number) => void
}

abstract class Figure implements FigureData {
    type: string
    color: string
    // color: FigureColors.WHITE | FigureColors.BLACK
    position: {x: number, y: number}
    
    constructor(type: string, color: string, position: {x: number, y: number}) {
        this.type = type
        this.color = color
        this.position = position
    }

    // doMove(x: number, y: number): void {}
}

class Pawn extends Figure {
    constructor(type: string, color: string, position: {x: number, y: number}) {
        super(type, color, position)
    }
}

class Knight extends Figure {
    name: string = FigureType.KNIGHT
}
class Bishop extends Figure {
    name: string = FigureType.BISHOP
}
class Queen extends Figure {
    name: string = FigureType.QUEEN
}

class King extends Figure {
    name: string = FigureType.KING
}

class ChessBoard {
    private name: string
    private numberCellsWide: number = 8
    private numberCellsHeight: number = 8
    
    // constructor(numberCellsWide?: number, numberCellsHeight?: number) {
    //     this.numberCellsWide = numberCellsWide
    //     this.numberCellsHeight = numberCellsHeight
    // }

    drowBoard(): void {
        const field: HTMLElement | any = document.querySelector('#app')
        
        for (let i = 0; i < this.numberCellsWide; i++) {
            const row: HTMLElement | any = document.createElement('div')
            row.classList.add('row')
    
            for (let j = 0; j < this.numberCellsHeight; j++) {
                const ceil: HTMLElement | any = document.createElement('div')
                const colorClass: string = (i + j) % 2 === 0 ? 'black' : 'white'
                ceil.classList.add('ceil', colorClass)
    
                row.append(ceil)
            }

            field.append(row)
        }
    }
    
}

class Cell {
    private width: number = 40
    private heingth: number = 40
    private hasFigure: boolean = false
    private xCoord?: number
    private yCoord?: number
}

function init(): void {
    const board = new ChessBoard()

    board.drowBoard()
}

init()