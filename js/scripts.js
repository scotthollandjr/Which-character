var a = 0;
var e = 0;
var w = 0;
var f = 0;

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var quests = ["quest1", "quest2", "quest3", "quest4", "quest5"];

    quests.forEach(function(quest) {
      var answer = $("input[name=" + quest + "]:checked").val();

      if (answer === "a") {
        a ++;
      } else if (answer === "e") {
        e ++;
      } else if (answer === "w") {
        w ++;
      } else if (answer === "f") {
        f ++;
      }

    });

    if (a >= 3) {
    $("#survey").toggle();
    $("#air").toggle();
  } else if (e >= 3) {
    $("#survey").toggle();
    $("#earth").toggle();
  } else if (w >= 3) {
    $("#survey").toggle();
    $("#water").toggle();
  } else if (f >= 3) {
    $("#survey").toggle();
    $("#fire").toggle();
  } else {
    $("#survey").toggle();
    alert("Sorry, bruh. You ain't no bender!")
  }
    event.preventDefault();
  });
});
