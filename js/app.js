var app = ( function () {
    var canvas = document.getElementById( 'canvas' ),
        context = canvas.getContext( '2d' ),
 
        // API
        public = {};
 
        // Public methods goes here...
 
        return public;
} () );

public.loadPicture = function () {
    var imageObj = new Image();
    imageObj.src = 'bebidap.jpg';
    document.getElementById("myImg").src = "entropy.jpg";
 
    imageObj.onload = function () {
        context.drawImage( imageObj, 0, 0 );
    }
};

public.getImgData = function () {
    return context.getImageData( 0, 0, canvas.width, canvas.height );
};
// app.loadPicture();
app.getImgData();