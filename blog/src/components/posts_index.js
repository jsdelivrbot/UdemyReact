import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('This is where to call the action to fetch posts');
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default PostsIndex;
