import React from 'react';
import './Contato.css';
import face from '../../img/facebook.png';
import faceicon from '../../img/face.png';
import insta from '../../img/instagram.png';
import instaicon from '../../img/insta.png';
import git from '../../img/githubpage.png';
import giticon from '../../img/git2.png';
import stack from '../../img/stackpage.png';
import stackicon from '../../img/stack2.png';
import linkedin from '../../img/linkedinpage.png';
import linkedinicon from '../../img/linkedin.png';
import lattes from '../../img/lattespage.png';
import lattesicon from '../../img/lattes.png';
import gmail from '../../img/email.png';
import gmailicon from '../../img/gmail2.png';

class Contato extends React.Component {
    render() {
        return (
            <div id='contatoContainer'>
                <div id='contatoTitle'>
                    <h1 className='contato'>Contato</h1>
                </div>
                <div id='contatoContent'>
                    <h3 className='contato'>Aqui estão algumas formas de me contatar e me conhecer melhor</h3>
                    <a
                        className='linkContato'
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://facebook.com/rafael.scd/'
                    >
                        <div className='cardContainerContato'>
                            <img src={face} alt='Facebook' className='siteImg' />
                            <span>
                                <img src={faceicon} alt='Facebook icon' />
                                Facebook
                            </span>
                        </div>
                    </a>
                    <a
                        className='linkContato'
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.instagram.com/nstseek/'
                    >
                        <div className='cardContainerContato'>
                            <img src={insta} alt='Instagram' className='siteImg' />
                            <span>
                                <img src={instaicon} alt='Instagram icon' />
                                Instagram
                            </span>
                        </div>
                    </a>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='mailto:rafael.rls70@gmail.com?Subject=Contato%20via%20site'
                        className='linkContato'
                    >
                        <div className='cardContainerContato'>
                            <img src={gmail} alt='Email' className='siteImg' />
                            <span>
                                <img src={gmailicon} alt='Gmail icon' />
                                Email
                            </span>
                        </div>
                    </a>

                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.linkedin.com/in/rafael-lopes-schneider-139152165/'
                        className='linkContato'
                    >
                        <div className='cardContainerContato'>
                            <img src={linkedin} alt='LinkedIn' className='siteImg' />
                            <span>
                                <img src={linkedinicon} alt='LinkedIn icon' />
                                LinkedIn
                            </span>
                        </div>
                    </a>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='http://lattes.cnpq.br/8432696370015594'
                        className='linkContato'
                    >
                        <div className='cardContainerContato'>
                            <img src={lattes} alt='Lattes' className='siteImg' />
                            <span>
                                <img src={lattesicon} alt='Lattes icon' />
                                Lattes
                            </span>
                        </div>
                    </a>

                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://github.com/nstseek'
                        className='linkContato'
                    >
                        <div className='cardContainerContato'>
                            <img src={git} alt='GitHub' className='siteImg' />
                            <span>
                                <img src={giticon} alt='GitHub icon' />
                                GitHub
                            </span>
                        </div>
                    </a>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://stackexchange.com/users/13971300/rafael-lopes-schneider'
                        className='linkContato'
                    >
                        <div className='cardContainerContato'>
                            <img src={stack} alt='Stack Exchange' className='siteImg' />
                            <span>
                                <img src={stackicon} alt='Stack Exchange icon' />
                                Stack Exchange
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contato;
