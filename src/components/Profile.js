import React from 'react';

/** Profile
* Child / Functional Component
* Renders a list item for a given profile
**/
const propTypes = {
	onClick: React.PropTypes.func,
	selected: React.PropTypes.bool,
	user: React.PropTypes.object,
};

const Profile = (props) => {
	//If it's selected, highlight it.
	const classes = props.selected ? 'bold' : '';
	return (
		<li onClick={ props.onClick } className={classes}>
			<i className="fa fa-user"></i> { props.user.name } 
		</li>
	);
};

Profile.propTypes = propTypes;

export default Profile;