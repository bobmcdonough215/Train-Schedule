// 1. Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6aVi7cxftC9TqQRXec26yMb9YR-paCp4",
    authDomain: "bobs-test-project-41b0b.firebaseapp.com",
    databaseURL: "https://bobs-test-project-41b0b.firebaseio.com",
    projectId: "bobs-test-project-41b0b",
    storageBucket: "bobs-test-project-41b0b.appspot.com",
    messagingSenderId: "183492627215",
    appId: "1:183492627215:web:2993a5e21921290a"
  };
  // Initialize Firebase  
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding Trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainTime = $("#time-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      time: trainTime,
      frequency: trainFrequency
    
    };

    // Uploads train data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");

      });
  // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;
  
    // Train Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainTime);
    console.log(trainFrequency);


    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(trainTime),
        $("<td>").text(trainFrequency),
      );

      $("#train-table > tbody").append(newRow);


  });