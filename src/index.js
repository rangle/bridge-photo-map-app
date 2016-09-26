import 'es5-shim';
import 'es6-shim';
import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles/index.css';


const Hello = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },
  render: function render() {
    return <div>Hello {this.props.name}</div>;
  },
});

if (!__TEST__) {
  ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('root')
  );
}
