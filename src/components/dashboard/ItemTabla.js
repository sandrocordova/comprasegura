function itemTabla({ tdata, index }) {
  return (
    <tr className="border-top">
      <td>
        <div className="d-flex align-items-center p-2">
          <img
            src={tdata.avatar}
            className="rounded-circle"
            alt="avatar"
            width="45"
            height="45"
          />
          <div className="ms-3">
            <h6 className="mb-0">{tdata.nombre}</h6>
            <span className="text-muted">{tdata.cedula}</span>
          </div>
        </div>
      </td>
      <td>{tdata.nombre}</td>
      <td>
        {tdata.status === "pending" ? (
          <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
        ) : tdata.status === "holt" ? (
          <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
        ) : (
          <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
        )}
      </td>
      <td>{tdata.calificacion}</td>
      <td>{tdata.descripcion}</td>
    </tr>
  );
}

export default itemTabla;
