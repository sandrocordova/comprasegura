import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Container,
} from "reactstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h1" className="border-bottom p-3 mb-0 text-center">
              <i className="bi bi-shop me-2"> </i>
              <i className="bi bi-file-lock2 text-success"> </i>
              <i className="bi bi-cart3 me-2"> </i>
              Compra Segura
            </CardTitle>
            <CardBody className="p-4">
              <Row justify-content>
                <Col lg="12">
                  <h2 className="mt-4">
                    <b>¿Cómo funciona Compra Segura?</b>
                  </h2>
                  <h5 className=" mb-4">
                    La seguridad es muy importante al realizar la compra/venta
                    de un producto en internet, <b>Compra Segura</b> proporciona
                    una base de datos con la reputación de miles de compradores
                    y vendedores de internet.
                    <br></br>
                    <br></br>
                    Aquí tu puedes observar y analizar la confiabilidad de los
                    vendedores/compradores y decidir si comercializarás con esa
                    persona en base a su reputación en internet.
                  </h5>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center">
              <i className="bi bi-shop text-success"> </i>
              VENDEDORES
            </CardTitle>
            <CardBody className="">
              <div className="info-vendedores-compradores">
                <h2 className="mt-4">
                  <b>¿Vas a comprar en internet?</b>
                </h2>
                <h5 className=" mb-4">
                  Revisa la reputación de tu vendedor antes de realizar la
                  compra
                  <br></br>
                </h5>
                <h2 className="mt-4">
                  <b>¿Un vendedor te estafó?</b>
                </h2>
                <h5 className=" mb-4">
                  Reporta al vendedor y cuéntanos tu experiencia para que no les
                  pase a más personas.
                  <br></br>
                </h5>
                <h2 className="mt-4">
                  <b>¿Eres un vendedor?</b>
                </h2>
                <h5 className=" mb-4">
                  Revisa tu reputación como vendedor y obtén un certificado como{" "}
                  <b>Vendedor Seguro</b>.<br></br>
                </h5>
              </div>
              <div className="button-group text-center">
                <Button className="btn" color="success">
                  success
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-2*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center">
              <i className="bi bi-cart3 text-success"> </i>
              COMPRADORES
            </CardTitle>
            <CardBody className="">
              <div className="info-vendedores-compradores">
                <h2 className="mt-4">
                  <b>¿Venderás un producto en internet?</b>
                </h2>
                <h5 className=" mb-4">
                  Revisa la reputación de tu comprador antes de realizar una venta a contra-entrega
                  <br></br>
                </h5>
                <h2 className="mt-4">
                  <b>¿Un comprador te estafó o no quizo recibir su pedido?</b>
                </h2>
                <h5 className=" mb-4">
                  Reporta al comprador y cuéntanos tu experiencia para que no les
                  pase a más personas.
                  <br></br>
                </h5>
              </div>
              <div className="button-group text-center">
                <Button className="btn" color="success">
                  success
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
