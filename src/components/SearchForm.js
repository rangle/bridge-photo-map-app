import React, { PropTypes } from 'react';

import { Field, reduxForm } from 'redux-form';

function SearchForm({
  onSubmit,
}) {
  return (
    <form onSubmit={ onSubmit }>
      <Field name="searchHashtag" component="input" type="text" placeholder="Search for stuff" />
      <button className="btn waves-effect waves-light" type="submit">Submit</button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'search' })(SearchForm);
