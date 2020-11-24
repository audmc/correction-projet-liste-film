import React from 'react';

// Ceci n'est pas du vrai JavaScript, c'est WebPack qui charge pour nous le CSS.
import './MovieCard.css';


export class MovieCard extends React.Component
{
    render()
    {
        return(
            <div className="card">
                <img src={ this.props.image } className="card-img-top" alt={ this.props.title } />
                <div className="card-body">
                    <h5 className="card-title">{ this.props.title }</h5>
                    <p className="card-text">{ this.props.description }</p>
                </div>
            </div>
        );
    }
}