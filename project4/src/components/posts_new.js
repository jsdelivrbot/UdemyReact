import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <form action="">
        <h3>Create A New Post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input type="text" className='form-control'/>
        </div>

        <div className='form-group'>
          <label>Title</label>
          <input type="text" className='form-control'/>
        </div>
        
        <div className='form-group'>
          <label>Title</label>
          <input type="text" className='form-control'/>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
