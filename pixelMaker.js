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
        // clicker[i].addEventListener('click', color)
        clicker[i].addEventListener('mousedown', color);
        clicker[i].addEventListener('mouseover', color2);
        clicker[i].addEventListener('mouseup', color3);
        var click = false

        function color() {

            this.style.background = currentColor
            click = true

        }

        function color2() {
            if (click === true) {
                this.style.background = currentColor
            }
        }

        function color3() {
            this.style.background = currentColor
            click = false
        }

        pixel.style.width = '15px';
        pixel.style.paddingBottom = '15px';
        pixel.style.background = 'white';
        pixel.style.float = 'left';
        pixel.style.border = '.1px solid black';

        editor.style.width = '446px';
        editor.style.height = '450px';
        editor.style.marginLeft = '2%';
        editor.style.marginright = '20%'
        editor.style.marginBottom = '0%';
        editor.style.float = 'left'
        editor.style.background = 'black'

    }
}
//color selector
for (j = 0; j < 98; j++) {
    if (j < 98) {
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

        colorPixel.style.width = '30px';
        colorPixel.style.height = '30px';
        colorPixel.style.background = getRandomColor();
        colorPixel.style.float = 'left';
        colorPixel.style.paddingBottom = '0%';
        colorPixel.style.border = '.1px solid black';

        colorSelector.style.width = '228px';
        colorSelector.style.height = '400px';
        colorSelector.style.marginLeft = '20%';
        colorSelector.style.marginTop = '5px'
        colorSelector.style.float = 'left';
        colorSelector.style.background = 'black'
    }
}
//current color pixel
for (k = 0; k < 1; k++) {
    var currentColorPixel = document.createElement('div');
    currentColorPixel.className = 'currentColorPixel';
    var currentColorSelector = document.getElementById('currentColor');
    var shaBang2 = currentColorSelector.appendChild(currentColorPixel);
    var smallest = document.getElementById('smallest')

    currentColorPixel.style.width = '50px';
    currentColorPixel.style.height = '50px';
    currentColorPixel.style.background = 'white';
    currentColorPixel.style.marginTop = '200px'
    currentColorPixel.style.marginLeft = '2%'
    currentColorPixel.style.marginBottom = '2%'
    currentColorPixel.style.border = '.1px solid black';
    currentColorPixel.style.float = 'left';
    currentColorPixel.style.border = '2px solid black'
}
