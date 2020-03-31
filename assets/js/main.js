// Build module.
var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);
//let portafolioOn = false;

/* Set Cookies */
Cookies.set("uiCurrentState");
Cookies.set("quizState");

/* Global Variables*/
let uiState = 3;
let lineState;
let lastQ;

let navigationBar = document.querySelector(".navigation");

/* get Cookies */
if (Cookies.get("uiCurrentState") > 0 && Cookies.get("quizState") === "true") {
  uiState = parseInt(Cookies.get("uiCurrentState"));
}

/* Set Navigation */
function navigationController($scope, $window) {
  window.onload = function() {
    /* L I N G U I S T I C   O R   N A T U R A L I S T I C */
    if (uiState == 1 || uiState == 2) {
      /* L I N G U I S T I C */
      if (uiState == 1) {
        /* Locate DOM elements */
        let menuRight = document.querySelector(".nav-s2"),
          main = document.querySelector(".main"),
          navContainer = document.querySelectorAll(".link"),
          activeLink = 0,
          body = document.body,
          linkCliked = document.querySelectorAll(".link");
        let showRight = document.querySelector(".nav-trigger");

        /**/

        /* Show menu */
        showRight.onclick = function() {
          classie.toggle(this, "active");
          classie.toggle(menuRight, "cbp-spmenu-open");
          disableOther("showRight");
          //activeMenu();
        };

        /* Hide menu when a link was clicked */

        for (let i = 0; i < linkCliked.length; i++) {
          linkCliked[i].addEventListener("click", () => {
            classie.toggle(showRight, "active");
            classie.remove(menuRight, "cbp-spmenu-open");
            classie.toggle(showRight, "disabled");
          });
        }

        /* Hide menu */
        let disableOther = button => {
          if (button !== "showRight") {
            classie.toggle(showRight, "disabled");
          }
        };

        // Make visible the navigation
        document.querySelector(".li-case").style.display = "block";
        // Get all buttons with class="btn" inside the container
        var btns = document.getElementsByClassName("li-a");

        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
        }
      }

      /* N A T U R A L I S T I C */
      if (uiState == 2) {
        /* Locate DOM elements */
        let menuRight = document.querySelector(".nav-s3"),
          main = document.querySelector(".main"),
          navContainer = document.querySelectorAll(".link"),
          activeLink = 0,
          body = document.body,
          linkCliked = document.querySelectorAll(".link");
        let showRight = document.querySelector(".nav-trigger3");

        /**/

        /* Show menu */
        showRight.onclick = function() {
          classie.toggle(this, "active");
          classie.toggle(menuRight, "cbp-spmenu-open");
          disableOther("showRight");
          //activeMenu();
        };

        /* Hide menu when a link was clicked */

        for (let i = 0; i < linkCliked.length; i++) {
          linkCliked[i].addEventListener("click", () => {
            classie.toggle(showRight, "active");
            classie.remove(menuRight, "cbp-spmenu-open");
            classie.toggle(showRight, "disabled");
          });
        }

        /* Hide menu */
        let disableOther = button => {
          if (button !== "showRight") {
            classie.toggle(showRight, "disabled");
          }
        };
        //Make visible the navigation.
        document.querySelector(".na-case").style.display = "block";
      }
    }

    /* L O G I C A L   M A T H E M A T H I C A L */
    if (uiState == 3) {
      // Make visible the navigation
      // document.querySelector(".lm-case").style.display = "block";

      // let els = document.getElementsByClassName("step");
      // let steps = [];
      // Array.prototype.forEach.call(els, e => {
      //   steps.push(e);
      //   e.addEventListener("click", x => {
      //     progress(x.target.id);
      //   });
      // });

      // function progress(stepNum) {
      //   let p = stepNum * 32;
      //   document.getElementsByClassName("percent")[0].style.width = `${p}%`;
      //   steps.forEach(e => {
      //     if (e.id === stepNum) {
      //       e.classList.add("selected");
      //       e.classList.remove("completed");
      //     }
      //     if (e.id < stepNum) {
      //       e.classList.add("completed");
      //     }
      //     if (e.id > stepNum) {
      //       e.classList.remove("selected", "completed");
      //     }
      //   });
      // }


       /* Locate DOM elements */
        let menuRight = document.querySelector(".nav-s3"),
          main = document.querySelector(".main"),
          navContainer = document.querySelectorAll(".link"),
          activeLink = 0,
          body = document.body,
          linkCliked = document.querySelectorAll(".link");
        let showRight = document.querySelector(".nav-trigger3");

        /**/

        /* Show menu */
        showRight.onclick = function() {
          classie.toggle(this, "active");
          classie.toggle(menuRight, "cbp-spmenu-open");
          disableOther("showRight");
          //activeMenu();
        };

        /* Hide menu when a link was clicked */

        for (let i = 0; i < linkCliked.length; i++) {
          linkCliked[i].addEventListener("click", () => {
            classie.toggle(showRight, "active");
            classie.remove(menuRight, "cbp-spmenu-open");
            classie.toggle(showRight, "disabled");
          });
        }

        /* Hide menu */
        let disableOther = button => {
          if (button !== "showRight") {
            classie.toggle(showRight, "disabled");
          }
        };
        //Make visible the navigation.
        document.querySelector(".na-case").style.display = "block";
    }

    /* K I N E S T H E T I C */
    if (uiState == 4) {
      // Get all buttons with class="btn" inside the container
      var btns = document.getElementsByClassName("icon-ki-menu");

      // Loop through the buttons and add the active class to the current/clicked button
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
    }

    /* V I S O - S P A T I A L */
    if (uiState == 5) {
      // Get all buttons with class="btn" inside the container
      var btns = document.getElementsByClassName("icon-vs-menu");

      // Loop through the buttons and add the active class to the current/clicked button
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
    }
  };

  /* Choose the current uiState */
  switch (uiState) {
    case 1:
      $scope.navigationType = function() {
        return "navigationTypes/navigation-li.html";
      };
      break;

    case 2:
      $scope.navigationType = function() {
        return "navigationTypes/navigation-na.html";
      };
      break;

    case 3:
      $scope.navigationType = function() {
        // return "navigationTypes/navigation-lm.html";
        return "navigationTypes/navigation-na.html";
      };
      break;

    case 4:
      $scope.navigationType = function() {
        return "navigationTypes/navigation-ki.html";
      };
      break;

    case 5:
      $scope.navigationType = function() {
        return "navigationTypes/navigation-vs.html";
      };
      break;

    default:
      break;
  }
}

/* Quiz question arrays */
let question1 = {
  question: "Do you prefer a menu with icons or text?",
  answer1: `<p><span class="icon icon-home-quiz"></span> icons</p>`,
  answer2: "<p>Only text</p>"
};

let question2 = {
  question: "How do you prefer the content being displayed?",
  answer1: `<p><a onclick="linguistic()">Text short and concise</a></p>`,
  answer2: `<p><a onclick="naturalistic()">Text complemented with pictures</a></p>`
};

let question3 = {
  question: "Which arrangement has more logic for you?",
  answer1: `<img onclick="lastQuestion()" src="assets/img/Icons-quiz/visual.svg">`,
  answer2: `<img onclick="lastQuestion()" src="assets/img/Icons-quiz/logical.svg">`
};

let question4 = {
  question: "Which icon style do you prefer?",
  answer1: `<a onclick="kinesthetic()"><img class="icon-quiz" src="assets/img/Icons-quiz/kinestetic.svg"></a>`,
  answer2: `<a onclick="lastUIResult()"><img class="icon-quiz" src="assets/img/Icons-quiz/normal-icon.svg"></a>`
};

/* Last question function */

function lastQuestion() {
  lastQ = true;

  if (lineState == 3 && lastQ == true) {
    document.querySelector(".quiz__question").innerHTML = question4.question;
    document.querySelector(".quiz__answer1").innerHTML = question4.answer1;
    document.querySelector(".quiz__answer2").innerHTML = question4.answer2;

    document
      .querySelector(".quiz__answer1")
      .addEventListener("click", function() {
        lineState = 4;
      });

    document
      .querySelector(".quiz__answer2")
      .addEventListener("click", function() {
        lineState = 5;
      });
  }
}
/* Reset lineState */
function resetLineState() {
  lineState = undefined;

  /* Hide nav again */
  document.querySelector(".navigation").classList.add("nav-invisible");
}
/* Choose a random UI to as default */
if (uiState === undefined) {
  uiState = Math.floor(Math.random() * 5) + 1;
}

/* Result A (Linguistic) */
function linguistic() {
  //uiState = 1;
  Cookies.set("uiCurrentState", 1);
  Cookies.set("quizState", "true");
  uiState = parseInt(Cookies.get("uiCurrentState"));

  /* Reload */
  location.replace("/");

  /* Show nav again */
  //document.querySelector('.navigation').classList.remove('nav-invisible');
}

/* Result B (Naturalistic) */
function naturalistic() {
  //uiState = 2;
  Cookies.set("uiCurrentState", 2);
  Cookies.set("quizState", "true");
  uiState = parseInt(Cookies.get("uiCurrentState"));

  /* Reload */
  location.replace("/");

  /* Show nav again */
  //document.querySelector('.navigation').classList.remove('nav-invisible');
}

/* Result C (Kinesthetic) */
function kinesthetic() {
  //uiState = 4;
  Cookies.set("uiCurrentState", 4);
  Cookies.set("quizState", "true");
  uiState = parseInt(Cookies.get("uiCurrentState"));

  /* Reload */
  location.replace("/");

  /* Show nav again */
  //document.querySelector('.navigation').classList.remove('nav-invisible');
}

/* Last UI Result */
function lastUIResult() {
  /* Result E (Viso Spatial) */
  if (lineState == 4) {
    //uiState = 5;
    Cookies.set("uiCurrentState", 5);
    Cookies.set("quizState", "true");
    uiState = parseInt(Cookies.get("uiCurrentState"));

    /* Reload */
    location.replace("/");

    /* Show nav again */
    //document.querySelector('.navigation').classList.remove('nav-invisible');
  }

  /* Result D (Logical Mathemathical) */
  if (lineState == 5) {
    //uiState = 3;
    Cookies.set("uiCurrentState", 3);
    Cookies.set("quizState", "true");
    uiState = parseInt(Cookies.get("uiCurrentState"));

    /* Reload */
    location.replace("/");

    /* Show nav again */
    //document.querySelector('.navigation').classList.remove('nav-invisible');
  }
}

// Routes configuration.
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "vistas/home.html",
      controller: "mainController"
    })
    .when("/about", {
      templateUrl: "vistas/about.html",
      controller: "aboutController",
    })
    .when("/portafolio", {
      templateUrl: "vistas/portafolio.html",
      controller: "portafolioController"
    })
    .when("/services", {
      templateUrl: "vistas/services.html",
      controller: "servicesController"
    })
    .when("/writing", {
      templateUrl: "vistas/writing.html",
      controller: "writingController"
    })
    .when("/photography", {
      templateUrl: "vistas/photography.html",
      controller: "photographyController"
    })
    .when("/blog", {
      templateUrl: "vistas/blog.html",
      controller: "blogController"
    });


  $routeProvider
    .when("/ui-quiz", {
      templateUrl: "vistas/quiz.html",
      controller: "quizController"
    })

    .otherwise({
      redirectTo: "/"
    });

  /* Remember to uncomment */
  $locationProvider.html5Mode(true);
});

/* =====================================
***** Q U I Z  C O N T R O L L E R *****
===================================== */

myApp.controller("quizController", [
  "$scope",
  "$http",
  "$sce",
  "$location",
  "$window",
  function($scope, $http, $sce, $location, $window) {
    //uiState = 3;

    /* hide navigation bar */
    document.querySelector(".navigation").classList.add("nav-invisible");

    /* Start with the firt question of the quiz */
    if (lineState === undefined) {
      lineState = 1;
      lastQ = false;
    }

    /* Set the initial quiz question */
    if (lineState == 1) {
      document.querySelector(".quiz__question").innerHTML = question1.question;

      document.querySelector(".quiz__answer1").innerHTML = question1.answer1;
      document.querySelector(".quiz__answer2").innerHTML = question1.answer2;

      /* === PATH ONE === */
      /* first question */

      document
        .querySelector(".quiz__answer2")
        .addEventListener("click", function() {
          if (lineState == 1) {
            lineState = 2;
          }

          if (lineState == 2) {
            document.querySelector(".quiz__question").innerHTML =
              question2.question;

            document.querySelector(".quiz__answer1").innerHTML =
              question2.answer1;
            document.querySelector(".quiz__answer2").innerHTML =
              question2.answer2;
          }
        });

      /* === PATH TWO === */
      document
        .querySelector(".quiz__answer1")
        .addEventListener("click", function() {
          if (lineState == 1) {
            lineState = 3;
          }

          if (lineState == 3 && lastQ == false) {
            document.querySelector(".quiz__question").innerHTML =
              question3.question;

            document.querySelector(".quiz__answer1").innerHTML =
              question3.answer1;
            document.querySelector(".quiz__answer2").innerHTML =
              question3.answer2;
          }
        });
    }

    /* Set the initial quiz questions */
  }
]);

/* =====================================
***** H O M E  C O N T R O L L E R *****
===================================== */

myApp.controller("mainController", function($scope, $rootScope) {
  /* L o c a l   v a r i a b l e s */

  /* hide navigation bar */
  navigationBar.classList.remove("nav-invisible");

  /* Choose the current uiState */
  switch (uiState) {
    case 1:
      $scope.homeType = function() {
        return "vistas/homeTypes/home-li.html";
      };
      break;

    case 2:
      $scope.homeType = function() {
        return "vistas/homeTypes/home-na.html";
      };
      break;

    case 3:
      $scope.homeType = function() {
        return "vistas/homeTypes/home-lm.html";
      };
      break;

    case 4:
      $scope.homeType = function() {
        return "vistas/homeTypes/home-ki.html";
      };
      break;

    case 5:
      $scope.homeType = function() {
        return "vistas/homeTypes/home-vs.html";
      };
      break;

    default:
      break;
  }

  /* Show take quiz message */
  if (Cookies.get("quizState") === undefined) {
    var quizTimer;

    quizTimer = setTimeout(function() {
      document.querySelector(".takeQuiz").style.display = "block";
    }, 5000);
  }
});

/* =======================================
***** A B O U T  C O N T R O L L E R *****
======================================= */

myApp.controller("aboutController", function($scope) {
  /* hide navigation bar */
  navigationBar.classList.remove("nav-invisible");

  /* Choose the current uiState */
  switch (uiState) {
    case 1:
      $scope.aboutType = function() {
        return "vistas/aboutTypes/about-li.html";
      };
      break;

    case 2:
      $scope.aboutType = function() {
        return "vistas/aboutTypes/about-na.html";
      };
      break;

    case 3:
      $scope.aboutType = function() {
        return "vistas/aboutTypes/about-lm.html";
      };
      break;

    case 4:
      $scope.aboutType = function() {
        return "vistas/aboutTypes/about-ki.html";
      };
      break;

    case 5:
      $scope.aboutType = function() {
        return "vistas/aboutTypes/about-vs.html";
      };
      break;

    default:
      break;
  }
});

/* =================================================
***** P O R T A F O L I O  C O N T R O L L E R *****
================================================= */

myApp.controller("portafolioController", function($scope) {
  /* hide navigation bar */
  navigationBar.classList.remove("nav-invisible");

  /* Choose the current uiState */
  switch (uiState) {
    case 1:
      $scope.portafolioType = function() {
        return "vistas/portafolioTypes/portafolio-li.html";
      };
      break;

    case 2:
      $scope.portafolioType = function() {
        return "vistas/portafolioTypes/portafolio-na.html";
      };
      break;

    case 3:
      $scope.portafolioType = function() {
        return "vistas/portafolioTypes/portafolio-lm.html";
      };
      break;

    case 4:
      $scope.portafolioType = function() {
        return "vistas/portafolioTypes/portafolio-ki.html";
      };
      break;

    case 5:
      $scope.portafolioType = function() {
        return "vistas/portafolioTypes/portafolio-vs.html";
      };
      break;

    default:
      break;
  }
});

/* =============================================
***** S E R V I C E S  C O N T R O L L E R *****
============================================= */

myApp.controller("servicesController", function($scope) {
  /* hide navigation bar */
  navigationBar.classList.remove("nav-invisible");

  /* Choose the current uiState */
  switch (uiState) {
    case 1:
      $scope.servicesType = function() {
        return "vistas/servicesTypes/services-li.html";
      };
      break;

    case 2:
      $scope.servicesType = function() {
        return "vistas/servicesTypes/services-na.html";
      };
      break;

    case 3:
      $scope.servicesType = function() {
        return "vistas/servicesTypes/services-lm.html";
      };
      break;

    case 4:
      $scope.servicesType = function() {
        return "vistas/servicesTypes/services-ki.html";
      };
      break;

    case 5:
      $scope.servicesType = function() {
        return "vistas/servicesTypes/services-vs.html";
      };
      break;

    default:
      break;
  }

  /* Linguistic Services JS */
  if (uiState === 1) {
  }
});

/* ===========================================
***** W R I T I N G  C O N T R O L L E R *****
=========================================== */

myApp.controller("writingController", function($scope) {
  /* hide navigation bar */
  navigationBar.classList.remove("nav-invisible");

  /* Choose the current uiState */
  switch (uiState) {
    

    case 3:
      $scope.writingType = function() {
        return "vistas/writingTypes/writing-li.html";
      };
      break;

    default:
      break;
  }
});

/* ===================================================
***** P H O T O G R A P H Y  C O N T R O L L E R *****
=================================================== */

myApp.controller("photographyController", function($scope) {
  /* hide navigation bar */
  navigationBar.classList.remove("nav-invisible");

  /* Choose the current uiState */
  switch (uiState) {
    

    case 3:
      $scope.writingType = function() {
        return "vistas/photographyTypes/photography-li.html";
      };
      break;

    default:
      break;
  }
});

/* =====================================
***** B L O G  C O N T R O L L E R *****
===================================== */

myApp.controller("blogController", function($scope) {
  /* hide navigation bar */
  navigationBar.classList.remove("nav-invisible");

  /* Choose the current uiState */
  switch (uiState) {
    

    case 3:
      $scope.blogType = function() {
        return "vistas/blogTypes/blog-li.html";
      };
      break;

    default:
      break;
  }
});


myApp.controller("ctrl", function($scope) {});

//Bakcground image directive.
myApp.directive("backImg", function() {
  return function(scope, element, attrs) {
    var url = attrs.backImg;
    element.css({
      "background-image": "url(" + url + ")"
    });
  };
});

myApp.directive("myDirect", [
  "$document",
  function($document) {
    function link(scope, element, attrs) {
      element.ready(function() {});

      scope.$on("$viewContentLoaded", function() {
        console.log(" ===> Called on View Load ");
      });
    }

    return {
      link: link
    };
  }
]);
