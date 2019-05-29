// Build module.
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);
//let portafolioOn = false;
var quizState;
var uiState;

/* Choose a random UI to as default */
if (uiState === undefined) {
    uiState = Math.floor(Math.random() * 5) + 1;
}

/* Result A (Linguistic) */
function linguistic(){ 
    uiState = 1;
}

/* Result B (Naturalistic) */
function naturalistic(){ 
    uiState = 2;
}

/* Result C (Logical Mathemathical) */
function logical(){ 
    uiState = 3;
}

/* Result D (Kinesthetic) */
function kinesthetic(){ 
    uiState = 4;
}

/* Result E (Viso Spatial) */
function viso(){ 
    uiState = 5;
}

// Routes configuration. 
myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'vistas/home.html',
        controller  : 'mainController'
    })
    .when('/about', {
        templateUrl : 'vistas/about.html',
        controller  : 'aboutController'
    })
    .when('/portafolio', {
        templateUrl : 'vistas/portafolio.html',
        controller  : 'portafolioController'
    })
    .when('/services', {
        templateUrl : 'vistas/services.html',
        controller  : 'servicesController'
    })

    $routeProvider
    .when('/ui-quiz', {
        templateUrl : 'vistas/quiz.html',
        controller  : 'quizController'
    }) 

    .otherwise({
        redirectTo: '/'
    });

    /* Remember to uncomment */
    //$locationProvider.html5Mode(true);
    
});

/* =====================================
***** Q U I Z  C O N T R O L L E R *****
===================================== */ 
myApp.controller('quizController', ['$scope','$http','$sce','$location', '$window', function($scope,$http,$sce, $location, $window){
    //uiState = 3;
    let lineState;

    /* Start with the firt question of the quiz */
    if (lineState === undefined) {
        lineState = 1;
    }

    // document.querySelector('.btn').addEventListener('click', function(quizState) {
    //     console.log('quiz is finished');
    //     //quizState = true;
    //     quizState = false;
    //     uiState = 3;
    //     //return $location.path('/');;
    // });

    // if (quizState = true) {
    //     console.log('quiz is running');
    // }
    
    //$scope.uiState = uiState;
    
    //return $scope.uiState;
    
    //return $location.path('/');

    // Reload UI 

    // do {

    //     if (quizState == true) {

    //     } else {
    //         return reloadUI()
    //     }

    // } while (quizState== true);

    /* Quiz question arrays */

    let question1 = {
        question: "Do you prefer a menu with icons or text?",
        answer1: `<span class="icon icon-home"></span> icons`,
        answer2: "Only text"
    }

    let question2 = {
        question: "How do you prefer the content being displayed?",
        answer1: `<a onclick="linguistic()" href="/">Text short and concise</a>`,
        answer2: `<a onclick="naturalistic()" href="/">Text complemented with pictures</a>`
    }

    let question3 = {
        question: "",
        answer1: "",
        answer2: ""
    }

    let question4 = {
        question: "",
        answer1: "",
        answer2: ""
    }

    /* Set the initial quiz question */
    if (lineState == 1) {
        document.querySelector('.quiz__question').innerHTML = question1.question;

        document.querySelector('.quiz__answer1').innerHTML = question1.answer1;
        document.querySelector('.quiz__answer2').innerHTML = question1.answer2;
    }

    /* === PATH ONE === */
    /* first question */ 
    document.querySelector('.quiz__answer2').addEventListener('click', function() {
        document.querySelector('.quiz__question').innerHTML = question2.question;

        document.querySelector('.quiz__answer1').innerHTML = question2.answer1;
        document.querySelector('.quiz__answer2').innerHTML = question2.answer2;

        lineState = 2;
    });
    /* === PATH TWO === */
    document.querySelector('.quiz__answer1').addEventListener('click', function() {

        document.querySelector('.quiz__question').innerHTML = question3.question;

        document.querySelector('.quiz__answer1').innerHTML = question3.answer1;
        document.querySelector('.quiz__answer2').innerHTML = question3.answer2;

        lineState = 3;
    });
    /* Set the initial quiz questions */
    if (lineState == 3) {
    }
}]);

/* =====================================
***** H O M E  C O N T R O L L E R *****
===================================== */ 
myApp.controller('mainController', function ($scope, $rootScope) {

    /* Choose the current uiState */
    switch (uiState) {
        case 1:
            $scope.homeType = function () {
                    return 'vistas/homeTypes/home-li.html';
            } 
            break;

        case 2:
            $scope.homeType = function () {
                    return 'vistas/homeTypes/home-na.html';
            } 
            break;

        case 3:
            $scope.homeType = function () {
                    return 'vistas/homeTypes/home-lm.html';
            } 
            break;

        case 4:
            $scope.homeType = function () {
                    return 'vistas/homeTypes/home-ki.html';
            } 
            break;
            
        case 5:
            $scope.homeType = function () {
                    return 'vistas/homeTypes/home-vs.html';
            } 
            break;
    
        default:
            break;
    }
});

/* =======================================
***** A B O U T  C O N T R O L L E R *****
======================================= */ 
myApp.controller('aboutController', function ($scope) {
    /* Choose the current uiState */
    switch (uiState) {
        case 1:
            $scope.aboutType = function () {
                    return 'vistas/aboutTypes/about-li.html';
            } 
            break;

        case 2:
            $scope.aboutType = function () {
                    return 'vistas/aboutTypes/about-na.html';
            } 
            break;

        case 3:
            $scope.aboutType = function () {
                    return 'vistas/aboutTypes/about-lm.html';
            } 
            break;

        case 4:
            $scope.aboutType = function () {
                    return 'vistas/aboutTypes/about-ki.html';
            } 
            break;
            
        case 5:
            $scope.aboutType = function () {
                    return 'vistas/aboutTypes/about-vs.html';
            } 
            break;

        default:
            break;
    }
});

/* =================================================
***** P O R T A F O L I O  C O N T R O L L E R *****
================================================= */ 
myApp.controller('portafolioController', function ($scope) {
    /* Choose the current uiState */
    switch (uiState) {
        case 1:
            $scope.portafolioType = function () {
                return 'vistas/portafolioTypes/portafolio-li.html';
            } 
            break;
    
        case 2:
            $scope.portafolioType = function () {
                return 'vistas/portafolioTypes/portafolio-na.html';
            } 
            break;
    
        case 3:
            $scope.portafolioType = function () {
                    return 'vistas/portafolioTypes/portafolio-lm.html';
            } 
            break;
    
        case 4:
            $scope.portafolioType = function () {
                    return 'vistas/portafolioTypes/portafolio-ki.html';
            } 
            break;
                
        case 5:
            $scope.portafolioType = function () {
                    return 'vistas/portafolioTypes/portafolio-vs.html';
            } 
            break;
    
        default:
            break;
    }


    /* Gallery Controller Variables */
    
    let imageIndex = 0; // Current image.
    let displayImg = document.querySelector('.gallery__visor'); // Global Visor image displayer.
    let galleryImg = document.querySelectorAll('.gallery__item img'); // Select the thumbnail gallery image.

    // Arrow controller
    let arrowController = (e) => {
        let direction = e.target.dataset.direction;

        /* Active experiment */
        galleryImg[imageIndex].classList.toggle('active');
        /**/
        /* Display Transition Experiment */
        displayImg.querySelector('.visor--img').classList.toggle('transition-fadeIn');
        displayImg.querySelector('.visor--img').classList.toggle('transition-fadeInPersist');
        /**/

        if (direction == "left") {
            if (imageIndex > 0) {
                imageIndex--;
            } else {
                imageIndex = galleryImg.length - 1;
            }
        } else {
            if (imageIndex < galleryImg.length - 1) {
                imageIndex++;
            } else {
                imageIndex = 0;
            }
        }

        //let visor = document.querySelector('.visor');
        let newImg = galleryImg[imageIndex].src;
        displayImg.querySelector('.visor--img').src = newImg;
        /* Active experiment */
        galleryImg[imageIndex].classList.toggle('active');
        /**/
    }

    /* Change the image to display */
    let changeVisorImg = e => {
        let newImg = e.target.src;
        /* Active image */
        galleryImg[imageIndex].classList.toggle('active');
        e.target.classList.toggle('active');
        /* */

        /* Display Transition Experiment */
        displayImg.querySelector('.visor--img').classList.toggle('transition-fadeIn');
        displayImg.querySelector('.visor--img').classList.toggle('transition-fadeInPersist');
        /**/

        let thisImageIndex = e.target.dataset.index; //Select the index data of the current image. 
        imageIndex = thisImageIndex; //Change the global value of the imageIndex.

        displayImg.querySelector('.visor--img').src = newImg; //Replace the image src for the new one.
    }

    /* Start Full View Gallery */
    let fullView = e => {
        displayImg = document.querySelector('.full__container'); // Change to the full view visor displayer.
        let newImg = e.target.src;
        /* */
        let fullViewImage = displayImg.querySelector('.visor--img'); //Select the index data of the current image.
        fullViewImage.src = newImg; //Change the global value of the imageIndex.

        document.querySelector('.full__view').style.display = 'grid';
    }

    /* Close Full View Gallery */
    let closeFullView = e => {
        let imgDisplayer = displayImg.querySelector('.visor--img').src; //Locate the last value of the image full view displayer.
        displayImg = document.querySelector('.gallery__visor'); //Restore the principal visor image displayer.
        displayImg.querySelector('.visor--img').src = imgDisplayer; // Asign the last image full view displayer value.
        document.querySelector('.full__view').style.display = 'none'; //Delete de full view element.
    }



    /* Change image onClick */
    for (let i = galleryImg.length - 1; i >= 0; i--) {
        galleryImg[i].addEventListener('click', changeVisorImg);
    }
    /* */

    /* Call Arrow controller function */
    document.querySelectorAll('.arrow').forEach(e => {
        e.addEventListener('click', arrowController);
    });

    /* Call Full View Gallery Controller */
    document.querySelector('.gallery__visor .visor--img').addEventListener('click', fullView);
    document.querySelector('.close').addEventListener('click', closeFullView); //Call close full view function.
    document.querySelector('.close').addEventListener('click', closeFullView); //Call close full view function.

});

/* =============================================
***** S E R V I C E S  C O N T R O L L E R *****
============================================= */ 

myApp.controller('servicesController', function ($scope) {
    /* Choose the current uiState */
    switch (uiState) {
        case 1:
            $scope.servicesType = function () {
                    return 'vistas/servicesTypes/services-li.html';
            } 
            break;

        case 2:
            $scope.servicesType = function () {
                    return 'vistas/servicesTypes/services-na.html';
            } 
            break;

        case 3:
            $scope.servicesType = function () {
                    return 'vistas/servicesTypes/services-lm.html';
            } 
            break;

        case 4:
            $scope.aboutType = function () {
                    return 'vistas/servicesTypes/services-ki.html';
            } 
            break;
            
        case 5:
            $scope.aboutType = function () {
                    return 'vistas/servicesTypes/services-vs.html';
            } 
            break;

        default:
            break;
    }
});



myApp.controller('ctrl', function ($scope) {
});


//Bakcground image directive. 
myApp.directive('backImg', function () {
    return function (scope, element, attrs) {
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url + ')'
        });
    };
});


myApp.directive('myDirect',['$document', function( $document ){

    function link( scope , element , attrs ){

        element.ready( function(){

        } );

        scope.$on( '$viewContentLoaded' , function(){

            console.log(" ===> Called on View Load ") ;

        } );

    }

    return {
        link: link
    };

}] );