 window.onload = function () {
     var measurement = document.querySelector("#measurement");
     var adjective = document.querySelector("#adjective");
     var name = document.querySelector("#name");
     var bodytype = document.querySelector("#bodytype");
     var color = document.querySelector("#color");
     var animal = document.querySelector("#animal");
     var another = document.querySelector("#another");
     var adjective2 = document.querySelector("#adjective2");
     var verb = document.querySelector("#verb");
     var noun = document.querySelector("#noun");
     var adjective3 = document.querySelector("#adjective3");
     var emotion = document.querySelector("#emotion");
     var emotion2 = document.querySelector("#emotion2");
     var action = document.querySelector("#action");
     var noun2 = document.querySelector("#noun2");
     var adjective4 = document.querySelector("#adjective4");
     var story = document.querySelector("#story")
     var launch = document.querySelector("#launch");
     launch.addEventListener("click", writeStory, false);

     function writeStory() {
         var launchedStory = "";
         launchedStory += "<div id='storywrap'><h2>The Ballad of " + bodytype.value + " " + name.value + "</h2><p>Many " + measurement.value + " ago, there was a " + adjective.value + " person named " + name.value + ". " + name.value + " was " + bodytype.value + " with " + color.value + "-colored hair and had a pet " + animal.value + " named " + another.value + ". " + another.value + " was " + adjective2.value + " and liked to " + verb.value + ".</p><p>One day, when " + name.value + " took " + another.value + " out for a " + verb.value + ", they came across a " + noun.value + ". This was the " + adjective3.value + "est " + noun.value + " that " + name.value + " ever saw. " + name.value + " felt " + emotion.value + ", but " + another.value + " felt " + emotion2.value + ". They decided to " + action.value + " the " + noun.value + " into a " + noun2.value + ". This became the most " + adjective4.value + " day ever.</p></div>";
         story.innerHTML = launchedStory;
     }
 }
