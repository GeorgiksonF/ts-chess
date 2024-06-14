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
var Figure = (function () {
    function Figure(type, color, position) {
        this.type = type;
        this.color = color;
        this.position = position;
    }
    return Figure;
}());
var Pawn = (function (_super) {
    __extends(Pawn, _super);
    function Pawn(type, color, position) {
        return _super.call(this, type, color, position) || this;
    }
    return Pawn;
}(Figure));
var Knight = (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = FigureType.KNIGHT;
        return _this;
    }
    return Knight;
}(Figure));
var Bishop = (function (_super) {
    __extends(Bishop, _super);
    function Bishop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = FigureType.BISHOP;
        return _this;
    }
    return Bishop;
}(Figure));
var Queen = (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = FigureType.QUEEN;
        return _this;
    }
    return Queen;
}(Figure));
var King = (function (_super) {
    __extends(King, _super);
    function King() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = FigureType.KING;
        return _this;
    }
    return King;
}(Figure));
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
}
init();
//# sourceMappingURL=index.js.map