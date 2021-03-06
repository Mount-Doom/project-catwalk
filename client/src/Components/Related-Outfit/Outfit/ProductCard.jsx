import React from 'react';
import StarsDisplay from '../../Shared/StarsDisplay.jsx';
import {generateId} from '../Helpers/helpers.js';

var ProductCard = function(props) {
  var handleActionClick = (event) => {
    var itemId = event.target.dataset.itemnum;
    props.click('remove', itemId);
  }
  var handleItemClick = (event) => {
    var itemId = event.target.dataset.itemnum;
    var itemName = event.target.innerText;
    props.appClick(itemId, itemName);
  }

  var getImage = function() {
    if (props.styles === undefined || props.product.id === undefined) {
      return 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png';
    }
    for (var index = 0; index < props.styles.length; index++) {
      if (props.styles[index].product_id === props.product.id.toString()) {
        var styleIndex = props.styles[index].results.findIndex((style) => {
          return style['default?'] === true;
        });
        if (styleIndex === -1) {
          return props.styles[index].results[0].photos[0].thumbnail_url;
        }
        if (props.styles[index].results[styleIndex].photos[0].thumbnail_url === null) {
          return 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png';
        }
        return props.styles[index].results[styleIndex].photos[0].thumbnail_url;
      }
    }
    return 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png';
  }

  if (props.product === undefined) {
    return <div key={generateId()} className='carousel item outfit-card'></div>;
  }
  return (
      <div key={generateId()} className='carousel item outfit-card'>
        <span id='remove' className="action fa fa-times"
          onClick={handleActionClick} data-itemnum={props.product.id}></span>
        <div>
          <img src={getImage()} alt="Image of the product"></img>
        </div>
        <p>{props.product.category}</p>
        <b onClick={handleItemClick} data-itemnum={props.product.id}>
          {props.product.name}
        </b>
        <p>${props.product.default_price}</p>
        <StarsDisplay starsData={parseFloat(props.ratings)}/>
      </div>
  )
}

export default ProductCard;