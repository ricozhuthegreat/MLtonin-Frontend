
// Constant time increment string array for the table
const GRAPH_LABELS = ["0", "5", "10", "15", "20"];

// Realtime database initialization
let db = firebase.database();

// Side navbar user informatics/metrics
let user_greeting = document.getElementById("user-greeting");
let user_profile_pic = document.getElementById("user-profile-pic");
let user_info = document.getElementById("user-info");

// Event Listener for DOM intro text append
firebase.auth().onAuthStateChanged(function(user) {

  // If the current user is verified, continue with webpage updates
  if (user !== null) {

    /* Draw side nav bar info */

    // Get the user's email from firebase
    let email = user.email;
    // The user's username is their email's part before the '@' symbol... (with a '@' symbol at the front because it looks cooler)
    let username = email.substring(0, email.indexOf("@"));
    // Append sample message for greeting. TODO: check time and append differeing texts (e.g., Good evening, Good morning .etc)
    let user_greeting_tn = document.createTextNode("Welcome back, " + username);
    username = "@" + username + "   " + String.fromCodePoint(0x1F971);
    let user_info_tn = document.createTextNode(username);

    // Create html elements to append the text nodes
    let user_greeting_el = document.createElement("h1");
    let user_info_el = document.createElement("h2");

    // Create the image for the user profile picture
    let user_profile_pic_img = document.createElement("img");
    user_profile_pic_img.setAttribute("src", "../../assets/blank_profile.png");
    user_profile_pic_img.style.width = "40vh";
    user_profile_pic_img.style.height = "50vh";

    // Append the text nodes to html elements and attach under associated profile section
    user_greeting.appendChild(user_greeting_el.appendChild(user_greeting_tn));
    user_profile_pic.appendChild(user_profile_pic_img);
    user_info.appendChild(user_info_el.appendChild(user_info_tn));


    /* Fetch data from cloud realtime database and pipe/feed it into the widgets */


    /* Build and draw the energy level graph */

    // Draw graph using Chart.js
    var ctx = document.getElementById('sleep-graph').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: GRAPH_LABELS,
            datasets: [{
                label: 'Energy',
                backgroundColor: '#70ff92',
                borderColor: '#30ff4c',
                data: [20, 25, 20, 30, 35, 40, 65]
            }]
        },

        // Configuration options go here
        options: {}
    });


  }

});

// Every 5 seconds, call a periodic function that updates the sleep graph/chart
setInterval(function() {



}, 5000);
