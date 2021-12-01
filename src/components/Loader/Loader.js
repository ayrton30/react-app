import React from "react";

export const Loader = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="spinner-border" role="status"></div>
      <h2 className="text fs-1">Cargando...</h2>
    </div>
  );
};
