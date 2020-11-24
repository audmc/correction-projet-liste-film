import React from 'react';


export class Search extends React.Component
{
    state = {
        search: ''
    };


    onChangeSearch = (event) =>
    {
        /*
         * Rappelle le composant parent (App) en lui fournissant la
         * nouvelle recherche (stockée dans event.target.value)
         */
        this.props.onSearchMovies(event.target.value.toLowerCase());

        this.setState({ search: event.target.value });
    }

    render()
    {
        return(
            <div>
                <label htmlFor="search">Titre :</label>
                <input id="search" type="text" value={ this.state.search } onChange={ this.onChangeSearch } />
            </div>
        );
    }
}