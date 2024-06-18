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
    FigureColors["WHITE"] = "WHITE";
    FigureColors["BLACK"] = "BLACK";
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
var figures = [
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: { x: 0, y: 1 } },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: { x: 1, y: 1 } },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: { x: 2, y: 1 } },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: { x: 3, y: 1 } },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: { x: 4, y: 1 } },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: { x: 5, y: 1 } },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: { x: 6, y: 1 } },
    { type: FigureType.PAWN, color: FigureColors.WHITE, position: { x: 7, y: 1 } },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: { x: 0, y: 6 } },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: { x: 1, y: 6 } },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: { x: 2, y: 6 } },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: { x: 3, y: 6 } },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: { x: 4, y: 6 } },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: { x: 5, y: 6 } },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: { x: 6, y: 6 } },
    { type: FigureType.PAWN, color: FigureColors.BLACK, position: { x: 7, y: 6 } },
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
var ChessBoardAcrions = (function () {
    function ChessBoardAcrions() {
    }
    return ChessBoardAcrions;
}());
var ChessBoard = (function () {
    function ChessBoard() {
        this.numberCellsWide = 8;
        this.numberCellsHeight = 8;
    }
    ChessBoard.prototype.drowBoard = function () {
        var field = document.querySelector('#app');
        for (var i = 0; i < this.numberCellsWide; i++) {
            var row = document.createElement('div');
            row.classList.add('row');
            for (var j = 0; j < this.numberCellsHeight; j++) {
                var ceil = document.createElement('div');
                var colorClass = (i + j) % 2 === 0 ? 'black' : 'white';
                ceil.classList.add('ceil', colorClass);
                row.append(ceil);
            }
            field.append(row);
        }
    };
    ChessBoard.prototype.placeFigures = function (figures) {
        var _a;
        var factoryMap = (_a = {},
            _a[FigureType.PAWN] = new PawnFactory(),
            _a);
        figures.forEach(function (figureData) {
            var factory = factoryMap[figureData.type];
            if (factory) {
                var fugure = factory.createPiece(figureData);
                var row = document.querySelectorAll('.row')[fugure.position.y];
                var ceil = row.childNodes[fugure.position.x];
                var figure = document.createElement('div');
                figure.classList.add(fugure.type.toLowerCase());
                ceil.append(figure);
            }
            else {
                console.error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0444\u0438\u0433\u0443\u0440\u044B: ".concat(figureData.type));
            }
        });
    };
    return ChessBoard;
}());
var Cell = (function () {
    function Cell() {
        this.width = 40;
        this.heingth = 40;
        this.hasFigure = false;
    }
    return Cell;
}());
function init() {
    var board = new ChessBoard();
    board.drowBoard();
    board.placeFigures(figures);
}
init();
//# sourceMappingURL=index.js.map