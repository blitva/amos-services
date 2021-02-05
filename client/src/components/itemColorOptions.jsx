import React, { useState } from 'react';
import ColorOption from './colorOption.jsx';
import { SectionDescriptionText } from '../style.js';
import { ColorBoxBlack, ColorBoxGray, ColorBoxWhite } from '../style.js';


const ItemColorOptions = (props) => {

  const [color, setColor] = useState(props.color);

  //handle box clicks which will take in productId and return productId

  //pass productId up to app.jsx
  return (
    <div>
      <SectionDescriptionText>Color:</SectionDescriptionText> <b>{color}</b>
      <br></br>
      <ColorBoxBlack onClick={() => props.handleColorBoxClick(props.similarItems[0])} onMouseEnter={() => setColor('Black')}></ColorBoxBlack>
      <ColorBoxWhite onClick={() => props.handleColorBoxClick(props.similarItems[1])} onMouseEnter={() => setColor('White')}></ColorBoxWhite>
      <ColorBoxGray onClick={() => props.handleColorBoxClick(props.similarItems[2])} onMouseEnter={() => setColor('Gray')}></ColorBoxGray>
      <div>
        {props.similarItems.map(item => <ColorOption item={item} />
        )}
      </div>
    </div>

  );
};



//need to handle hover over color box'
//triggers the currentColor to change

//need to hanlde click on color box
//triggers the whole state of the app to change a new item
//returns a productId
//pass this object up to the top container (app)


export default ItemColorOptions;