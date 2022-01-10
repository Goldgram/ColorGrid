import React, { useEffect } from 'react'
import './App.css'

function App() {
  const url = './pikachu.png'

      // var canvasContext;

  const isImage = (element:any) => {
    return element instanceof HTMLImageElement;
  }

  const imgLoaded = (element:any) => {
    return element.complete && element.naturalHeight !== 0;
  }

  const waitForImageToLoad = (element:any, timeout:any) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function(){
        if (imgLoaded(element)) {
          return resolve(element);
        }
        return resolve(waitForImageToLoad(element, 100));
      }, timeout);
    });
  }

  const createCanvas = (element:any) => {
    var canvas:any = document.getElementById("originalCanvas");
    canvas.width = element.width;
    canvas.height = element.height;
    canvas.getContext("2d").drawImage(element, 0, 0, element.width, element.height);
  }

  const createSecondCanvas = (element:any) => {
    var canvas:any = document.getElementById("secondCanvas");
    canvas.width = element.width;
    canvas.height = element.height;
    var canvasContext = canvas.getContext("2d")
    canvasContext.drawImage(element, 0, 0, element.width, element.height);

    for (var i = 0; i < element.width; i++) {
      for (var j = 0; j < element.height; j++) {
        var pixelData = canvasContext.getImageData(i, j, 1, 1);
        // console.log('R', pixelData[0])
        // console.log('G', pixelData[1])
        // console.log('B', pixelData[2])
        // console.log('A', pixelData[3])
        if (isSolidNode(pixelData, i, j)) {
          const newPixelData = getClosestColor(pixelData)

          canvasContext.putImageData(newPixelData, i, j);
        }
      }
    }
  }

  const getClosestColor = (pixelData: any) => {
    pixelData.data[0] = 100
    pixelData.data[1] = 100
    pixelData.data[2] = 100
    return pixelData
  }

  function isSolidNode(pixelData: any, x: any, y: any) {
    var alpha = pixelData.data[3];
    return alpha > 80;
  }

  const scan = (url:any) => {
    const element = document.createElement("img");
    element.src= url;

    if (!isImage(element)) {
      console.log('invalid image')
    }

    waitForImageToLoad(element, 0).then((element) => {
      createCanvas(element);
      createSecondCanvas(element);
    }).catch(() => {
      console.log('error')
    })
  }


  useEffect(() => {
    scan(url);
  });

  return (
    <>
      <canvas id='originalCanvas'></canvas>
      <canvas id='secondCanvas'></canvas>
    </>
  )
}

export default App
