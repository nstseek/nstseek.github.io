/* eslint-disable no-undef */
import React from 'react';
import { ScrollView } from 'react-native';
import AlbumComponent from './AlbumComponent.js';

class AlbumList extends React.Component {

    constructor() {
        super();
        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        console.log('going to call a fetch');
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                console.log(response);
                return (response.json());
            })
            .then(response => {
                console.log(response);
                this.setState({
                    albums: response
                });
            });
    }

    renderAlbums() {
        const temp = this.state.albums.map(album => (<AlbumComponent key={album.title} albumProp={album} />));
        return temp;
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
