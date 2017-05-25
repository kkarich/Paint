function Converter (sourceCanvas, destinationCanvas, destinationWidth, destinationHeight) {
    this.sourceCanvas = sourceCanvas;
    this.sourceContext = sourceCanvas.getContext("2d");
    this.destinationCanvas = destinationCanvas;
    this.destinationContext = destinationCanvas.getContext("2d");
    this.destinationWidth = destinationWidth;
    this.destinationHeight = destinationHeight;
    
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
        var imageSquares = [],
            squareWidth = sourceCanvas.width / destinationWidth,
            squareHeight = sourceCanvas.height / destinationHeight;
            
        debugger;
            
        for (var i = 0; i < destinationWidth; i++) {
            for (var j = 0; i < destinationHeight; j++) {
                var imageSquare = this.sourceContext.getImageData(i * squareWidth, j * squareHeight, squareWidth, squareHeight);
                
                imageSquares.push(imageSquare);
            }
        }
        return imageSquares;
    }
    
    this.mixImageSquares = function (squares) {
        var mixedSquares = [];
        return mixedSquares;
    }
    
    this.paintImageSquaresOnDestination = function (squares) {
        
    }
}