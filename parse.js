//for node, npm install parse
var Parse = require('parse').Parse;
//for web include parse js
//<script src="//www.parsecdn.com/js/parse-1.3.0.min.js"></script>
Parse.initialize("2748U1d8IVsideEk9KK21sxQg15F1ap9127gZK6z", "nnsJFpZjOPAzU4euuCnaHBDWjJ2D8iwMTGhuTBbM");

var Student = Parse.Object.extend("Student");
var Donor = Parse.Object.extend("Donor");
var Activity = Parse.Object.extend("Activity");


function saveStudent(student) {
    var studentObj = new Student();

    studentObj.save(student, {
	success: function(studentObj) {
	    console.log('New object created with objectId: ' + studentObj.id);
	},
	error: function(studentObj, error) {
	    console.log('Failed to create new object, with error code: ' + error.message);
	}
    });
};

function findStudentByEmail(email, callback) {
    var query = new Parse.Query(Student);
    query.equalTo("email", email);
    query.first({
	success: function(object) {
	    // Successfully retrieved the object.
	    if (callback != null) {
		callback(object);
	    }
	},
	error: function(error) {
	    console.log("Error: " + error.code + " " + error.message);
	}
    });
};


function saveDonor(donor, callback) {
    var donorObj = new Donor();

    donorObj.save(donor, {
	success: function(donorObj) {
	    console.log('New object created with objectId: ' + donorObj.id);
	},
	error: function(donorObj, error) {
	    console.log('Failed to create new object, with error code: ' + error.message);
	}
    });
};


function findDonorsByStudentEmail(email, callback) {
    var query = new Parse.Query(Donor);
    query.equalTo("email", email);
    query.find({
	success: function(object) {
	    // Successfully retrieved the object.
	    if (callback != null) {
		callback(object);
	    }
	},
	error: function(error) {
	    console.log("Error: " + error.code + " " + error.message);
	}
    });
};


function saveActivity(activity) {
    var activityObj = new Activity();

    activityObj.save(activity, {
	success: function(activityObj) {
	    console.log('New object created with objectId: ' + activityObj.id);
	},
	error: function(activityObj, error) {
	    console.log('Failed to create new object, with error code: ' + error.message);
	}
    });
};


function findActivitesByStudentEmail(email, callback) {
    var query = new Parse.Query(Activity);
    query.equalTo("email", email);
    query.find({
	success: function(object) {
	    // Successfully retrieved the object.
	    if (callback != null) {
		callback(object);
	    }
	},
	error: function(error) {
	    console.log("Error: " + error.code + " " + error.message);
	}
    });
};



function run_test() {
    var student = {
	"school" : "UCLA",
	"goal" : 15000,
	"raised" : 0,
	"first": "Elsa",
	"last" : "Summers",
	"email" : "elsa@chegg.com",
	"gender" : "F",
	"major" : "Astrophysics",
	"bio" : "School costs too much",
	"profile_pic" : "http://orcz.com/images/d/d5/Spwendy.PNG",
	"password" : "testing",
	"type": "student",
	"career_interest" : "STEM"
    }

    saveStudent(student);
    //console.log(student);
    findStudentByEmail("elsa@chegg.com");
    findDonorsByStudentEmail("elsa@chegg.com", function(obj) { console.log(obj); });
}

//run_test();
