import React, { Component } from "react";
import { Alert } from "reactstrap";

import Titulo from "../components/Titulo";
import Contador from "../components/Contador";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Titulo textColor="#fff">ReactApp</Titulo>
        <Contador inicio={0} tempo={500} />
        <Contador inicio={100} tempo={700} />

        <Alert color="primary">This is a primary alert — check it out!</Alert>
        <Alert color="secondary">
          This is a secondary alert — check it out!
        </Alert>
        <Alert color="success">This is a success alert — check it out!</Alert>
        <Alert color="danger">This is a danger alert — check it out!</Alert>
        <Alert color="warning">This is a warning alert — check it out!</Alert>
      </div>
    );
  }
}
