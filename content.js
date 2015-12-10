// content.js

// determine which site to scrap
function discernSite(){
  if(document.location == "https://sports.bovada.lv/basketball/nba/player-props-market-group"){
    grabBovada();
  } elsif(document.location == "5dimes.com"){
    grabDimes();
  }
}

// grab name of player/type of bet | .ng-binding .ng-scope
// grab + side | .ng-binding
// grab - side | .ng-binding
// create a js object (hash) to store
  // name: (first initial, last name)
  // type: (array of strings) ex. ["total points", "rebounds", ...]
  // plus: (integer)
  // neg: (integer)
// store this object into an array
// send json to BG.js
function grabBovada() {
  var all_bets = window.document.querySelectorAll('article');
  var props = []
  for(var i=0; i<all_bets.length; i++){
    var bet = all_bets[i].innerText.split(" ");
    prop = {
      name: bet[2],
      type: bet[3],
      neg: bet[8],
      plus: bet[9]
    }
    props.push(prop);
  }
  // can grab bets, but needs formatting to grab specific props
}

  // repeat above function
  // these functions grab ALL elements at once
  // OUTPUT: array
function grabDimes(){
}



