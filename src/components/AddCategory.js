import React, { useState } from "react";
import PropTypes from "prop-types";
import "../css/inputSearch.css";

export const AddCategory = ({ setcategories }) => {
  const [valueInput, setValueInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueInput.trim().length > 0) {
      setcategories((cats) => [valueInput, ...cats]);
      setValueInput("");
    }
  };

  const handleClean = (e) => {
    e.preventDefault();
    setcategories([]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row inputSearch">
        <input
          type="text"
          onChange={(event) => setValueInput(event.target.value)}
          value={valueInput}
          placeholder="Escribe aquí tu búsqueda"
        ></input>
        <div className="buttons">
          <button
            type="button"
            className="ml-4 btn btn-danger"
            onClick={handleSubmit}
          >
            Dale calor
          </button>
          <button
            type="button"
            className="ml-4 btn btn-success"
            onClick={handleClean}
          >
            Limpiar pantalla
          </button>
        </div>
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
