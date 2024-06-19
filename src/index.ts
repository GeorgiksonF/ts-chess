enum FigureColors {
    WHITE = 'white',
    BLACK = 'black' 
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

enum BoardCoordsY {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
    H = 'H'
}

interface ChessFigure {
    type: string
    color: string
    position: string
}

const figures: Array<ChessFigure> = [
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: 'A2'},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: 'B2'},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: 'C2'},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: 'D2'},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: 'E2'},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: 'F2'},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: 'G2'},
    {type: FigureType.PAWN, color: FigureColors.WHITE, position: 'H2'},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: 'A7'},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: 'B7'},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: 'C7'},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: 'D7'},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: 'E7'},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: 'F7'},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: 'G7'},
    {type: FigureType.PAWN, color: FigureColors.BLACK, position: 'H7'},
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
class ChessBoardActions {

}

class Cell {
    private readonly width: number = 40
    private readonly heingth: number = 40
    private hasFigure: boolean = false
    private position: string
    private cell: HTMLElement
    private color: string
    
    constructor(rowIndex: number, columnIndex: number) {
        this.cell = document.createElement('div')
        this.color = (rowIndex + columnIndex) % 2 === 0 ? FigureColors.BLACK : FigureColors.WHITE
        this.position = `${Object.values(BoardCoordsY)[columnIndex]}${columnIndex}`
        this.cell.classList.add('cell', this.position, this.color)
    }

    getCell() {
        return this.cell
    }
}

class ChessBoard {
    private readonly numberCellsWide: number = 8
    private readonly numberCellsHeight: number = 8
    private boardElement: HTMLElement
    private readonly cellFactories: Map<FigureType, ChessFigureFactory>;

    constructor() {
        this.boardElement = document.createElement('div')
        this.boardElement.classList.add('board')
        this.createBoard()
    }

    createBoard(): void {
        for (let rowIndex = 0; rowIndex < this.numberCellsWide; rowIndex++) {
            const row = document.createElement('div')
            row.classList.add('row')
            this.createRowCells(row, rowIndex)
            this.boardElement.append(row)
        }
    }

    private createRowCells(row: HTMLElement, rowIndex: number): void {
        for (let columnIndex = 0; columnIndex < this.numberCellsHeight; columnIndex++) {
            const cell: HTMLElement = new Cell(rowIndex, columnIndex).getCell()
            row.appendChild(cell)
        }
    }

    getBoard() {
        return this.boardElement
    }

    placeFigures(figures: ChessFigure[]): void {
        const cells = this.boardElement.querySelectorAll('.cell')
        const factoryMap: { [key: string]: ChessFigureFactory }  = {
            [FigureType.PAWN]: new PawnFactory()
        };

        figures.forEach(figureData => {
            const factory = factoryMap[figureData.type]
            
            if (factory) {
                const fugure = factory.createPiece(figureData);
                const cell: HTMLElement = document.querySelector(figureData.position)
                const figure: HTMLElement = document.createElement('div')
                figure.classList.add(fugure.type.toLowerCase())
                cell.append(figure)
            } else {
                console.error(`Неизвестный тип фигуры: ${figureData.type}`);
            }
        })

    }
}

class Game {
    private boardElement: HTMLElement

    constructor() {
        const boardItem = new ChessBoard()
        this.boardElement = boardItem.getBoard()
    }

    getBoard(): HTMLElement {
        return this.boardElement
    }
}

class App {
    private game: Game
    
    constructor(private root: string) {
        this.game = new Game()
    }

    mount() {
        const root = document.querySelector(this.root)
        root.append(this.game.getBoard())
    }
}



function init(): void {
    const app = new App('#app')
    app.mount()
}

init()