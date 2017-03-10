import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

function SearchForm({
  onSubmit,
}) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <form onSubmit={ onSubmit }>
        <div>
          <label htmlFor="searchKeyword">Search for keyword:</label>
          <Field name="searchKeyword" component="input" type="text" placeholder="eggs" />
        </div>
        <div>
          <label htmlFor="searchLocation">Search for location:</label>
          <Field name="searchLocation" component="input" type="text" placeholder="Toronto" />
        </div>
        <div>
          <Field name="within5km" id="within5km" component="input" type="checkbox" />
          <label htmlFor="within5km" style={{ marginBottom: '10px' }}>within 5 km</label>
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
