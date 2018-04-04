//biz logic
// Check if the user is ready to play!

function stairsOrDoor() {
    var response = document.getElementById("response").value;

    if (response === 'ENTER MAZE') {
      document.getElementById("enter").classList.toggle('hidden');
      document.getElementById("story").classList.toggle('hidden');
    } else if (response == 'WUSS OUT') {
      document.getElementById("Wuss").classList.toggle('hidden');
      document.getElementById("story").classList.toggle('hidden');
    } else { document.getElementById("error").innerHTML = "Sorry, I don't understand your input" }
}

function weaponofChoice() {
  var whereTo = document.getElementById("whereTo").value;
    debugger;
    if (whereTo === '1') {
    document.getElementById("maze").classList.toggle('hidden');
    document.getElementById("story").classList.toggle('hidden');
  } else if (whereTo == '2') {
    document.getElementById("attic").classList.toggle('hidden');
    document.getElementById("story").classList.toggle('hidden');
  } else {
    document.getElementById("basement").classList.toggle('hidden');
    document.getElementById("story").classList.toggle('hidden');
}

//UL Logic
$( document ).ready(function() {
  showSub();
  let charName = $("#cname"), sub = $("#subtitle"), charID = $("#idLine");

  function showSub () {
    setTimeout(function(){
      sub.show();
    }, 1500);
  }

  $("#nbtn").on("click", function(){
    event.preventDefault();
    if (charName.val() == ""){
      $("#nmform").append("<p>You cannot enter the wilds without a name. Please tell us what to call you.</p>").append("<button id= 'ok'>Try again.</button");
    } else {
      charID.append("<span>You are " + charName.val() +"</span>");
      $("#nmform").addClass("hide");
      $("#raceform").removeClass("hide");
    }
  });
  });
