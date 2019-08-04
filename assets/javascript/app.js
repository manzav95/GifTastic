let animals = ["dog", "cat", "dragon"];
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

$("#add-animal").on("click", function(){
    event.preventDefault();

    let animalIn = $("#animal-input").val().trim();
    if(animalIn === ""){
        alert("Please enter an animal");
    }
    else{
        animals.push(animalIn);
        createButton();
        console.log(animalIn);
        $("#animal-input").empty();
    }
    createButton();
    console.log(animals);
});

createButton();
    
$("button").on("click", function(){
    event.preventDefault();

    let animal = $(this).attr("data-name");
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=" + api_key;

    $("#gifs").empty();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        let gifs = response.data;

            for(let index = 0; index < 10; index++){
                let gifDiv = $("<div>");
                let rating = gifs[index].rating;
                let p = $("<p>").text("Rating: " + rating);
                let images = $("<img>");
                images.attr("src", gifs[index].images.original.url);
                images.addClass("gifs");
                images.attr("style", "width:250px");

                gifDiv.prepend(p);
                gifDiv.append(images);

                $("#gifs").prepend(gifDiv);
            };            
    });
})
