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
            
        for (var i = 0; i < destinationHeight; i++) {
            var rowSquares = [];
            for (var j = 0; j < destinationWidth; j++) {
                
                var imageSquare = this.sourceContext.getImageData(i * squareWidth, j * squareHeight, squareWidth, squareHeight);
                
                rowSquares.push(imageSquare);
            }
            
            imageSquares.push(rowSquares);
        }
        return imageSquares;
    }
    
    this.mixImageSquares = function (squareMatrix) {
        return squareMatrix.map(function(row){
            return row.map(function(square){
                square.color = convertImgDataToRGB(square.data);
                return square;
            });
        });
    }
    
    this.paintImageSquaresOnDestination = function (squares) {
        var squareWidth = destinationCanvas.width / destinationWidth,
            squareHeight = destinationCanvas.height / destinationHeight;
            
        for (var i in squares) {
            for (var j in squares[i]) {
                var squareData = squares[i][j];
                
                this.destinationContext.fillStyle = squareData.color;
                this.destinationContext.fillRect(i * squareWidth, j * squareHeight, squareData.width, squareData.height);
            }
        }
        
    }
}


function convertImgDataToRGB (imgData) {
    var r = 0,
    g = 0,
    b = 0, 
    a = 0,
    rArray = [],
    gArray = [],
    bArray = [],
    aArray = [],
    count = imgData.length / 4;
    
    for (var i in imgData) {
        if (i % 4 === 0) {
            rArray.push(imgData[i]);
            
        } else if (i % 4 === 1) {
            gArray.push(imgData[i]);
            
        } else if (i % 4 === 2) {
            bArray.push(imgData[i]);
            
        } else {
            aArray.push(imgData[i]);
            
        }
        
        
    };
    r = median(rArray);
    g = median(gArray);
    b = median(bArray);
    a = median(aArray);
    
    
    return `rgba(${r}, ${g}, ${b}, ${a})`;
    
}

function median(values) {

    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}






