import React from 'react';

var TableModal = function(props) {
  var handleClick = (event) => {
    props.click('close');
  }
  //console.log('Main item ', props.current);
  //console.log('Comparing to ', props.compareTo);

  if (props.display) {
    return (
      <div className='modal-body'>
        <div className='modal-content table'>
          <span id='close' className="fa fa-times"
            onClick={handleClick}></span>
          <table>
            <thead>
              <tr>
                <th>Currently Viewing</th>
                <th>Characteristic</th>
                <th>Selected Item</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p>{props.current.name}</p></td>
                <td><p>Name</p></td>
                <td><p>{props.compareTo.name}</p></td>
              </tr>
              <tr>
                <td><p>{props.current.default_price}</p></td>
                <td><p>Price</p></td>
                <td><p>{props.compareTo.default_price}</p></td>
              </tr>
              <tr>
                <td><p>{props.current.category}</p></td>
                <td><p>Category</p></td>
                <td><p>{props.compareTo.category}</p></td>
              </tr>
              {compareFeatures(props.current.features, props.compareTo.features)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  return null;
}

var compareFeatures = (firstFeatures, secondFeatures) => {
  var allFeats = [];
  // var allFeats = new Set();

  firstFeatures.forEach((itemFeat) => {
    secondFeatures.forEach((itemTwoFeat) => {
      console.log(itemTwoFeat)
      //console.log(itemTwoFeat);
      if (itemFeat.feature === itemTwoFeat.feature) {
        allFeats.push([itemFeat.value, itemFeat.feature, itemTwoFeat.value]);
      }
    })
  })

  // firstFeatures.forEach((itemFeat) => {
  //   secondFeatures.forEach((itemTwoFeat) => {
  //     console.log(itemTwoFeat)
  //     //console.log(itemTwoFeat);
  //     if (itemFeat.feature === itemTwoFeat.feature) {
  //       allFeats.add(itemFeat.feature, [itemFeat.value, itemTwoFeat.value]);
  //     } else if (!allFeats.has(itemFeat.feature)){
  //     }
  //   })
  // })

  return allFeats.map((features) => {
    return (
      <tr>
        <td><p>{features[0]}</p></td>
        <td><p>{features[1]}</p></td>
        <td><p>{features[2]}</p></td>
      </tr>
    )
  })
}

export default TableModal;