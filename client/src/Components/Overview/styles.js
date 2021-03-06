export default {
  overview: {
    // display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    fontFamily: "Montserrat"
  },
  toggle: {
    position: "absolute",
    width: "auto",
    height: "40px",
    overflow: "hidden",
    WebkitTapHighlightColor: "transparent",
    cursor: 'url(https://img.icons8.com/material-outlined/24/000000/plus--v1.png), zoom-in'
  },
  addToCartButton: {
    width: '250px',
    height: '50px',
    backgroundColor: 'transparent',
    border: '1px solid black',
    display: 'block',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: "Montserrat"
  },
  errorMsg: {
    color: "red",
    padding: "0px",
  },
  zoomView: {
    height: "600px",
    width: "600px",
    position: "center"
  },
  addedToCart: {
    width: '250px',
    height: '50px',
    backgroundColor: 'transparent',
    border: '1px solid black',
    display: 'block',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: '50px',
    fontFamily: "Montserrat"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  rating:{

  },
  carouselContainer: {
    display: "flex",
    height: "425px",
    width: "100%",
    padding: "20px",
    justifyContent: "center"
  },
  carousel: {
    display: "flex",
    justifyContent: "space-evenly center",
    width: "700px"
  },
  extraPhotos: {
    display: "flex",
    flexDirection: "column",
    overflow: "scroll"
  },
  extraPhotoContainer: {
    height: "75px",
    width: "75px",
    margin: "0 100px 10px 0",
    backgroundColor: "#d3d3d3",
    borderRadius: "8px"
  },
  extraPhoto: {
    height: "100%",
    width: "100%",
    border: "3px solid #d3d3d3",
    borderRadius: "5px"
  },
  selectedPhoto: {
    height: "80%"
  },
  verticalCarousel: {
    display: "flex",
    transform: "rotate(90deg)",
    justifyContent: "space-evenly center",
    width: "550px"
  },
  productInfo: {
    padding: "20px",
    width: "40%",
    // display: "block"
  },
  productStyle: {
    display: "flex",
    flexDirection: "column"
  },
  colorCircles: {
    display: "grid",
    gridTemplateColumns: "50px 50px 50px 50px",
    gridGap: "10px"
  },
  circle: {
    // margin: "10px",
    height: "50px",
    width: "50px",
    backgroundColor: "purple",
    border: "3px solid #d3d3d3",
    borderRadius: "50%"
  },
  select: {
    backgroundColor: "transparent",
    height: "30px",
    width: "auto",
    margin: "10px",
    fontFamily: "Montserrat",
    fontWeight: 'bold',
  },
  productDetails: {
    margin: "20px",
    marginBottom: "8%"
  },
  carouselOverrides: {
    container: {
      display: "flex",
      flexDirection: "row",
      height: "400px",
      width: "600px",
      justifyContent: "space-between"
    },
    image: {
      height: "350px",
      width: "300px",
      background: "center"
    },
    rightArrow: {
    },
    leftArrow: {
    }
  },
  zoomedCarousel: {
    width: '300px',
    height: '300px',
    border: '1px solid white',
    backgroundImage: 'url(big-image.jpg)',
    backgroundSize: '500px',
    background: 'center',
    cursor: 'url(https://img.icons8.com/material-outlined/24/000000/plus--v1.png), zoom-in',
  }
//   imgMagnifierContainer: {
//     position: "relative"
//   },
//   imgMagnifierGlass: {
//     position: "absolute",
//     border: "3px solid #000",
//     borderRadius: "50%",
//     cursor: "none",
//     /*Set the size of the magnifier glass:*/
//     width: "100px",
//     height: "100px",
//   }
};