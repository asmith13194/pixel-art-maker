//background image
var body = document.getElementById('body');
var hills = 'http://files.all-free-download.com//downloadfiles/wallpapers/1440_900/peaceful_lake_wallpaper_landscape_nature_1208.jpg';
body.style.backgroundImage = "url('" + hills + "')";
body.style.src = hills;
//current color
var currentColor = 'white'
//editor
for (i = 0; i < 702; i++) {
    if (i < 702) {
        var pixel = document.createElement('div');
        pixel.className = 'pixel'
        var editor = document.getElementById('editor')
        var shaBang = editor.appendChild(pixel);
        var clicker = document.getElementsByClassName('pixel');
        clicker[i].addEventListener('click', color, false);

        function color() {
            this.style.background = currentColor
        }

        pixel.style.width = '15px';
        pixel.style.height = '15px';
        pixel.style.background = 'white';
        pixel.style.float = 'left';
        pixel.style.border = '.1px solid black';

        editor.style.width = '450px';
        editor.style.height = '450px';
        editor.style.marginLeft = '20%';
        editor.style.marginTop = '0%'
        editor.style.marginBottom = '0%';
        editor.style.float = 'left'

    }
}
//color selector
for (j = 0; j < 100; j++) {
    if (j < 100) {
        var colors = ['red', 'green', 'blue', 'yellow', 'salmon', 'orange', 'skyblue', 'brown', 'purple', 'teal'];
        var colorPixel = document.createElement('div');
        colorPixel.className = 'colorPixel'
        var colorSelector = document.getElementById('colorSelector')
        var shaBang2 = colorSelector.appendChild(colorPixel);
        // var clicker = document.getElementsByClassName('colorPixel');
        // clicker[i].addEventListener('click', color, false);
        var clicker2 = document.getElementsByClassName('colorPixel');
        clicker2[j].addEventListener('click', changeColor, false);
        // random color generator
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function changeColor(event) {
            currentColor = event.target.style.background
            currentColorPixel.style.background = currentColor
        }

        colorPixel.style.width = '9%';
        colorPixel.style.height = '9%';
        colorPixel.style.background = getRandomColor();
        colorPixel.style.float = 'left';
        colorPixel.style.paddingBottom = '9%';
        colorPixel.style.border = '.1px solid black';

        colorSelector.style.width = '400px';
        colorSelector.style.height = '200px';
        colorSelector.style.marginLeft = '10%';
        colorSelector.style.float = 'left';


    }
}
//current color pixel
for (k = 0; k < 1; k++) {
    var currentColorPixel = document.createElement('div');
    currentColorPixel.className = 'currentColorPixel';
    var currentColorSelector = document.getElementById('currentColor');
    var shaBang2 = currentColorSelector.appendChild(currentColorPixel);
    var h3 = document.getElementById('h3');

    currentColorPixel.style.width = '20px';
    currentColorPixel.style.height = '20px';
    currentColorPixel.style.background = 'white';
    currentColorPixel.style.marginLeft = '4%'
    currentColorPixel.style.border = '.1px solid black';
    currentColorPixel.style.float = 'left';
    h3.style.marginLeft = '40px';


}
