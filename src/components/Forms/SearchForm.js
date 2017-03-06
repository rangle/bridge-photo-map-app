import React, { PropTypes } from 'react';

import { Field, reduxForm } from 'redux-form';

function SearchForm({
  onSubmit,
}) {
  return (
    <div className="container">
      <form onSubmit={ onSubmit }>
        <div>
          <label htmlFor="searchKeyword">Search for keyword:</label>
          <Field name="searchKeyword" component="input" type="text" placeholder="eggs" />
        </div>
        <div>
          <Field name="within5km" id="within5km" component="input" type="checkbox" />
          <label htmlFor="within5km">within 5 km</label>
        </div>
        <button className="btn waves-effect waves-light" type="submit">Search</button>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'searchForm' })(SearchForm);
