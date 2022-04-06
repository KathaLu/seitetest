/* 
var count = 0;
var lastSearchedText = undefined;
var dummyElement = document.createElement('div');
var a = document.createElement('a');
a.setAttribute('style', 'cursor: pointer');

var groups = cmap.getElementsByTagName('g');
for (let i = 0; i < groups.length; i++) {
  const group = groups[i];
  if (!group.innerHTML.includes('<path') & group.innerHTML.includes('<rect')) {
    // excludes paths (Connection Lines) and includes rect (Linking Phrases)
    let textAttribute = group.getElementsByTagName('text');
    let text = textAttribute[0].innerHTML;
    let result = text.replace('<tspan>', '');
    result = result.replace(/(\r\n|\n|\r|^\t|\ )/gm, '');
    result = result.replace('</tspan><tspanfill="none">t</tspan><tspan>', ' ');
    result = result.replace('</tspan>', '');

    a.setAttribute('onclick', 'searchFunction( " ' + result + ' " )');

    dummyElement.innerHTML = a.outerHTML;
    var htmlAnchorElement = dummyElement.querySelector('a');

    htmlAnchorElement.innerHTML = group.innerHTML;
    group.innerHTML = dummyElement.innerHTML;
  }
}

function searchFunction(searchText) {
  const element = document.getElementsByClassName(searchText);

  if (element[0] !== undefined) {
    //check if class name is found in HTML
    if (count < element.length) {
      element[count].scrollIntoView();
      count++;
      lastSearchedText = searchText;
      console.log(lastSearchedText);
    } else {
      count = 0;
      element[count].scrollIntoView();
    }
  } else {
    alert('Kein Ergebnis gefunden!');
  }
} */
var count = 0;
var lastSearchedText = undefined;
var dummyElement = document.createElement("div");
var a = document.createElement("a");
a.setAttribute("style", "cursor: pointer");

var groups = cmap.getElementsByTagName("g");
for (let i = 0; i < groups.length; i++) {
  const group = groups[i];
  if (!group.innerHTML.includes("<path") & group.innerHTML.includes("<rect")) {
    // excludes paths (Connection Lines) and includes rect (Linking Phrases)
    let textAttribute = group.getElementsByTagName("text");
    let text = textAttribute[0].innerHTML;
    let result = text.replace("<tspan>", "");
    result = result.replace(/(\r\n|\n|\r|^\t|\ )/gm, "");
    result = result.replace('</tspan><tspanfill="none">t</tspan><tspan>', " ");
    result = result.replace("</tspan>", "");

    //set anchor for searchFunction
    //a.setAttribute("onclick", 'searchFunction( " ' + result + ' " )');
    a.setAttribute("onclick", "searchFunction()");

    //set anchor for searchAndHighlight
    //a.setAttribute("onclick", 'searchFunction( " ' + result + ' " )');

    dummyElement.innerHTML = a.outerHTML;
    var htmlAnchorElement = dummyElement.querySelector("a");

    htmlAnchorElement.innerHTML = group.innerHTML;
    group.innerHTML = dummyElement.innerHTML;

    //var $currDiv = $("[id='start'][class='Oberthema 1']");
    var $currDiv = $("#start");
    $currDiv.css("background-color", "#aa5099", "0.8");
    $currDiv[0].scrollIntoView();
    console.log($currDiv[0]);
  }
}

function searchFunction(searchText) {
  //$currDiv = $currDiv.next().filter('[class=" ' + searchText + ' "]');
  $currDiv = $currDiv.next();
  $("p").css("background-color", "");
  $("h1").css("background-color", "");
  $("h2").css("background-color", "");
  $currDiv.css("background-color", "#aa5099", "0.8");
  $currDiv[0].scrollIntoView();
