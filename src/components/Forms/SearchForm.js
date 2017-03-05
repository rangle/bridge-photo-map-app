import React, { PropTypes } from 'react';

import { Field, reduxForm } from 'redux-form';

function SearchForm({
  onSubmit,
}) {
  return (
    <form onSubmit={ onSubmit }>
      <label htmlFor="searchKeyword">Search for keyword:</label>
      <Field name="searchKeyword" component="input" type="text" placeholder="eggs" />
      <button className="btn waves-effect waves-light" type="submit">Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'searchForm' })(SearchForm);
