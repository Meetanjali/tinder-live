import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import tinder from './images/tinder.png';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
	return (
		<div className='header'>
			<IconButton>
				<PersonIcon fontSize='large' className='header-icon' />
			</IconButton>
			<img className='headre-logo' src={tinder} alt='jsdhjs' width='30px'></img>
			<IconButton>
				<ForumIcon fontSize='large' className='header-icon' />
			</IconButton>{' '}
		</div>
	);
}

export default Header;
