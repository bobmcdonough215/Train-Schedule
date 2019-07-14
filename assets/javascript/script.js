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
    var trainTime = moment($z("#time-input").val().trim(), "HH:mm").format("X");
    var trainFrequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      time: trainTime,
      frequency: trainFrequency
    
    };

    // Uploads employee data to the database
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
  