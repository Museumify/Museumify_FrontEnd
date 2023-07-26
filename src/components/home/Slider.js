import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel data-bs-theme="dark" style={{}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://artlogic-res.cloudinary.com/w_690,h_690,c_limit,f_auto,fl_lossy/ws-lesenluminures/usr/images/artworks/main_image/items/4c/4c357e646db84a3abbc02401937a0d59/213_15.png"
          alt="First slide"
          style={{height:'450px'}}
        />
        <Carousel.Caption>
          <h1 style={{color:'white',marginBottom:'135px'}}>Welcome to Museumify</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.immediate.co.uk/production/volatile/sites/7/2018/01/GettyImages_152231573-0d9c190.jpg?quality=90&webp=true&resize=600,400"
          alt="Second slide"
          style={{height:'450px'}}
        />
        <Carousel.Caption>
          <h1 style={{color:'white',marginBottom:'135px'}}>Welcome to Museumify</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://openaccess-cdn.clevelandart.org/1974.39/1974.39_web.jpg"
          alt="Third slide"
          style={{height:'450px'}}
        />
        <Carousel.Caption>
          <h1 style={{color:'white',marginBottom:'135px'}}>Welcome to Museumify</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;