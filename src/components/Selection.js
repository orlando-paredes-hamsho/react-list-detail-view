import React from 'react';

/** Profile
* Child / Functional Component
* Renders a detail view based on the selected user
**/
const propTypes = {
	user: React.PropTypes.object
};

const Selection = (props) => {
	return (
		<ul>
			<li><i className="fa fa-book fa-fw"></i> Name: {props.user.name}</li>
			<li><i className="fa fa-user fa-fw"></i> Username: { props.user.username }</li>
			<li><i className="fa fa-phone fa-fw"></i> Phone: {props.user.phone}</li>
			<li><i className="fa fa-envelope fa-fw"></i> Email: <a href={'mailto:'+props.user.email}>{props.user.email}</a></li>
		</ul>
	);
};

Selection.propTypes = propTypes;

export default Selection;