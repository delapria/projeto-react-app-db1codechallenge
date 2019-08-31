import React, { Component, createRef } from 'react';

import { connect } from 'react-redux';

import { addPostAction, clearPostAction } from '../redux/posts'
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import Button from 'reactstrap/lib/Button';

class PostForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      description: '',
    }
    this.inputDescription = createRef();
  }


  onChangeInput = event => {
    const {value, name} = event.target;

    this.setState({
      [name]: value,
    })
  }

  onSubmit = event => {
    event.preventDefault();
    const { addPost } = this.props;
    const { description } = this.state;
    
    if (!description) return;

    addPost(description)
    this.setState({
      description: ''
    })
    this.inputDescription.current.focus()
  }

  onClearClick = () => {
    const { clearPosts } = this.props
    clearPosts();
  }

  render() {
    const { description } = this.state
    return (
      <Form onSubmit={this.onSubmit} className="mb-3">
        <h1>Postagens</h1>
        <FormGroup>
          <Label for="input-description">Descrição</Label>
          <Input 
            innerRef={this.inputDescription}
            id="input-description"
            name="description"
            type="textarea"
            rows={3}
            onChange={this.onChangeInput}
            value={description}
          />
        </FormGroup>
        <Button type="submit" color="secondary">Postar</Button>
        {' '}
        <Button type="button" onClick={this.onClearClick} color="warning">Limpar</Button>
      </Form>
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