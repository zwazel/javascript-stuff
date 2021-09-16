let gridContainer = document.getElementById("gridContainer");
let rowInput = document.getElementById("inputRows");
let colInput = document.getElementById("inputCols");

createGrid();
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