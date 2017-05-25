function Converter (sourceCanvas, destinationCanvas, destinationWidth, destinationHeight) {
    this.sourceCanvas = sourceCanvas;
    this.destinationCanvas = destinationCanvas;
    this.destinationWidth = destinationWidth;
    this.destinationHeight = destinationHeight
    
    this.convert = function () {
        // steps
        // get image data for squars
        // blur color for each square
        // paint new squares
        var imageSquares = this.getImageSquares();
        var mixedImageSquares = this.mixImageSquares(imageSquares);
        this.paintImageSquaresOnDestination(mixedImageSquares);
        
    }
    
    this.getImageSquares = function () {
        
    }
    
    this.mixImageSquares = function (squares) {
        var mixedSquares = 
        return mixedSquares;
    }
    
    this.paintImageSquaresOnDestination = function (squares) {
        
    }
}