import React from 'react';

import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { removePostAction } from '../redux/posts'

export const PostList = ({ postsList, removePost }) => (
  <ListGroup>
    {postsList.map((post, index) => (
      <ListGroupItem key={index}>{post.description}
      <Button close onClick={() => removePost(index)}/>
      </ListGroupItem> 
    ))}
  </ListGroup>
);

const mapStateToProps = state => {
  return {
    postsList: state.posts
  }
}

const mapDispatchToProps = {
  removePost: removePostAction,
}

const PostListConnected = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListConnected;