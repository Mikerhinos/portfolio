var container = $('.contenu');
var calc = 'calc/index.html';
var accueil = 'contAcc.html';
var game = 'game/testNiveau.html';

$('#calc').click( function(e) {
    e.preventDefault();
    container.load(calc); //'<object type="text/html" data="calc/index.html" ></object>';
    return false; } );

$('.accueil').click( function(e) {
    e.preventDefault();
    container.load(accueil); //'<object type="text/html" data="calc/index.html" ></object>';
    return false; } );

$('#game').click( function(e) {
    e.preventDefault();
    container.load(game); //'<object type="text/html" data="calc/index.html" ></object>';
    return false; } );