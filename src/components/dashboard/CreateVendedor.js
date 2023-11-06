import {
  Input,
  Row,
  Button,
  Col,
  Form
} from "reactstrap";
import { useState } from "react";

function CreateVendedor({crearVendedor}) {
    const [dataNombre, setNombre] = useState("");
    const [dataCedula, setCedula] = useState("");
    const [dataCalificacion, setCalificacion] = useState("");
    const [dataDescripcion, setDescripcion] = useState("");

    const formSubmi = (e)=>{
        e.preventDefault();
        crearVendedor({dataNombre, dataCedula, dataCalificacion, dataDescripcion})
        setNombre("");
        setCedula("");
        setCalificacion("");
        setDescripcion("");
    }

  return (
    <Form onSubmit={formSubmi}>
      <Row className="mt-3">
        <Col className="p-2">
          <Input
            id="nombreId"
            name="searchBar"
            placeholder="Nombre"
            onChange={(e)=> {setNombre(e.target.value)}}
            value={dataNombre}
            autoFocus
          />
        </Col>
        <Col className="p-2">
          <Input
            id="cedulaId"
            name="searchBar"
            placeholder="Cédula"
            onChange={
              (e) => {
                setCedula(e.target.value);
              }
              //{let vendedoress = vendedores.filter(vendedores.nombre===data)}
            }
            value={dataCedula}
          />
        </Col>
        <Col className="p-2">
          <Input
            id="calificacionId"
            name="searchBar"
            placeholder="Calificación"
            onChange={(e)=>{
                setCalificacion(e.target.value)
            }}
            value={dataCalificacion}
          />
        </Col>
        <Col className="p-2">
          <Input
            id="descripcionId"
            name="searchBar"
            placeholder="Descripción"
            onChange={(e)=>setDescripcion(e.target.value)}
            value={dataDescripcion}
          />
        </Col>
        <Col className="p-2">
          <Button>Agregar</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default CreateVendedor;
