import {
  CardBody,
  CardSubtitle,
  CardTitle,
  Table,
  Card,
  Input,
  Col,
  Container,
  Row,
  Button,
} from "reactstrap";
import ItemTabla from "./ItemTabla";

import { useEffect, useState } from "react";

import { vendedoresBd } from "../../views/vendedores";
import CreateVendedor from "./CreateVendedor";
import user1 from "../../assets/images/users/user1.jpg";

function Tabla(props) {
  const [dataBusqueda, setDataBusqueda] = useState("");
  const [vendedores, setVendedores] = useState([]);
  useEffect(() => {
    setVendedores(vendedoresBd);
  }, []);

  function crearVendedor(vendedor) {
    setVendedores([
      ...vendedores,
      {
        id: vendedores.length,
        avatar: user1,
        status: "pending",
        nombre: vendedor.dataNombre,
        cedula: vendedor.dataCedula,
        calificacion: vendedor.dataCalificacion,
        descripcion: vendedor.dataDescripcion,
      },
    ]);
  }

  function filtrarVendedores(parametro) {
    setVendedores(vendedores.filter((x) => x.nombre === String(parametro)));
    //const vendedoresDos = vendedores.filter(x => x.nombre === String(parametro));
    console.log(parametro);
    //setVendedores(vendedoresDos)
  }

  return (
    <Card>
      {props.dataBusqueda}
      <CardBody>
        <CardTitle className="mb-2 text-center" tag="h1">
          LISTA DE COMPRADORES
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
          Revisa la confiabilidad del comprador antes de hacer tu venta
        </CardSubtitle>

        <Container className="mt-3 align-middle">
          <Row>
            <Col sm="12" md={{ offset: 2, size: 8 }}>
              <Input
                id="searchBar"
                name="searchBar"
                placeholder="Buscar vendedor"
                onChange={
                  (e) => {
                    setDataBusqueda(e.target.value);
                    //filtrarVendedores(e.target.value);
                  }
                  //{let vendedoress = vendedores.filter(vendedores.nombre===data)}
                }
              />
            </Col>
            <Col>
              <Button>Nuevo Comprador</Button>
              <h6>¿No encuentras al Comprador?</h6>
            </Col>
          </Row>
        </Container>

        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
            <tr>
              <th>Comprador</th>
              <th>Nombre</th>
              <th>Status</th>
              <th>Calificación</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {vendedores
              .filter((item) => {
                return dataBusqueda.toLowerCase() === ""
                  ? item
                  : item.nombre.toLowerCase().includes(dataBusqueda);
              })
              .map((tdata, index) => (
                <ItemTabla
                  key={index}
                  tdata={tdata}
                  index={index}
                />
              ))}
          </tbody>
        </Table>
        <CreateVendedor crearVendedor={crearVendedor} />
      </CardBody>
    </Card>
  );
}

export default Tabla;
