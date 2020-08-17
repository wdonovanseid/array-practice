function makeList(listItem) {
  return '<li>' + listItem + '</li>';
}

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    let favThings = [$("input#fav1").val(), $("input#fav2").val(), $("input#fav3").val()];
    //let modifyThings = favThings.slice();  

    let friFavThings = [$("input#fav4").val(), $("input#fav5").val(), $("input#fav6").val()];

    friFavThings.push(favThings[2]);

    //friFavThings.map().makeList(friFavThings).join('') + "</ul>"
    //let result = document.querySelector("#workplz");
    //$("#workplz").text("<ul>" + result + "</ul>");

    var app = $('#workplz');
html(app) = '<ul>' + friFavThings.map(function (friFavThings) {
	return '<li>' + friFavThings + '</li>';
}).join('') + '</ul>';

    //let result = favThings.join("</li><li>");
    //$("#workplz").text(result);

    event.preventDefault();
  });
  
});