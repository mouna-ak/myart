import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Formulaire = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    axios
      .post("http://localhost:3001/send-email", formData)
      .then((response) => {
        console.log(response.data);
        // Effectuez des actions supplémentaires en fonction de la réponse du serveur
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de l'envoi de la requête :",
          error
        );
        // Gérez les erreurs
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name="user_name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="user_email" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea className="form-control" name="adresse" />
            </div>
            <div className="form-group">
              <label>Upload Image</label>
              <input
                type="file"
                className="form-control-file"
                name="file"
                style={{ margin: "5%" }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark"
              style={{ margin: "5%" }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
