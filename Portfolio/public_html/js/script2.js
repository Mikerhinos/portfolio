var container = $('.contenu');
var calc = 'calc/index.html';
var accueil = 'contAcc.html';
var game = 'game/testNiveau.html';
var cv = 'cv.html';
var contact = 'contact.html';
var valide = 'valid.html';

$('#calc').click( function(e) {
    e.preventDefault();
    container.load(calc);
    return false; } );

$('.accueil').click( function(e) {
    e.preventDefault();
    container.load(accueil);
    return false; } );

$('#game').click( function(e) {
    e.preventDefault();
    container.load(game);
    return false; } );

$('#cv').click( function(e) {
    e.preventDefault();
    container.load(cv);
    return false; } );

$('#contact').click( function(e) {
    e.preventDefault();
    container.load(contact);
    return false; } );

$('#formu').click( function(e) {
    e.preventDefault();
    container.load(valide);
    return false; } );