

// Event Listener for DOM intro text append
firebase.auth().onAuthStateChanged(function(user) {

  // If the current user is verified, continue with webpage updates
  if (user !== null) {
    console.log(user.email);
  }

});
