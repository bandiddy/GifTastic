var topics = ["nike", "adidas", "gucci", "clarks"]

function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("brand");
      // Added a data-attribute
      a.attr("data-name", topics[i]);
      // Provided the initial button text
      a.text(topics[i]);
      // Added the button to the HTML
      $("#buttons-view").append(a);
    }
  }

  // This function handles events where one button is clicked
  $("#add-brand").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var brand = $("#brand-input").val().trim();

    // The movie from the textbox is then added to our array
    topics.push(brand);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Function for displaying the movie info
  // We're adding a click event listener to all elements with the class "movie"
  // We're adding the event listener to the document itself because it will
  // work for dynamically generated elements
  // $(".movies").on("click") will only add listeners to elements that are on the page at that time
  $(document).on("click", ".brand", alertMovieName);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();
