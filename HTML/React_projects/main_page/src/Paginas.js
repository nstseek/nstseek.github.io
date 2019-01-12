import React from 'react';
import './Paginas.css';

class Paginas extends React.Component{

    render(){
        return (
            <div className="Paginas">
                <div id="paginasTitle">
                    <h1>Paginas</h1>
                </div>
                <div id="paginasContent">
                    <h3>Abaixo se encontram algumas webpages criadas por mim</h3><br/><p><h5>Principais</h5><a target="_blank" rel="noopener noreferrer" href="https://nstseek.github.io/Pages/robofriends/">Robofriends</a> <a target="_blank" rel="noopener noreferrer" href="https://nstseek.github.io/Pages/smartbrain/">Smartbrain</a> <a target="_blank" rel="noopener noreferrer" href="https://nstseek.github.io/HTML/background_generator/">Background generator</a> <a target="_blank" rel="noopener noreferrer" href="https://nstseek.github.io/HTML/layout_master/
">Layout Master</a> <a target="_blank" rel="noopener noreferrer" href="https://nstseek.github.io/HTML/startup_grid/">Startup Grid</a><h5>Secundarias</h5><a target="_blank" rel="noopener noreferrer" href="https://nstseek.github.io/HTML/transitions_at_the_same_time/">Transitions 1</a> <a target="_blank" rel="noopener noreferrer" href="https://nstseek.github.io/HTML/transitions_one_after_another/">Transitions 2</a> <a target="_blank" rel="noopener noreferrer" href="https://nstseek.github.io/HTML/js_class_dom_test_input/
">JS Input test</a> <a target="_blank" rel="noopener noreferrer" href="https://nstseek.github.io/HTML/js_class_dom_test_prompt/
">JS Prompt test</a></p>
                </div>
            </div>
        );
    }

}

export default Paginas;