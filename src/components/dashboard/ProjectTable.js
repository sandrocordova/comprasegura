import SearchBar from './SearchBar';
import { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Table,
} from "reactstrap";
import { vendedoresBd } from "../../views/vendedores";

const ProjectTables = () => {
  const [vendedores, setVendedores] = useState([]);
  useEffect(() => {
    setVendedores(vendedoresBd);
  }, []);

  return (
    <div>
        <SearchBar/>
    </div>
  );
};

export default ProjectTables;
