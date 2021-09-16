let gridContainer = document.getElementById("gridContainer");
let rowInput = document.getElementById("inputRows");
let colInput = document.getElementById("inputCols");
let blockTypeContainer = document.getElementById("blockTypeContainer");

window.onload = function () {
    initBlockTypes();
    createGrid();
};

class blockType {
    _myColor;
    _square;
    _description;

    constructor(myColor = '000000', square = true, description = 'undefined') {
        this._myColor = myColor;
        this._square = square;
        this._description = description;
    }

    get myColor() {
        return this._myColor;
    }

    set myColor(value) {
        this._myColor = value;
    }

    get square() {
        return this._square;
    }

    set square(value) {
        this._square = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    toHTML() {
        let div = document.createElement('div');
        div.classList.add('blockType', this.description);
        let spanDesc = document.createElement('span');
        spanDesc.classList.add('description');
        spanDesc.innerText = this.description;
        div.append(spanDesc);
        div.setAttribute('style', `background-color: #${this.myColor}`);
        return div;
    }
}

function initBlockTypes() {
    let wall = new blockType();
    let start = new blockType('71eb34', false, 'start');

    blockTypeContainer.append(wall.toHTML(), start.toHTML());
}

function createGrid() {
    while (gridContainer.firstChild) {
        gridContainer.lastChild.remove();
    }

    for (let i = 0; i < rowInput.value; i++) {
        let unorderedList = document.createElement('ul');
        unorderedList.classList.add(`col${i}`);
        for (let j = 0; j < colInput.value; j++) {
            let listItem = document.createElement('li');
            listItem.classList.add('dot');
            unorderedList.append(listItem);
        }
        gridContainer.append(unorderedList);
    }

    $('.dot').mouseenter(function () {
        $(this).css({background: '#20B2AA'});
    }).click(function () {
        $(this).css({background: '#66CDAA'});
    });
}