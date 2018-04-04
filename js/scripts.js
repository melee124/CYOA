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
  var weapon = document.getElementById("weapon").value;
    debugger;
    if (weapon === '1' || weapon ==='3') {
    document.getElementById("poolNoodle").classList.toggle('hidden');
    document.getElementById("story").classList.toggle('hidden');
   } else if (weapon == '2') {
    document.getElementById("sword").classList.toggle('hidden');
    document.getElementById("story").classList.toggle('hidden');
  } else { document.getElementById("death").innerHTML = "Grenades don't work on dragons, dude!"}
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
