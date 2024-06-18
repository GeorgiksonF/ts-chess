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

interface ChessFigure {
    type: string
    color: string
    position: { x: number, y: number }
}

const figures: Array<ChessFigure> = [
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: {x: 0, y: 1}},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: {x: 1, y: 1}},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: {x: 2, y: 1}},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: {x: 3, y: 1}},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: {x: 4, y: 1}},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: {x: 5, y: 1}},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: {x: 6, y: 1}},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: {x: 7, y: 1}},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: {x: 0, y: 6}},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: {x: 1, y: 6}},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: {x: 2, y: 6}},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: {x: 3, y: 6}},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: {x: 4, y: 6}},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: {x: 5, y: 6}},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: {x: 6, y: 6}},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: {x: 7, y: 6}},
]


abstract class ChessFigureFactory {
    abstract createPiece(figure: ChessFigure): ChessFigure;
}

class PawnFactory extends ChessFigureFactory {
    createPiece(figure: ChessFigure): ChessFigure {
      return new Pawn(figure); // Создаем объект Pawn
    }
  }

class Pawn {
    type
    color
    position

    constructor(figure: ChessFigure) {
        this.type = figure.type
        this.color = figure.color
        this.position = figure.position
    }
}

class ChessBoardAcrions {

}
class ChessBoard {
    private numberCellsWide: number = 8
    private numberCellsHeight: number = 8

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

    placeFigures(figures: ChessFigure[]): void {
        const factoryMap: { [key: string]: ChessFigureFactory }  = {
            [FigureType.PAWN]: new PawnFactory()
        };

        figures.forEach(figureData => {
            const factory = factoryMap[figureData.type]
            
            if (factory) {
                const fugure = factory.createPiece(figureData);
                const row: HTMLElement | any = document.querySelectorAll('.row')[fugure.position.y]
                const ceil: HTMLElement | any = row.childNodes[fugure.position.x]
                const figure: HTMLElement | any = document.createElement('div')
                figure.classList.add(fugure.type.toLowerCase())
                ceil.append(figure)
            } else {
                console.error(`Неизвестный тип фигуры: ${figureData.type}`);
            }
        })

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
    board.placeFigures(figures)
}

init()