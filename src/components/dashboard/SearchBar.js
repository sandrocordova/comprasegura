import { useEffect, useState } from "react";
import { Button, Col, Input, Row, Card } from "reactstrap";
import Tabla from './Tabla';
import { vendedoresBd } from "../../views/vendedores";

function SearchBar() {
  const [data, setData] = useState("ejemplo de data");

  const [vendedores, setVendedores] = useState([]);
  useEffect(() => {
    setVendedores(vendedoresBd);
  }, []);

  return (
    <>
      <Card>
        <Row className="mt-3">
          <Col xs="8" sm="8">
            <Input
              id="searchBar"
              name="searchBar"
              placeholder="Buscar vendedor"
              onChange={
                //(e) => {setData(e.target.value)}
                {let vendedoress = vendedores.filter(vendedores.nombre===data)}
              }
            />
          </Col>
          <Col xs="4" sm="4">
            <Button>Buscar</Button>
          </Col>
        </Row>
        <Tabla data={data} vendedores={vendedores}/>
      </Card>
    </>
  );
}

export default SearchBar;
