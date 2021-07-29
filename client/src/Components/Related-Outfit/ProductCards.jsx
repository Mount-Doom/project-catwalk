import React from 'react';

var ProductCards = function(props) {
  //console.log('Product cards rendering: ', props.allProducts);
  var cards = chooseCards(props.startIndex, props.allProducts);

  return (
    <React.Fragment>
      {
        cards.map((card) => {
          return (
            <div key={card.id + (Math.floor(Math.random() * 100) + 1).toString()}
             className='product-card'>
              <span id='compare' className='action fa fa-star'
               onClick={props.click}></span>
              <p>{card.category}</p>
              <p>{card.name}</p>
              <p>{card.default_price}</p>
            </div>
        )})
      }
    </React.Fragment>
  )
}

var chooseCards = function(index, products) {
  var displayCards = [];
  var i = index;
  var onDisplay = 0;
  if (products.length === 0) {
    return displayCards;
  }
  while (onDisplay < 4 && i <= products.length - 1) {
    displayCards.push(products[i]);
    onDisplay++;
    i++;
  }
  return displayCards;
}

export default ProductCards;