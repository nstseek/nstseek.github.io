import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
	render() {

		return (
			<div className="sidebar">
				<ul>
					<li className="listitem" onClick={this.props.storeMethod}>Início</li>
					<li className="listitem" onClick={this.props.storeMethod}>Sobre mim</li>
					<li className="listitem" onClick={this.props.storeMethod}>Projetos</li>
					<li className="listitem" onClick={this.props.storeMethod}>Paginas</li>
					<li className="listitem" onClick={this.props.storeMethod}>Contato</li>
				</ul>
			</div>
			);
	}
}

export default Sidebar;