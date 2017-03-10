import React from 'react';
import { Link } from 'react-router';

export default function Header({
}) {
  return (
    <header style={{'display': 'flex', 'alignItems': 'center', 'width': '90%', 'marginBottom': '40px', 'marginLeft': 'auto', 'marginRight': 'auto'}}>
	    <Link to="/">
		   	<img
		    	src={require('../../assets/map-app-square.svg')}
		    	style={{'width': '150px', 'marginTop': '40px', 'marginLeft': '10%', 'marginRight': '40px'}} />
		   </Link>
	    	<h1 style={{'display': 'inline-block', 'fontSize': '3em', 'color': '666666' }}>Photo Map App</h1>
	  </header>
  );
}
