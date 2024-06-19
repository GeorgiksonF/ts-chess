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

class Cell {
    private width: number = 40
    private heingth: number = 40
    private hasFigure: boolean = false
    private xCoord?: number
    private yCoord?: number
}

class ChessBoardActions {

}
class ChessBoard {
    private numberCellsWide: number = 8
    private numberCellsHeight: number = 8
    private boardElement: HTMLElement

    constructor() {
        this.createBoard()
    }

    createBoard(): HTMLElement | any {
        
        this.boardElement = document.createElement('div')
        this.boardElement.classList.add('board')
        
        for (let rowIndex = 0; rowIndex < this.numberCellsWide; rowIndex++) {
            const row: HTMLElement | any = document.createElement('div')
            row.classList.add('row')


    
            for (let ceilIndex = 0; ceilIndex < this.numberCellsHeight; ceilIndex++) {
                const ceilItem: HTMLElement | any = document.createElement('div')
                const colorClass: string = (rowIndex + ceilIndex) % 2 === 0 ? 'black' : 'white'
                const ceilYCoord = Object.values(BoardCoordsY)[ceilIndex]
                const ceilClass = `${ceilYCoord}${rowIndex + 1}`
                ceilItem.classList.add('ceil', ceilClass, colorClass)
    
                row.append(ceilItem)
            }

            this.boardElement.append(row)
        }

        return this.boardElement
    }

    getBoard() {
        return this.boardElement
    }

    placeFigures(figures: ChessFigure[]): void {
        const factoryMap: { [key: string]: ChessFigureFactory }  = {
            [FigureType.PAWN]: new PawnFactory()
        };

        figures.forEach(figureData => {
            const factory = factoryMap[figureData.type]
            
            if (factory) {
                const fugure = factory.createPiece(figureData);
                const ceil: HTMLElement | any = document.querySelector(figureData.position)
                const figure: HTMLElement | any = document.createElement('div')
                figure.classList.add(fugure.type.toLowerCase())
                ceil.append(figure)
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