$(function() {
    var s = Snap("#svg");

    var paths = [
        'M100, 60 m -50, 0 a 50,50 0 1,0 100,0a 50,50 0 1,0 -100,0 z',
        'M50, 20 l100,0  0,100  -100,0  0,-100 z',
        'M100, 20 l50,100  -100,0 z',
        //'M100 80 L120 94.641 117.321 70 140 60 117.321 50 120 24.641 100 40 80 24.641 82.679 50 60 60 82.679 70 80 94.641 z'
    ];

    var colors = [
        '#009871',
        '#3498db',
        '#f39c12',
        '#e74c3c',
        '#800080'

    ];

    var animPath = s.path(paths[0]);
    var currentPath = 0;
    animPath.attr({
        fill: '#009871',
        stroke: "#009871",
        strokeWidth: 5,
        strokeOpacity: .7
    });

    animPath.click(function () {
        currentPath++;
        if (currentPath >= paths.length) {
            currentPath = 0;
        }
        
        var randomColor = colors[Math.floor(Math.random() * colors.length)];

        animPath.animate({ d: paths[currentPath], fill: randomColor, stroke:randomColor }, 500);
    });
})