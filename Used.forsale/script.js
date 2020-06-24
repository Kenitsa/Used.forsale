$('.humburger').click(function(){
    $(this).addClass('open');
    $('body').toggleClass('open');
    $('.menu-layout').addClass('active');
});

$('.burger-active').click(function(){
    $('.humburger').removeClass('open');
    $('body').removeClass('open');
    $('.menu-layout').removeClass('active');
});

$('.checkbox li').click(function () {
    $(this).toggleClass('active');
});

$('.choose-time span').click(function () {
    $(this).parent().children().removeClass('active');
    $(this).toggleClass('active');

    let tabIndex = $(this).attr('data-tab');

    $(this).closest('.chart').children('.slide[data-tab]').css('display', 'none');
    $('.slide[data-tab=' + tabIndex + ']').css('display', 'block');
});


// Orange Chart Line
var context = d3.select('#orange').node().getContext('2d');
var lineGenerator = d3.line().context(context);
var points = [
    [0, 300],
    [50, 280],
    [110, 225],
    [150, 170],
    [200, 150],
    [250, 170],
    [300, 210],
    [350, 235],
    [400, 275],
    [450, 215],
    [500, 192],
    [550, 150],
    [600, 130],
    [650, 95],
];
context.strokeStyle = '#FD9975';
context.lineWidth  = 4;
context.beginPath();
lineGenerator(points);
context.stroke();



// Gray Chart Line
var contextGray = d3.select('#gray').node().getContext('2d');
var lineGeneratorGray = d3.line().context(contextGray);
var pointsGray = [
    [0, 210],
    [116, 213],
    [175, 260],
    [225, 265],
    [275, 245],
    [325, 195],
    [375, 165],
    [425, 125],
    [475, 160],
    [525, 158],
    [575, 178],
    [625, 178],
    [650, 190],
];
contextGray.strokeStyle = '#E9DFD8';
contextGray.lineWidth  = 4;
contextGray.beginPath();
lineGeneratorGray(pointsGray);
contextGray.stroke();


// Orange-2 Chart Line
var context2Orange = d3.select('#orange-2').node().getContext('2d');
var lineGenerator2Orange = d3.line().context(context2Orange);
var points2Orange = [
    [0, 240],
    [50, 280],
    [110, 225],
    [150, 170],
    [200, 140],
    [250, 170],
    [300, 240],
    [350, 235],
    [400, 275],
    [450, 215],
    [500, 172],
    [550, 150],
    [600, 130],
    [650, 75],
];
context2Orange.strokeStyle = '#FD9975';
context2Orange.lineWidth  = 4;
context2Orange.beginPath();
lineGenerator2Orange(points2Orange);
context2Orange.stroke();



// Gray-2 Chart Line
var context2Gray = d3.select('#gray-2').node().getContext('2d');
var lineGenerator2Gray = d3.line().context(context2Gray);
var points2Gray = [
    [0, 160],
    [116, 213],
    [175, 260],
    [225, 265],
    [275, 245],
    [325, 165],
    [375, 185],
    [425, 125],
    [475, 160],
    [525, 168],
    [575, 128],
    [625, 178],
    [650, 140],
];
context2Gray.strokeStyle = '#E9DFD8';
context2Gray.lineWidth  = 4;
context2Gray.beginPath();
lineGenerator2Gray(points2Gray);
context2Gray.stroke();

// Orange-3 Chart Line
var context3Orange = d3.select('#orange-3').node().getContext('2d');
var lineGenerator3Orange = d3.line().context(context3Orange);
var points3Orange = [
    [0, 220],
    [50, 280],
    [110, 225],
    [150, 170],
    [200, 150],
    [250, 170],
    [300, 140],
    [350, 235],
    [400, 275],
    [450, 265],
    [500, 192],
    [550, 150],
    [600, 140],
    [650, 55],
];
context3Orange.strokeStyle = '#FD9975';
context3Orange.lineWidth  = 4;
context3Orange.beginPath();
lineGenerator3Orange(points3Orange);
context3Orange.stroke();



// Gray-3 Chart Line
var context3Gray = d3.select('#gray-3').node().getContext('2d');
var lineGenerator3Gray = d3.line().context(context3Gray);
var points3Gray = [
    [0, 150],
    [116, 213],
    [175, 260],
    [225, 245],
    [275, 245],
    [325, 195],
    [375, 165],
    [425, 125],
    [475, 190],
    [525, 158],
    [575, 178],
    [625, 198],
    [650, 130],
];
context3Gray.strokeStyle = '#E9DFD8';
context3Gray.lineWidth  = 4;
context3Gray.beginPath();
lineGenerator3Gray(points3Gray);
context3Gray.stroke();


// JSON data for the charts

var chartPoints = [152, 187, 266, 216, 234, 210, 141, 123, 130, 38, 40, 130, 120, 69, 145, 180, 190, 95, 135, 165, 100, 130, 180, 169, 145, 180, 140, 95, 135, 165, 61, 152, 120, 183, 234, 279, 141, 123, 230, 136, 200, 230, 120, 69, 245, 280, 110, 195, 235, 165, 240, 130, 120, 69, 145, 180, 210, 95, 235, 165, 152, 187, 141, 216, 43, 210, 265, 210, 276, 188, 200, 150, 130, 169, 245, 180, 210, 195, 135, 165, 190, 170, 250, 169, 145, 180, 210, 195, 200, 165];


$('.col').each(function(i, index){
    var chartHeight = chartPoints[i] + 'px';
    index.style.height = chartHeight;
});