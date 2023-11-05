
import { useEffect, useState } from "react";

import { vendedoresBd } from "../../views/vendedores";

const ProjectTables = () => {
  const [vendedores, setVendedores] = useState([]);
  useEffect(() => {
    setVendedores(vendedoresBd);
  }, []);

  return (
    <div>
      PROYECT TABLE
    </div>
  );
};

export default ProjectTables;
