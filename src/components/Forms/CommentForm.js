import React, { PropTypes as T } from 'react';
import { Field, reduxForm } from 'redux-form';

function CommentForm({
  onSubmit,
}) {
  return (
    <form onSubmit={ onSubmit }>
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <Field name="username" component="input" type="text" placeholder="Username"/>
        </div>
      </div>
        <div className="input-field col 12">
          <i className="material-icons prefix">mode_edit</i>
          <Field
            name="userComment"
            component="input"
            type="text"
            placeholder="Add a public comment"/>
          <button className="btn waves-effect waves-light right-align" type="submit">Submit</button>
        </div>
    </form>
  );
}

CommentForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default reduxForm({ form: 'comment' })(CommentForm);
