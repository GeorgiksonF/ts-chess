var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FigureColors;
(function (FigureColors) {
    FigureColors["WHITE"] = "white";
    FigureColors["BLACK"] = "black";
})(FigureColors || (FigureColors = {}));
var FigureType;
(function (FigureType) {
    FigureType["PAWN"] = "Pawn";
    FigureType["KNIGHT"] = "Knight";
    FigureType["BISHOP"] = "Bishop";
    FigureType["QUEEN"] = "Queen";
    FigureType["KING"] = "King";
})(FigureType || (FigureType = {}));
var FigureImage;
(function (FigureImage) {
    FigureImage["PAWN"] = "Pawn";
    FigureImage["KNIGHT"] = "Knight";
    FigureImage["BISHOP"] = "Bishop";
    FigureImage["QUEEN"] = "Queen";
    FigureImage["KING"] = "King";
})(FigureImage || (FigureImage = {}));
var BoardCoordsY;
(function (BoardCoordsY) {
    BoardCoordsY["A"] = "A";
    BoardCoordsY["B"] = "B";
    BoardCoordsY["C"] = "C";
    BoardCoordsY["D"] = "D";
    BoardCoordsY["E"] = "E";
    BoardCoordsY["F"] = "F";
    BoardCoordsY["G"] = "G";
    BoardCoordsY["H"] = "H";
})(BoardCoordsY || (BoardCoordsY = {}));
var figures = [
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: 'A2' },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: 'B2' },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: 'C2' },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: 'D2' },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: 'E2' },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: 'F2' },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: 'G2' },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: 'H2' },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: 'A7' },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: 'B7' },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: 'C7' },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: 'D7' },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: 'E7' },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: 'F7' },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: 'G7' },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: 'H7' },
];
var ChessFigureFactory = (function () {
    function ChessFigureFactory() {
    }
    return ChessFigureFactory;
}());
var PawnFactory = (function (_super) {
    __extends(PawnFactory, _super);
    function PawnFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PawnFactory.prototype.createPiece = function (figure) {
        return new Pawn(figure);
    };
    return PawnFactory;
}(ChessFigureFactory));
var Pawn = (function () {
    function Pawn(figure) {
        this.type = figure.type;
        this.color = figure.color;
        this.position = figure.position;
    }
    return Pawn;
}());
var ChessBoardActions = (function () {
    function ChessBoardActions() {
    }
    return ChessBoardActions;
}());
var Cell = (function () {
    function Cell(rowIndex, columnIndex) {
        this.width = 40;
        this.heingth = 40;
        this.hasFigure = false;
        this.cell = document.createElement('div');
        this.color = (rowIndex + columnIndex) % 2 === 0 ? FigureColors.BLACK : FigureColors.WHITE;
        this.position = "".concat(Object.values(BoardCoordsY)[columnIndex]).concat(columnIndex);
        this.cell.classList.add('cell', this.position, this.color);
    }
    Cell.prototype.getCell = function () {
        return this.cell;
    };
    return Cell;
}());
var ChessBoard = (function () {
    function ChessBoard() {
        this.numberCellsWide = 8;
        this.numberCellsHeight = 8;
        this.boardElement = document.createElement('div');
        this.boardElement.classList.add('board');
        this.createBoard();
    }
    ChessBoard.prototype.createBoard = function () {
        for (var rowIndex = 0; rowIndex < this.numberCellsWide; rowIndex++) {
            var row = document.createElement('div');
            row.classList.add('row');
            this.createRowCells(row, rowIndex);
            this.boardElement.append(row);
        }
    };
    ChessBoard.prototype.createRowCells = function (row, rowIndex) {
        for (var columnIndex = 0; columnIndex < this.numberCellsHeight; columnIndex++) {
            var cell = new Cell(rowIndex, columnIndex).getCell();
            row.appendChild(cell);
        }
    };
    ChessBoard.prototype.getBoard = function () {
        return this.boardElement;
    };
    ChessBoard.prototype.placeFigures = function (figures) {
        var _a;
        var cells = this.boardElement.querySelectorAll('.cell');
        var factoryMap = (_a = {},
            _a[FigureType.PAWN] = new PawnFactory(),
            _a);
        figures.forEach(function (figureData) {
            var factory = factoryMap[figureData.type];
            if (factory) {
                var fugure = factory.createPiece(figureData);
                var cell = document.querySelector(figureData.position);
                var figure = document.createElement('div');
                figure.classList.add(fugure.type.toLowerCase());
                cell.append(figure);
            }
            else {
                console.error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0444\u0438\u0433\u0443\u0440\u044B: ".concat(figureData.type));
            }
        });
    };
    return ChessBoard;
}());
var Game = (function () {
    function Game() {
        var boardItem = new ChessBoard();
        this.boardElement = boardItem.getBoard();
    }
    Game.prototype.getBoard = function () {
        return this.boardElement;
    };
    return Game;
}());
var App = (function () {
    function App(root) {
        this.root = root;
        this.game = new Game();
    }
    App.prototype.mount = function () {
        var root = document.querySelector(this.root);
        root.append(this.game.getBoard());
    };
    return App;
}());
function init() {
    var app = new App('#app');
    app.mount();
}
init();
//# sourceMappingURL=index.js.map