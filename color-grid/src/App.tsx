import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState<Array<number[]> | undefined>(undefined)
  const [report, setReport] = useState<number[] | undefined>(undefined)
  const [imageWidth, setImageWidth] = useState<number>(0)
  const [imageHeight, setImageHeight] = useState<number>(0)

  const BRICK_COLORS = [
    { name: 'White', color: [255, 255, 255], price: 0.05 },// this needs to be first
    { name: 'Black', color: [0, 0, 0], price: 0.05 },
    { name: 'Blue', color: [0, 87, 166], price: 0.05 },
    { name: 'Bright Green', color: [16, 203, 49], price: 0.06 },
    { name: 'Bright Light Orange', color: [255, 199, 0], price: 0.06 },
    { name: 'Bright Light Yellow', color: [254, 237, 131], price: 0.05 },
    { name: 'Bright Pink', color: [247, 188, 248], price: 0.07 },
    { name: 'Brown', color: [83, 33, 21], price: 0.39 },
    { name: 'Coral', color: [255, 129, 114], price: 0.03 },
    { name: 'Dark Azure', color: [0, 159, 224], price: 0.09 },
    { name: 'Dark Blue', color: [36, 55, 87], price: 0.07 },
    { name: 'Dark Bluish Gray', color: [89, 93, 96], price: 0.06 },
    // {name:'Dark Brown', color: [51, 0, 0], price:0.01},
    { name: 'Dark Gray', color: [107, 90, 90], price: 0.20 },
    { name: 'Dark Green', color: [46, 85, 67], price: 0.05 },
    { name: 'Dark Orange', color: [180, 84, 8], price: 0.04 },
    { name: 'Dark Pink', color: [239, 91, 179], price: 0.10 },
    { name: 'Dark Purple', color: [95, 38, 131], price: 0.03 },
    { name: 'Dark Red', color: [106, 14, 21], price: 0.05 },
    { name: 'Dark Tan', color: [144, 116, 80], price: 0.05 },
    { name: 'Dark Turquoise', color: [0, 162, 160], price: 0.06 },
    { name: 'Green', color: [0, 146, 61], price: 0.05 },
    { name: 'Lavender', color: [211, 189, 227], price: 0.04 },
    { name: 'Light Aqua', color: [216, 239, 221], price: 0.05 },
    { name: 'Light Bluish Gray', color: [175, 181, 200], price: 0.04 },
    { name: 'Light Gray', color: [156, 156, 156], price: 0.36 },
    { name: 'Lime', color: [196, 224, 1], price: 0.04 },
    // {name:'Maersk Blue', color: [125, 193, 216], price:0.28},
    { name: 'Magenta', color: [183, 34, 118], price: 0.05 },
    { name: 'Medium Azure', color: [107, 206, 224], price: 0.04 },
    { name: 'Medium Blue', color: [130, 173, 216], price: 0.05 },
    { name: 'Medium Lavender', color: [198, 137, 217], price: 0.07 },
    { name: 'Medium Nougat', color: [227, 160, 91], price: 0.05 },
    { name: 'Orange', color: [255, 126, 21], price: 0.08 },
    // {name:'Pink', color: [255, 193, 203], price:1.20},
    // {name:'Purple', color: [165, 73, 156], price:0.89},
    { name: 'Red', color: [179, 0, 5], price: 0.04 },
    { name: 'Reddish Brown', color: [137, 53, 30], price: 0.05 },
    { name: 'Sand Blue', color: [136, 153, 171], price: 0.04 },
    { name: 'Sand Green', color: [162, 191, 163], price: 0.05 },
    { name: 'Tan', color: [222, 198, 156], price: 0.04 },
    { name: 'Yellow', color: [255, 224, 0], price: 0.05 },
    { name: 'Yellowish Green', color: [231, 242, 167], price: 0.05 }
  ]
  const BLACK_BASE_16X16 = 3.53
  const WHITE_PLATE_16X16 = 3.50
  const FRAME_PRICE = BLACK_BASE_16X16 + WHITE_PLATE_16X16

  const isImage = (element: any) => {
    return element instanceof HTMLImageElement;
  }

  const imgLoaded = (element: any) => {
    return element.complete && element.naturalHeight !== 0;
  }

  const waitForImageToLoad = (element: any, timeout: any) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (imgLoaded(element)) {
          return resolve(element);
        }
        return resolve(waitForImageToLoad(element, 100));
      }, timeout);
    });
  }

  const createFirstCanvas = (element: any) => {
    var canvas: any = document.getElementById("originalCanvas");
    const factor = 4
    canvas.width = element.width * factor;
    canvas.height = element.height * factor;
    canvas.getContext("2d").drawImage(element, 0, 0, element.width * factor, element.height * factor);
  }

  const createSecondImage = (element: any) => {
    // var canvas:any = document.getElementById("secondCanvas");
    var canvas: any = document.createElement("canvas");
    canvas.width = element.width;
    canvas.height = element.height;
    var canvasContext = canvas.getContext("2d")
    canvasContext.drawImage(element, 0, 0, element.width, element.height);

    const array2d = create2dArray(element.height, element.width)
    const newReport: any = {}

    const array2dIndexes = array2d.map((c1, i1) => {
      return c1.map((c2, i2) => {
        var pixelData = canvasContext.getImageData(i2, i1, 1, 1);
        if (isSolidNode(pixelData, i1, i2)) {
          // return pixelData.data
          const closestIndex = getClosestColorIndex(pixelData)

          if (newReport[closestIndex]) {
            newReport[closestIndex]++
          } else {
            newReport[closestIndex] = 1
          }

          return closestIndex
        } else {
          if (newReport[0]) {
            newReport[0]++
          } else {
            newReport[0] = 1
          }
          return c2
        }
      })
    })

    // console.log(newReport)
    setResult(array2dIndexes)
    setReport(newReport)
    setImageWidth(element.width)
    setImageHeight(element.height)
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

    const diffArray = BRICK_COLORS.map(c => {
      const r2 = c.color[0]
      const g2 = c.color[1]
      const b2 = c.color[2]

      const diff = Math.sqrt(Math.pow((r2 - r1), 2) + Math.pow((g2 - g1), 2) + Math.pow((b2 - b1), 2))
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

  const getAbsoluteDiff = (num1: number, num2: number) => {
    return Math.abs(num1 - num2)
  }

  const isSolidNode = (pixelData: any, x: any, y: any) => {
    var alpha = pixelData.data[3];
    return alpha > 80;
  }

  const scan = (url: any) => {
    const element = document.createElement("img");
    element.src = url;

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
    // const url = './charizard.png'
    // const url = './dragapult.png'
    // const url = './shinydragapult.png'
    // const url = './gastly.png'
    // const url = './gyarados.png'
    // const url = './lapras.png'
    // const url = './magikarp.png'
    // const url = './mew.png'
    // const url = './ninetails.png'
    // const url = './sandshrew.png'
    // const url = './snorlax.png'
    const url = './brennans.png'

    scan(url);
  }, []);

  const itemTotal = report ? Object.keys(report).reduce((acc, key: any) => {
    const count = report[key]
    const brickObject = BRICK_COLORS[key]
    return acc + (brickObject.price * count)
  }, 0) : 0

  const numberOfFrames = Math.round(imageWidth / 16) * Math.round(imageHeight / 16)

  const reportTotal = itemTotal + (numberOfFrames * FRAME_PRICE)

  return (
    <>
      <canvas id='originalCanvas'></canvas>
      {/* <canvas id='secondCanvas'></canvas> */}

      <div style={{ clear: 'both' }}></div>

      {result ? <div style={{ border: '1px solid grey', float: 'left', backgroundColor:'white' }}>
        {result.map((r1, k1) => {
          return <div key={k1} style={{ display: 'flex' }}>
            {r1.map((r2, k2) => {
              return <div key={k2} style={{
                width: '4px',
                height: '4px',
                borderRadius: '100px',
                backgroundColor: r2 === undefined ? 'transparent' : getColorFromIndex(r2)
              }}></div>
            })}
          </div>
        })}</div> : undefined}

      <div style={{ clear: 'both' }}></div>
      <br />

      {report &&
        <>
          <div>Report: {imageWidth}x{imageHeight}</div>
          <table>
            <tbody>
              {Object.keys(report).map((key: any, index) => {
                const count = report[key]
                const brickObject = BRICK_COLORS[key]
                return <tr key={index}>
                  <td style={{
                    width: '20px',
                    height: '20px',
                    border: '1px solid grey',
                    backgroundColor: getColorFromIndex(key)
                  }}></td>
                  <td>{brickObject.name}</td>
                  <td>{count}</td>
                  <td>€{(brickObject.price * count).toFixed(2)}</td>

                </tr>
              })}
              <tr>
                <td></td>
                <td>Frame</td>
                <td>{numberOfFrames}</td>
                <td>€{(numberOfFrames * FRAME_PRICE).toFixed(2)}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Total: €{reportTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

        </>
      }

      <br />
      <br />
      <br />

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
