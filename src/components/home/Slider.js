import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel data-bs-theme="dark" style={{}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://artlogic-res.cloudinary.com/w_690,h_690,c_limit,f_auto,fl_lossy/ws-lesenluminures/usr/images/artworks/main_image/items/4c/4c357e646db84a3abbc02401937a0d59/213_15.png"
          alt="First slide"
          style={{
            height: '700px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            boxSizing: 'border-box',
            border: 'none',
            padding: '0',
          }}
        />
        <Carousel.Caption>
          <h1
            style={{
              color: 'black',
              marginBottom: '300px',
              marginTop: '400px',
              fontFamily: 'DaiBannaSIL',
              fontWeight: 'bold',
            }}
          >
            Welcome to Museumify
          </h1>
          {/* <p
            style={{
              fontFamily: 'DaiBannaSIL',
              fontSize: '50px',
              fontWeight: 'bold',
              marginBottom: '150px',
            }}
          >
           
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cnc0LQ_SigaxmZtCoaFAjgHaEv%26pid%3DApi&f=1&ipt=614fb4e0643227a4877134e60c7064a22e6c95f07613d30d1b4a144d7d7bae24&ipo=images"
          alt="Second slide"
          style={{
            height: '700px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            boxSizing: 'border-box',
            border: 'none',
            padding: '0',
          }}
        />
        <Carousel.Caption>
          {/* <h1
            style={{
              color: 'white',
              marginBottom: '100px',
              marginTop: '400px',
              fontFamily: 'DaiBannaSIL',
              fontWeight: '1500',
            }}
          >
            Welcome to Museumify
          </h1> */}
          <p
            style={{
              fontFamily: 'DaiBannaSIL',
              fontSize: '50px',
              fontWeight: 'bold',
              marginBottom: '250px',
            }}
          >
            Explore a diverse collection of captivating art from renowned
            artists and talented creators worldwide.{' '}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F01%2Fa7%2Fe0%2F01a7e03e00e7db8816a74177eb27f3af.jpg&f=1&nofb=1&ipt=3f86787a1f00e9bae14c1a81886b6feb09b8de846f8df166a415cd9f6873307f&ipo=images"
          alt="Third slide"
          style={{
            height: '700px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

            alignContent: 'center',
            boxSizing: 'border-box',
            border: 'none',
            padding: '0',
          }}
        />
        <Carousel.Caption>
          {/* <h1
            style={{
              color: 'white',
              marginBottom: '100px',
              marginTop: '400px',
              fontFamily: 'DaiBannaSIL',
              fontWeight: '1500',
            }}
          >
            Welcome to Museumify
          </h1> */}
          <p
            style={{
              fontFamily: 'DaiBannaSIL',
              fontSize: '50px',
              fontWeight: 'bold',
              marginBottom: '250px',
            }}
          >
            Immerse yourself in a captivating gallery of diverse art pieces
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgDfsy4AqoCA%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=e7a5990a480e68524fad00bb46cdefeb3eab3eb44383202f0d343d8c7c80aa0c&ipo=images"
          alt="Third slide"
          style={{
            height: '700px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

            alignContent: 'center',
            boxSizing: 'border-box',
            border: 'none',
            padding: '0',
          }}
        />
        <Carousel.Caption>
          {/* <h1
            style={{
              color: 'white',
              marginBottom: '100px',
              marginTop: '400px',
              fontFamily: 'DaiBannaSIL',
              fontWeight: '1500',
            }}
          >
            Welcome to Museumify
          </h1> */}
          <p
            style={{
              fontFamily: 'DaiBannaSIL',
              fontSize: '50px',
              fontWeight: 'bold',
              marginBottom: '250px',
            }}
          >
            Unleash your creativity and share your artistic masterpieces with
            the world by joining our vibrant community of art enthusiasts
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
