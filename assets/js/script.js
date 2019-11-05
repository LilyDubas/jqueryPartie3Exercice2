$(function(){
var compteurClic = 0;
$('#buttonP').click(function(){
compteurClic=compteurClic+1;
console.log(compteurClic);
$('#clicks').attr('value', compteurClic);
});
$('#buttonL').click(function(){
compteurClic=compteurClic-1;
console.log(compteurClic);
$('#clicks').attr('value', compteurClic);
});
});
