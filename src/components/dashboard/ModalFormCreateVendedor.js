import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Form,
  Row,
  Col,
  Alert,
} from "reactstrap";
import React, { useState } from "react";

function ModalFormCreateVendedor({ toggle, indice }) {

    const [form, setForm] = useState({});
    const [cedula, setCedula] = useState({});

    const validarCedula = (e)=>{
        alert("La cedula es: "+cedula);
    }
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value,})
        console.log(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("El formulario se ha enviado  "+form.nombres+"  "+form.apellidos)
    }

  return (
    <div>
      <ModalHeader toggle={toggle}>Registrar {indice}</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Row>
              <Label>Cédula</Label>
              <Col sm="9">
                <Input
                  id="cedulaInput"
                  name="cedulaInput"
                  placeholder="Ingrese la cédula del vendedor"
                  type="number"
                  onChange={(e)=>setCedula(e.target.value)}
                />
              </Col>
              <Col sm="3">
                <Button
                  color="secondary"
                  onClick={
                      validarCedula
                      //filtrarVendedores(e.target.value);
                    //{let vendedoress = vendedores.filter(vendedores.nombre===data)}
                  }
                >
                  Verificar cédula
                </Button>
              </Col>
            </Row>
            <Alert color="danger" hidden>
              ¡El {indice} Juan Fernando ya está registrado! puedes acceder al
              detallde del vendedor en el siguiente link:{" "}
              <a href="#" className="alert-link">
                Juan Fer
              </a>
            </Alert>
          </FormGroup>
          <FormGroup>
            <Label for="nombres" hidden>
              Nombres
            </Label>
            <Input
              id="nombres"
              name="nombres"
              placeholder="Ingrese los nombres del vendedor"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="apellidos" hidden>
              Apellidos
            </Label>
            <Input
              id="apellidos"
              name="apellidos"
              placeholder="Ingrese los apellidos del vendedor"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti">Select Multiple</Label>
            <Input
              id="exampleSelectMulti"
              multiple
              name="selectMulti"
              type="select"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <Button color="primary" type="submit">
          Do Something
        </Button>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit">
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </div>
  );
}

export default ModalFormCreateVendedor;
