import React, { Component } from "react";

import { Route } from "react-router-dom";
import axios from "axios";
import { Spinner, Form, Row, Col } from "reactstrap";
import TaskList from "../components/TaskList";
import Input from '../components/Input'
import { validateTaskSearch } from '../utils/validations'

export default class Tasks extends Component {
  state = {
    tasks: [],
    filteredTasks: [],
    serchValue: '',
    fetching: false
  };

  componentDidMount() {
    this.requestTasks();
  }

  requestTasks = () => {
    this.setState({ fetching: true });
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        const { data } = response;
        this.setState({ 
          tasks: data,
          filteredTasks: data });
      })
      .catch(error => {
        console.warn(error);
      })
      .finally(() => {
        this.setState({ fetching: false });
      });
  };

  onTaskClick = task => {
    this.props.history.push(`/tarefas/${task.id}`);
  };

  onSearchChange = (event, valid) => {
    if (!valid) return
    const { value } = event.target;
    const { tasks } = this.state;

    const filteredTasks = tasks.filter(task => {
      return task.title.includes(value)
    })

    this.setState({
      filteredTasks,
      serchValue: value
    })
  }

  renderTasks = () => {
    const { fetching, filteredTasks, serchValue } = this.state;
    if (fetching) {
      return (
        <div>
          <Spinner color="primary" />
          <Spinner color="secondary" />
          <Spinner color="success" />
          <Spinner color="danger" />
          <Spinner color="warning" />
          <Spinner color="info" />
          <Spinner color="light" />
          <Spinner color="dark" />
        </div> 
      );
    }
    return <TaskList  
      tasks={filteredTasks} 
      onTaskClick={this.onTaskClick}
      highlight={serchValue}
     />;
  };

  renderTaskDetail = routeProps => {
    const { taskId } = routeProps.match.params;
    const task = this.state.tasks.find(item => item.id === parseInt(taskId));
    if (!task) {
      return null;
    }

    return (
      <div>
        <div>Id: {task.id}</div>
        <div>Título: {task.title}</div>
        <div>Concluída: {task.completed ? "Sim" : "Não"}</div>
        <div>Usuário ID: {task.userId}</div>
      </div>
    );
  };

  renderTaskRoute = () => (
    <Route path="/tarefas/:taskId" render={this.renderTaskDetail} />
  );

  renderFilter = () => {
    return (
      <Form>
        <Row form>
          <Col md={6}>
              <Input 
                label="Filtro"
                id="todo-search"
                type="text" 
                placeholder="Buscar tarefas"
                onChange={this.onSearchChange}
                validate={validateTaskSearch} />
          </Col>
        </Row>
      </Form>
    )
  }

  render() {
    return (
      <div>
        <h1>Página de tarefas</h1>
        {this.renderFilter()}
        {this.renderTasks()}
        {this.renderTaskRoute()}
      </div>
    );
  }
}
