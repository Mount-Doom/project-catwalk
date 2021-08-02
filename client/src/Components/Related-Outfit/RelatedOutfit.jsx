import React from 'react';
import RelatedCarousel from './RelatedProducts/RelatedCarousel.jsx';
import OutfitCarousel from './Outfit/OutfitCarousel.jsx';
import {getOneProduct} from '../../../Controllers/general.js';
import {getRelatedProductIds, getProductsByIds, getStylesByIds}
  from '../../../Controllers/related-outfit.js';
import testProduct from '../../dummy-product.js';
import testStyle from '../../dummy-style.js';

class RelatedOutfit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: [testProduct],
      products: [testProduct],
      styles: [testStyle]
    }
  }
  componentDidMount() {

  }
  componentDidMount() {
    getOneProduct(this.props.product.toString(), (err, results) => {
      if (err) {
        return console.log('Unable to get a product: ', err)
      }
      this.setState({currentProduct: results});
    });

    getRelatedProductIds(this.props.product, (err, ids) => {
      if (err) { return console.log('Unable to get IDs: ', err); }
      var relatedItemIds = ids;
      getProductsByIds(relatedItemIds, (err, responses) => {
        if (err) { return console.log('Unable to get IDs: ', err); }
        var items = responses.map((response) => {
          return response.data;
        })
        this.setState({products: items});
      });
      getStylesByIds(relatedItemIds, (err, responses) => {
        if (err) { return console.log('Unable to get styles: ', err); }
        var photos = responses.map((response) => {
          return response.data;
        })
        this.setState({styles: photos});
      })
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props.product)
    if (this.props.product === prevProps.product) {
      return;
    }
    getRelatedProductIds(this.props.product, (err, ids) => {
      if (err) { return console.log('Unable to get IDs: ', err); }
      var relatedItemIds = ids;
      getProductsByIds(relatedItemIds, (err, responses) => {
        if (err) { return console.log('Unable to get IDs: ', err); }
        var items = responses.map((response) => {
          return response.data;
        })
        this.setState({products: items});
      });
      getStylesByIds(relatedItemIds, (err, responses) => {
        if (err) { return console.log('Unable to get styles: ', err); }
        var photos = responses.map((response) => {
          return response.data;
        })
        this.setState({styles: photos});
      })
    });
  }

  render(){
    return(
      <React.Fragment>
        <div className='related'>
          <RelatedCarousel currentProduct={this.state.currentProduct} products={this.state.products}
          styles={this.state.styles}/>
        </div>
        <div className='outfit'>
          <OutfitCarousel currentProduct={this.state.currentProduct}/>
        </div>

      </React.Fragment>

    )
  }
}

export default RelatedOutfit;