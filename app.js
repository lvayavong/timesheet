// initialize Firebase
var config = {
    apiKey: "AIzaSyBK8ZjQk5jWc0FABV3oMR--HQXk7MPS1Tg",
    authDomain: "firstfirebaseproject-199ba.firebaseapp.com",
    databaseURL: "https://firstfirebaseproject-199ba.firebaseio.com",
    projectId: "firstfirebaseproject-199ba",
    storageBucket: "firstfirebaseproject-199ba.appspot.com",
    messagingSenderId: "669554701175"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// get new input
$('#submit').on('click', function(event) {
	alert('Employee added');
	// prevent default to avoid refreshing
	event.preventDefault();
	// get name
	var name = $('#inputName').val();
	console.log(name);
	// get role
	var role = $('#inputRole').val();
	console.log(role);
	// get Months worked (from start date)
	var startDate = $('#inputDate').val();
	console.log(startDate)
	// get monthly rate
	var monthRate = $('#inputRate').val();
	console.log(monthRate);
	// calculate total billed
	var totalBilled;
	// push to Firebase
	database.ref().push({
		name: name,
		role: role,
		start: startDate,
		monthlyRate: monthRate
	})

})
	


// when data is updated in Firebase, update the table
database.ref().on('value', function(snapshot) {
	// get values from Firebase
	// name
	// role
	// months worked
	// monthly rate
	// total billed
	// add to table
})
	
