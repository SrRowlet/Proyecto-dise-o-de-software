import Carousel from 'react-bootstrap/Carousel';
import imagenes from '../imagenes';

function UncontrolledExample() {
  return (
    <Carousel className='abajo'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagenes.mha}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>My Hero Academia</h3>
          <p>Conoce la historia de como Izuku Midoriya se convierte en el héroe número 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagenes.dbs}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Dragon Ball Super</h3>
          <p>Continua la historia de Goku tras los sucesos ocurridos en Dragon Ball Z</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagenes.kny}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Demond Slayer</h3>
          <p>
            Acompaña a Tanjiro Kamado a salvar a su hermana
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;