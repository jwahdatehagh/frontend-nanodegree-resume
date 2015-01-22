// Bio
var bio = {
  "name": "Jalil Wahdatehagh",
  "role": "Web Developer",
  "contacts": {
    "mobile": "017661969616",
    "email": "j.wahdatehagh@gmail.com",
    "github": "j.wahdatehagh",
    "twitter": "@jwahdatehagh",
    "location": "Stuttgart, Germany"
  },
  "welcomeMessage": "Yo!",
  "skills": ["JS", "CSS", "HTML"],
  "biopic": "https://lh4.googleusercontent.com/-vgzlXoWPAaQ/U4Vg2ZJMDnI/AAAAAAAATpk/_urHNPp8hbU/w1282-h1280-no/jalil2.jpg"
};
bio.display = function() {
  // header
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role))
              .prepend(HTMLheaderName.replace("%data%", bio.name))
              .prepend(HTMLbioPic.replace("%data%", bio.biopic));

  // contacts
  $('#topContacts, #footerContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile))
                   .append(HTMLemail.replace("%data%", bio.contacts.email))
                   .append(HTMLtwitter.replace("%data%", bio.contacts.twitter))
                   .append(HTMLgithub.replace("%data%", bio.contacts.github))
                   .append(HTMLlocation.replace("%data%", bio.contacts.location));

  // skills
  var skills = bio.skills;
  var skillsLength = skills.length;

  if (skillsLength) {
    $('#header').append(HTMLskillsStart);
    for (var i = 0; i < skillsLength; i++) {
      $('#skills').append(HTMLskills.replace('%data%', skills[i]));
    }
  }
};
bio.display();


// Work
var work = {
  "jobs": [
    {
      "employer": "Actano",
      "title": "Werkstudent",
      "location": "Munich",
      "dates": "2011-2012",
      "description": "E-Learning"
    },
    {
      "employer": "PatientsBest",
      "title": "Project Manager IT",
      "location": "Munich",
      "dates": "2014-2015",
      "description": "Design and Development"
    }
  ]
};
work.display = function() {
  // jobs
  var jobs = work.jobs;
  for (job in jobs) {
    $("#workExperience").append(HTMLworkStart);

    var employer = HTMLworkEmployer.replace('%data%', jobs[job].employer);
    var title = HTMLworkTitle.replace('%data%', jobs[job].title);
    var dates = HTMLworkDates.replace('%data%', jobs[job].dates);
    var loc = HTMLworkLocation.replace('%data%', jobs[job].location);
    var description = HTMLworkDescription.replace('%data%', jobs[job].description);

    $('.work-entry:last').append(employer + title + dates + loc + description);
  }
};
work.display();


// Projects
var projects = {
  "projects": [
    {
      "title": "PatientsBest",
      "dates": "2014-2015",
      "description": "Development & Design",
      "images": ["images/pb-website-landing.jpg", "images/pb-website-suche.jpg", "images/pb-website-suchergebnis.jpg"]
    },
    {
      "title": "Future of Ed",
      "dates": "2013",
      "description": "Development & Design",
      "images": ["images/future-of-ed.png"]
    }
  ]
};
projects.display = function() {

  var projects = this.projects;
  for (project in projects) {
    $('#projects').append(HTMLprojectStart);

    var title = HTMLprojectTitle.replace('%data%', projects[project].title);
    var dates = HTMLprojectDates.replace('%data%', projects[project].dates);
    var description = HTMLprojectDescription.replace('%data%', projects[project].description);

    var images = '';
    for (var i = 0; i < projects[project].images.length; i++) {
      images += HTMLprojectImage.replace('%data%', projects[project].images[i]);
    }


    $('.project-entry:last').append(title + dates + description + images);
  }
};
projects.display();


// Education
var education = {
  "schools": [
    {
      "name": "FH Joanneum",
      "location": "Graz, Austria",
      "degree": "BA Information Design",
      "majors": [],
      "dates": 2012,
      "url": "http://www.fh-joanneum.at"
    },
    {
      "name": "Distance Uni Hagen",
      "location": "Germany",
      "degree": "BA Educational Sciences",
      "majors": [],
      "dates": 2013,
      "url": "https://www.fernuni-hagen.de"
    }
  ],
  "onlineCourses": [
    {
      "title": "Object Oriented JS",
      "school": "Udacity",
      "years": 2014,
      "url": "http://www.udacity.com"
    },
    {
      "title": "Software as a Service",
      "school": "EdX",
      "years": 2013,
      "url": "http://www.edx.org"
    }
  ]
};
education.display = function() {
  var schools = this.schools;
  var courses = this.onlineCourses;

  for (school in schools) {
    $('#education').append(HTMLschoolStart);

    var name = HTMLschoolStart.replace('%data%', schools[school].name);
    var location = HTMLschoolName.replace('%data%', schools[school].location);
    var degree = HTMLschoolDegree.replace('%data%', schools[school].degree);
    var majors = HTMLschoolDates.replace('%data%', schools[school].majors);
    var dates = HTMLschoolLocation.replace('%data%', schools[school].dates);
    var url = HTMLschoolMajor.replace('%data%', schools[school].url);

    $('.education-entry:last').append(name + location + degree + majors + dates + url);
  }

  for (course in courses) {
    $('#education').append(HTMLschoolStart);

    var title = HTMLonlineTitle.replace('%data%', courses[course].title);
    var school = HTMLonlineSchool.replace('%data%', courses[course].school);
    var years = HTMLonlineDates.replace('%data%', courses[course].years);
    var url = HTMLonlineURL.replace('%data%', courses[course].url);

    $('.education-entry:last').append(title + school + years + url);
  }
};
education.display();


// Set up the google map
$('#mapDiv').append(googleMap);
initializeMap();


// Internationalize
$('#main').append(internationalizeButton);

function inName(name) {
  ! name ? name = $('#name').html() || 'herbert funny' : name = name;

  var names = name.split(' ');

  return names[0][0].toUpperCase() + names[0].toLowerCase().slice(1) + ' ' + names[1].toUpperCase();
}

// Set up an event handler for click locations 
$(document).click(function(loc) {
  logClicks(loc.clientX, loc.clientY)
});