import { CardBody, CardSubtitle, CardTitle, Table } from "reactstrap";
import ItemTabla from "./ItemTabla";

import { useEffect, useState } from "react";
import { Button, Col, Input, Row, Card } from "reactstrap";

import { vendedoresBd } from "../../views/vendedores";

function Tabla(props) {
  const [dataBusqueda, setDataBusqueda] = useState("ejemplo de data");

  const [vendedores, setVendedores] = useState([]);
  useEffect(() => {
    setVendedores(vendedoresBd);
  }, []);

  return (
    <div>
      <Card>
        {props.dataBusqueda}
        <CardBody>
          <CardTitle className="mb-2 text-center" tag="h1">LISTA DE VENDEDORES</CardTitle>
          <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
            Revisa la confiabilidad del vendedor antes de hacer tu compra
          </CardSubtitle>

          <Table className="mt-3 align-middle" responsive>
            <Col sm="12" md={{ offset: 2, size: 8 }}>
              <Input
                id="searchBar"
                name="searchBar"
                placeholder="Buscar vendedor"
                onChange={
                  (e) => {
                    setDataBusqueda(e.target.value);
                  }
                  //{let vendedoress = vendedores.filter(vendedores.nombre===data)}
                }
              />
            </Col>
          </Table>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Vendedores</th>
                <th>Nombre</th>
                <th>Status</th>
                <th>Calificación</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {vendedores.map((tdata, index) => (
                <ItemTabla tdata={tdata} index={index} />
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Tabla;
