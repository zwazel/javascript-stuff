let gridContainer = document.getElementById("gridContainer");
let rowInput = document.getElementById("inputRows");
let colInput = document.getElementById("inputCols");

for (let i = 0; i < rowInput.value; i++) {
    for (let j = 0; j < colInput.value; j++) {

    }
}


$('.dot').mouseenter(function () {
    $(this).css({borderRadius: 0});
    $(this).css({background: '#20B2AA'});
}).click(function () {
    $(this).css({borderRadius: '50%'});
    $(this).css({background: '#66CDAA'});
});