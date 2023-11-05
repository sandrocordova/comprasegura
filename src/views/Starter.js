import { Col, Row } from "reactstrap";
import Tabla from "../components/dashboard/Tabla";

const Starter = () => {

  return (
    <div>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <Tabla />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
