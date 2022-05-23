var $sections = $(".sections"); // jQuery for all elements in HTML with "sections" class

var $lis = $("#cmap rect").filter(function () {
  // filter for all rectangles in cmap
  return $(this).attr("class");
});

$(window).on("scroll", function () {
  // function gets executed when user scrolls
  $sections.each(function () {
    //
    var sectionTop = $(this)[0].offsetTop; // define section top of current section element
    var sectionHeight = $(this)[0].clientHeight; // define section height of current section elements
    var sectionBottom = sectionTop + sectionHeight; // calculate bottom of current section elements
    var windowHeight = window.innerHeight; // define inner height of window
    var marginTop = parseInt(window.getComputedStyle($(this)[0]).marginTop); // margin Top of section
    var upperLine = scrollY + marginTop + windowHeight / 2; // scroll position + half window height + margin Top of section
    var sectionName = $(this)[0].className; // define section name as class name of current section elements
    // if upper line >= top of current section and <= bottom of current section
    if (upperLine >= sectionTop && scrollY <= sectionBottom) {
      var target; // define dummy variable
      for (let i = 0; i < $lis.length; i++) {
        var conceptName = $lis[i].className.baseVal; // define concept name as class name of current "$lis" element
        if (sectionName.includes(conceptName)) {
          // if name of current section includes "$lis" class name
          target = $lis.eq(i);
          target.addClass("active"); // adds class active to the concept in cmap if the target includes concept name
          $lis.not(target).removeClass("active"); // removes all classes active of concepts from the cmap if the concept name is not included
        }
      }
    }
  });
});
