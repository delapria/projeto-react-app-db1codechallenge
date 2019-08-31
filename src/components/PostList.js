import React from 'react';

import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';

export const PostList = ({ postsList }) => (
  <ListGroup>
    {postsList.map((post, index) => (
      <ListGroupItem key={index}>{post.description}</ListGroupItem>      
    ))}
  </ListGroup>
);

const mapStateToProps = state => {
  return {
    postsList: state.posts
  }
}

const PostListConnected = connect(mapStateToProps, null)(PostList)

export default PostListConnected;