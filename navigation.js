var dummyElement = document.createElement("div");
var a = document.createElement("a");
a.setAttribute("style", "cursor: pointer");

// searching for groups with rect elements
var $groups = $("#cmap g").filter(function () {
  return $(this)[0].innerHTML.includes("<rect"); // klaeren warum $(this)[0] (element 0) // exclude paths (Connection Lines) and include rect (Linking Phrases)
});

$groups.each(function () {
  // returns only tspans !='t' --> cmap-svg contains 't'-tspans instead of blanks
  var $tspan = $(this) // https://stackoverflow.com/questions/18317082/filter-elements-out-of-a-jquery-object-based-on-text-content
    .find("tspan")
    .filter(function () {
      return this.innerHTML != "t";
    });
  var conceptText = "";
  for (let i = 0; i < $tspan.length; i++) {
    conceptText += $tspan[i].textContent;
  }

  a.setAttribute("onclick", 'searchFunction( " ' + conceptText + ' " )');

  dummyElement.innerHTML = a.outerHTML;
  var htmlAnchorElement = dummyElement.querySelector("a");

  htmlAnchorElement.innerHTML = $(this)[0].innerHTML;
  $(this)[0].innerHTML = dummyElement.innerHTML;

  $(this)[0].setAttribute("class", "concept"); //set class to rect elements
  $(this).find("rect")[0].setAttribute("class", conceptText); // set class "conceptText" to rect elements
});

function searchFunction(searchText) {
  // search function gets called by click on conceptText
  $(".match").removeClass("highlight"); // remove class "highlight" from all elements with class "match"
  $(".match").removeClass("match"); // remove class match from all elements with class "match"

  // adds class match to a matching class in text
  var conceptText = searchText.replace(" ", "."); // replace space in conceptText with "."
  var $section = $(".inhalt " + conceptText); // jQuery for elements with classes inhalt & conceptText and define as $section
  $section.addClass("match"); // add class match to $section

  if ($section[0] != undefined) {
    // if $section is defined scroll to element
    scrollToSection(0, $section);
  } else {
    // else output error message
    alert(searchText + "was not found in e-Portfolio!");
  }
  // adds class highlight to matching class
  $section.eq(0).addClass("highlight"); // add class "highlight" to highlight first element of $section
  $("#next").off(); //remove jQuery event function of "next" button
  $("#next").on("mouseup", (i = 1), function () {
    // add jQuery event function to "next" button
    $(".match").removeClass("highlight"); //removes class "highlight" from "match" class elements
    $(".match").eq(i).addClass("highlight"); // add class "highlight" to the current result
    scrollToSection(i, $(".match")); // scroll to the i-th element of "match" class elements
    if (i >= $(".match").length - 1) {
      // if the current i is lower then the length of class match go to the first result of the class match (reset i to 0)
      i = 0;
    } else {
      //else i +1
      i++;
    }
    $("#next").data("i", i); // set data attribute i to "next" button
    //console.log($("#next").data("i"));
  });
}

function scrollToSection(i, selector) {
  // scroll function
  var windowHeight = window.innerHeight; // define inner window height
  var sectionTop = selector[i].offsetTop; // define top of matched element
  var scrollPosition = sectionTop - windowHeight / 2; // define middle line of matched element as scroll postion
  window.scrollTo({
    top: scrollPosition, // scroll to scroll position
    behavior: "smooth", // scroll smooth
  });
}
