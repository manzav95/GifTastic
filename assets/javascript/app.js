let animals = ["dog", "cat", "dragon"];
let animal;
let api_key = "4W3AoCrWMOevXQ1RoDoZkQ5HnWOzqqa4";

function createButton(){
    $("#buttons").empty();

    for(let i = 0; i < animals.length; i++){
        let newBtn = $("<button>");
        newBtn.addClass("animal");
        newBtn.attr("data-name", animals[i]);
        newBtn.text(animals[i]);
        $("#buttons").append(newBtn);
    }
};

function alertAnimalName(){
    let animalName = $(this).attr("data-name");
    alert(animalName);
}

$("#add-animal").on("click", function(){
    event.preventDefault();

    let animal = $("#animal-input").val().trim();
    if(animal === ""){
        alert("Please enter an animal");
    }
    else{
        animals.push(animal);
        createButton();
        console.log(animal);
        $("#animal-input").empty();
    }
});

$(document).on("click", ".animal", alertAnimalName);

createButton();

let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=" + api_key;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);

});


