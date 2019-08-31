import React, { Component, createRef } from 'react';

import { connect } from 'react-redux';

import { addPostAction, clearPostAction } from '../redux/posts'
import { Form, Spinner } from 'reactstrap'
import Button from 'reactstrap/lib/Button';
import { Form as FinalForm } from 'react-final-form'
import { validatePostDescription } from '../utils/validations';
import axios from 'axios';
import InputField from './InputField';

class PostForm extends Component {

  constructor(props) {
    super(props)

    this.inputDescription = createRef();
  }

  onSubmit = (values, form) => {
    //Para teste simular post na api, Spinner
    return axios.get('https://viacep.com.br/ws/01001000/json/')
      .then(() => {
        const { addPost } = this.props;
        const { description } = values
        addPost(description)
        this.inputDescription.current.focus()
        setTimeout(form.reset);
      })
  }

  onClearClick = () => {
    const { clearPosts } = this.props
    clearPosts();
  }

  renderForm = (renderProps) => {
    const { handleSubmit, form } = renderProps;
    const { submitting, pristine } = form.getState()
    return (
      <Form onSubmit={handleSubmit} className="mb-3">
        <h1>Postagens</h1>

        <InputField 
          row={2}
          type="textarea"
          name="description"
          id="input-description"
          label="Descrição"
          innerRef={this.inputDescription}
          validate={validatePostDescription}
        />
        <Button 
          type="submit" 
          disabled={submitting || pristine} 
          color="secondary">
          {submitting ? <Spinner size="sm"/> : null }
          Postar
        </Button>
        {' '}
        <Button 
          type="button" 
          onClick={this.onClearClick} 
          color="warning">Limpar</Button>
      </Form> 
    ) 
  }

  render() {  
    return (
      <FinalForm
        onSubmit={this.onSubmit}
        render={this.renderForm}
      />
    )
  }
}

const mapDispatchToProps = {
  addPost: addPostAction,
  clearPosts: clearPostAction,
}

//const mapDispatchToProps = dispatch => {
//  return {
//    addPost(desciption) {
//      dispatch(addPostAction())
//    }
//  }
//}

export default connect(null, mapDispatchToProps)(PostForm);