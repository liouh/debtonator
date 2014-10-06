//for node, npm install parse
//var Parse = require('parse').Parse;
//for web include parse js
//<script src="//www.parsecdn.com/js/parse-1.3.0.min.js"></script>
Parse.initialize("2748U1d8IVsideEk9KK21sxQg15F1ap9127gZK6z", "nnsJFpZjOPAzU4euuCnaHBDWjJ2D8iwMTGhuTBbM");

function saveStudent(student) {
    var Student = Parse.Object.extend("Student");
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


function saveDonor(donor) {
    var Donor = Parse.Object.extend("Donor");
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



function saveActivity(activity) {
    var Activity = Parse.Object.extend("Activity");
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



// function run_test() {
//     var student = {
// 	"school" : "UCLA",
// 	"goal" : 15000,
// 	"raised" : 0,
// 	"first": "Elsa",
// 	"last" : "Summers",
// 	"email" : "elsa@chegg.com",
// 	"gender" : "F",
// 	"major" : "Astrophysics",
// 	"bio" : "School costs too much",
// 	"profile_pic" : "http://orcz.com/images/d/d5/Spwendy.PNG",
// 	"password" : "testing",
// 	"type": "student",
// 	"career_interest" : "STEM"
//     }

//     saveStudent(student);
//     console.log(student);
// }

// run_test();
