$(function() {
  makeIntroTyped();

  // inserts project slides into DOM
  let slides1 = document.querySelector("#projects-slides-1");
  for (let project of projects) {
    insertProjectSlider(project, slides1);
  }

  // set after project elements are placed in DOM
  for (let project of projects) {
    $(`#view-project-${project.id}`).on("click", function() {
      window.open(project.url);
    });
  }

  $("#bouncing-down-arrow").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $("#myself").offset().top
      },
      1000
    );
  });

  function makeIntroTyped() {
    $(".typed").typed({
      strings: ["Hello!", "How are you?", "I am Shane.", "Welcome!"],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 100,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 100,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: false,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: "html",
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });
  }
});
