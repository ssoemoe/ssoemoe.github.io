$(function() {
  let projects = [
    {
      id: 1,
      color: "black",
      backgroundColor: "#1abc9c",
      url: "https://devpost.com/software/wildfire-alert-ikpe7b",
      header: "Wildfire Alert",
      body:
        "Wildfire Alert is a web application which was built during HoyaHacks Spring 2019. We got the third place in Google API use and Hardware tracks."
    },
    {
      id: 2,
      color: "white",
      backgroundColor: "#8C2712",
      url: "https://devpost.com/software/myclimate-r279on",
      header: "My Climate",
      body:
        "MyClimate is an Android application which notifies the user when his or her expected weather is coming. The application was built during Bitcamp 2018. I worked on Java models and controllers."
    },
    {
      id: 3,
      color: "white",
      backgroundColor: "#B45863",
      url: "https://github.com/ssoemoe/vanillajs-games",
      header: "Classical & Arcade Games",
      body:
        "I tried to make classical and arcade games such as tic-tac-toe, hangman, snake, pac-man with plain JavaScript to practice JavaScript."
    },

    {
      id: 4,
      color: "white",
      backgroundColor: "#4A6739",
      url: "https://github.com/ssoemoe/MEAN-chat",
      header: "MEAN Chat App",
      body:
        "To practice MongoDB, Express.js, Angular.js and Node.js, I decided to build a simple realtime chat application."
    }
  ];
  makeIntroTyped();

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
