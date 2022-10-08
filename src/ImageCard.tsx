import Color from "color-thief-react";
import { ArrayRGB } from 'color-thief-react/lib/types';

function isLight(rgb: ArrayRGB){
  const [r, g, b] = rgb.map((value: any) => value)
  if ((r * 299 + g * 587 + b * 114)/ 1000 >= 130){
    return true
  }
  return false
}

const getBgColor=(rgb: ArrayRGB | undefined) =>{
  if (rgb !== undefined) {
    return isLight(rgb) ? 'gray' : 'white'
  } else {
    return 'gray'
  }
}

const ImageCard = (props: { imgSrc: string }) => {
  return (
    <Color src={props.imgSrc} format="rgbArray">
      {({ data }) => {
        const bgColor = getBgColor(data)
        return(     
          <div>
            <img src={props.imgSrc} style={{ backgroundColor: bgColor }}/>
              <div>dominant color: {data?.map((value: any) => <span>{value} </span>)}</div>
          </div>
        )
      }}
    </Color>
  );
}

export default ImageCard;