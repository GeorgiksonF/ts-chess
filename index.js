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
var Figure = /** @class */ (function () {
    function Figure(color, power) {
        this.color = color;
        this.power = power;
    }
    Figure.prototype.doMove = function (x, y) { };
    return Figure;
}());
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = FigureType.PAWN;
        return _this;
    }
    return Pawn;
}(Figure));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = FigureType.KNIGHT;
        return _this;
    }
    return Knight;
}(Figure));
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = FigureType.BISHOP;
        return _this;
    }
    return Bishop;
}(Figure));
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = FigureType.QUEEN;
        return _this;
    }
    return Queen;
}(Figure));
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = FigureType.KING;
        return _this;
    }
    return King;
}(Figure));
var ChessBoard = /** @class */ (function () {
    function ChessBoard() {
        this.numberCellsWide = 8;
        this.numberCellsHeight = 8;
    }
    // constructor(numberCellsWide?: number, numberCellsHeight?: number) {
    //     this.numberCellsWide = numberCellsWide
    //     this.numberCellsHeight = numberCellsHeight
    // }
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
    return ChessBoard;
}());
var Cell = /** @class */ (function () {
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
}
init();
