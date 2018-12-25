import React from 'react';
import './OptionsBar.css';

class OptionsBar extends React.Component {
	render() {
		console.log("test");
		return (
			<div id='sidebar'>
				<ul>
					<li>Sobre mim</li>
					<li>Projetos</li>
					<li>Contato</li>
				</ul>
			</div>
			);
	}
}

export default OptionsBar;