let animals = ["dog", "cat", "dragon"];
let animal;
let api_key = "4W3AoCrWMOevXQ1RoDoZkQ5HnWOzqqa4";

function createButton(){
    $("#animal-input").empty();

    for(let i = 0; i < animals.length; i++){
        let newBtn = $("<button>");
        newBtn.addClass("animal");
        newBtn.attr("data-name", animals[i]);
        newBtn.text(animals[i]);
        $("#buttons").append(newBtn);
    }
};

$("#add-animal").on("click", function(){
    event.preventDefault();

    let animal = $("#animal-input").val().trim();
    animals.push(animal);
    createButton();
});

$(document).on("click", ".animal", function(){

});

let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=" + api_key;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);

});


