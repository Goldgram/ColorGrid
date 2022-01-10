import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState<Array<number[]> | undefined>(undefined)

  const BRICK_COLORS = [
    {name:'Black', color: [0,0,0], available:true, price:0.01},
    {name:'Blue', color: [0, 87, 166], available:true, price:0.01},
    {name:'Bright Green', color: [16, 203, 49], available:true, price:0.01},
    {name:'Bright Light Orange', color: [255, 199, 0], available:true, price:0.01},
    {name:'Bright Light Yellow', color: [254, 237, 131], available:true, price:0.01},
    {name:'Bright Pink', color: [247, 188, 248], available:true, price:0.01},
    {name:'Brown', color: [83, 33, 21], available:true, price:0.01},
    {name:'Coral', color: [255, 129, 114], available:true, price:0.01},
    {name:'Dark Azure', color: [0, 159, 224], available:true, price:0.01},
    {name:'Dark Blue', color: [36, 55, 87], available:true, price:0.01},
    {name:'Dark Bluish Gray', color: [89, 93, 96], available:true, price:0.01},
    {name:'Dark Brown', color: [51, 0, 0], available:true, price:0.01},
    {name:'Dark Gray', color: [107, 90, 90], available:true, price:0.01},
    {name:'Dark Green', color: [46, 85, 67], available:true, price:0.01},
    {name:'Dark Orange', color: [180, 84, 8], available:true, price:0.01},
    {name:'Dark Pink', color: [239, 91, 179], available:true, price:0.01},
    {name:'Dark Purple', color: [95, 38, 131], available:true, price:0.01},
    {name:'Dark Red', color: [106, 14, 21], available:true, price:0.01},
    {name:'Dark Tan', color: [144, 116, 80], available:true, price:0.01},
    {name:'Dark Turquoise', color: [0, 162, 160], available:true, price:0.01},
    {name:'Green', color: [0, 146, 61], available:true, price:0.01},
    {name:'Lavender', color: [211, 189, 227], available:true, price:0.01},
    {name:'Light Aqua', color: [216, 239, 221], available:true, price:0.01},
    {name:'Light Bluish Gray', color: [175, 181, 200], available:true, price:0.01},
    {name:'Light Gray', color: [156, 156, 156], available:true, price:0.01},
    {name:'Lime', color: [196, 224, 1], available:true, price:0.01},
    {name:'Maersk Blue', color: [125, 193, 216], available:true, price:0.01},
    {name:'Magenta', color: [183, 34, 118], available:true, price:0.01},
    {name:'Medium Azure', color: [107, 206, 224], available:true, price:0.01},
    {name:'Medium Blue', color: [130, 173, 216], available:true, price:0.01},
    {name:'Medium Lavender', color: [198, 137, 217], available:true, price:0.01},
    {name:'Medium Nougat', color: [227, 160, 91], available:true, price:0.01},
    {name:'Orange', color: [255, 126, 21], available:true, price:0.01},
    {name:'Pink', color: [255, 193, 203], available:true, price:0.01},
    {name:'Purple', color: [165, 73, 156], available:true, price:0.01},
    {name:'Red', color: [179, 0, 5], available:true, price:0.01},
    {name:'Reddish Brown', color: [137, 53, 30], available:true, price:0.01},
    {name:'Sand Blue', color: [136, 153, 171], available:true, price:0.01},
    {name:'Sand Green', color: [162, 191, 163], available:true, price:0.01},
    {name:'Tan', color: [222, 198, 156], available:true, price:0.01},
    {name:'White', color: [255, 255, 255], available:true, price:0.01},
    {name:'Yellow', color: [255, 224, 0], available:true, price:0.01},
    {name:'Yellowish Green', color: [231, 242, 167], available:true, price:0.01}
  ]

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

  const createFirstCanvas = (element:any) => {
    var canvas:any = document.getElementById("originalCanvas");
    const factor = 4
    canvas.width = element.width*factor;
    canvas.height = element.height*factor;
    canvas.getContext("2d").drawImage(element, 0, 0, element.width*factor, element.height*factor);
  }

  const createSecondImage = (element:any) => {
    // var canvas:any = document.getElementById("secondCanvas");
    var canvas: any = document.createElement("canvas");
    canvas.width = element.width;
    canvas.height = element.height;
    var canvasContext = canvas.getContext("2d")
    canvasContext.drawImage(element, 0, 0, element.width, element.height);

    const array2d = create2dArray(element.height, element.width)

    const array2dIndexes = array2d.map((c1, i1) => {
      return c1.map((c2, i2) => {
        var pixelData = canvasContext.getImageData(i2, i1, 1, 1);
        if (isSolidNode(pixelData, i1, i2)) {
          // return pixelData.data
          return getClosestColorIndex(pixelData)
        } else {
          return c2
        }
      })
    })

    // console.log(array2dIndexes)
    setResult(array2dIndexes)
  }

  const create2dArray = (height: number, width: number) => {
    const array2d = new Array(height).fill(undefined).map(() => {
      return new Array(width).fill(undefined)
    })
    return array2d
  }

  const getClosestColorIndex = (pixelData: any) => {
    const r1 = pixelData.data[0]
    const g1 = pixelData.data[1]
    const b1 = pixelData.data[2]
    const average = (r1 + g1 + b1) / 3

    const diffArray = BRICK_COLORS.map(c => {
      const r2 = c.color[0]
      const g2 = c.color[1]
      const b2 = c.color[2]

      const diff = Math.sqrt(Math.pow((r2-r1), 2) + Math.pow((g2-g1), 2) + Math.pow((b2-b1), 2))
      return diff
    })
    // console.log('diffArray', diffArray)
    // console.log('smallestIndex', getSmallestIndex(diffArray))

    return getSmallestIndex(diffArray)
  }

  const getSmallestIndex = (array: number[]) => {
    var smallestValue = 255;
    var smallestIndex = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] < smallestValue) {
        smallestValue = array[i];
        smallestIndex = i;
      }
    }
    return smallestIndex;
   }

  const getAbsoluteDiff = (num1:number, num2:number) => {
    return Math.abs(num1 - num2)
  }

  const isSolidNode = (pixelData: any, x: any, y: any) => {
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
      createFirstCanvas(element);
      createSecondImage(element);
    })
  }

  const getColorFromIndex = (index: number) => {
    // return `rgba(${BRICK_COLORS[index].color.join(',')}, 1)`

    return getColorFromArray(BRICK_COLORS[index].color)
  }

  const getColorFromArray = (array: number[]) => {
    const newArray = [
      array[0],
      array[1],
      array[2]
    ]
    return `rgba(${newArray.join(',')}, 1)`
  }


  useEffect(() => {
    // const url = './example.png'
    // const url = './pikachu.png'
    // const url = './firstline.png'
    const url = './charizard.png'
    scan(url);
  }, []);

  return (
    <>
      <canvas id='originalCanvas'></canvas>
      <canvas id='secondCanvas'></canvas>

      {result ? <div style={{ border: '1px solid grey', width: '60000px'}}>
        {result.map((r1, k1) => {
          return <div key={k1} style={{ display: 'flex'}}>
            {r1.map((r2, k2) => {
              return <div key={k2} style={{
                width:'4px',
                height:'4px',
                backgroundColor: r2 === undefined ? 'white': getColorFromIndex(r2)
              }}></div>
            })}
          </div>
        })}</div> : undefined}

      <br/>
      <br/>
      <br/>

      <div>Colors:</div>
      {BRICK_COLORS.map((c, index) => {
        return <div key={index} style={{
          backgroundColor: getColorFromIndex(index)
        }}>{c.name} ({c.price})</div>
      })}
    </>
  )
}

export default App
