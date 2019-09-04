import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";

import { isLoggedIn, setLoggedIn } from "../../utils/fake-login";

const NavLinkRouter = props => <Link className="nav-link" {...props} />;

class Menu extends Component {
  state = {
    open: false
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  onLogoutClick = () => {
    setLoggedIn(false);
    this.props.history.push("/");
  };

  renderLogout = () => {
    if (!isLoggedIn()) {
      return (
        <NavItem>
          <NavLinkRouter to="/login">Login</NavLinkRouter>
        </NavItem>
      );
    }

    return (
      <NavItem>
        <NavLink href="#" onClick={this.onLogoutClick}>
          Sair
        </NavLink>
      </NavItem>
    );
  };

  render() {
    return (
      <Navbar color="secondary" light expand="md">
        <Link className="mr-auto navbar-brand" to="/">
          ReactApp
        </Link>
        <NavbarToggler onClick={this.toggleOpen} />
        <Collapse isOpen={this.state.open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLinkRouter to="/tarefas">Tarefas</NavLinkRouter>
            </NavItem>
            <NavItem>
              <NavLinkRouter to="/postagens">Postagens</NavLinkRouter>
            </NavItem>
            <NavItem>
              <NavLinkRouter to="/sobre">Sobre</NavLinkRouter>
            </NavItem>
            {this.renderLogout()}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Menu);
