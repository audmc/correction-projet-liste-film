import React from 'react';

import { MovieCard } from './components/MovieCard';
import { Search }    from './components/Search';


// id, title, genre, image, description
const movies = 
[
    {"id":1,"title":"Om Jai Jagadish","genre":"Drama","image":"http://dummyimage.com/128x256.png/ff4444/ffffff","description":"Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst."},
    {"id":2,"title":"Haaveiden kehä","genre":"Drama","image":"http://dummyimage.com/128x256.png/ff4444/ffffff","description":"Donec dapibus. Duis at velit eu est congue elementum."},
    {"id":3,"title":"Lord, Save Us from Your Followers","genre":"Documentary","image":"http://dummyimage.com/128x256.png/dddddd/000000","description":"Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim."},
    {"id":4,"title":"Trial and Error","genre":"Comeance","image":"http://dummyimage.com/128x256.png/cc0000/ffffff","description":"Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla."},
    {"id":5,"title":"Chain Reaction","genre":"Horror","image":"http://dummyimage.com/128x256.png/ff4444/ffffff","description":"In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat."},
    {"id":6,"title":"New Wave, A","genre":"Action|Crime","image":"http://dummyimage.com/128x256.png/ff4444/ffffff","description":"Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."},
    {"id":7,"title":"Truce, The (a.k.a. La Tregua)","genre":"Drama","image":"http://dummyimage.com/128x256.png/cc0000/ffffff","description":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."},
    {"id":8,"title":"Second Wind (Le deuxième souffle) (Second Breath)","genre":"Crime|Drama|Film-Noir","image":"http://dummyimage.com/128x256.png/cc0000/ffffff","description":"Ut at dolor quis odio consequat varius. Integer ac leo."},
    {"id":9,"title":"Black Sleep, The","genre":"Horror|Sci-Fi","image":"http://dummyimage.com/128x256.png/ff4444/ffffff","description":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante."},
    {"id":10,"title":"Silent Action","genre":"Action|Crime|Drama","image":"http://dummyimage.com/128x256.png/cc0000/ffffff","description":"Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."}
];


export class App extends React.Component
{
    state = {
        movies: movies // initialisation du state avec la base de données originale
    };


    onSearchMovies = (search) =>
    {
        /*
        let foundMovies = [];

        for(const movie of movies)
        {
            if(movie.title.toLowerCase().includes(search) == true)
            {
                foundMovies.push(movie);
            }
        }
        */

        const foundMovies = movies.filter(function(movie)
        {
            return movie.title.toLowerCase().includes(search);

            /* Equivalent à :
            if(movie.title.includes(search) == true)
            {
                return true;
            }
            else
            {
                return false;
            }
            */
        });

        this.setState({ movies: foundMovies });

        // console.log(search);
    }

    render()
    {
        /*
        * La méthode .map() va parcourir les films les uns après les autres
        * La fonction fléchée génère une balise JSX pour chaque film
        * Les balises JSX s'accumulent progressivement dans la constante cards
        */
        const cards = this.state.movies.map(function(movie, index) {

            return <MovieCard key={ index }
                              title={ movie.title }
                              genre={ movie.genre }
                              image={ movie.image }
                              description={ movie.description }></MovieCard>;
        });

        return(
            <main>
                {/* Transmet la méthode de recherche via un attribut JSX */}
                <Search onSearchMovies={ this.onSearchMovies } />
                <span>Il y a { this.state.movies.length } film(s) trouvé(s).</span>
                { cards }
            </main>
        );
    }
}


