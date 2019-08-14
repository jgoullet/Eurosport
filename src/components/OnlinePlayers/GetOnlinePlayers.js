import React, { Component } from 'react';
import './GetOnlinePlayers.scss';

class GetOnlinePlayers extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : [],    
        };
    }

    componentDidMount() {
        fetch("https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json")
        .then( response => response.json())
        .then(
            // Gére le résultat
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },
            // Gére l'erreur 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }


    render() {
        const {error, isLoaded, posts} = this.state;
        function countInArray(array, score) {
            var count = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] === score) {
                    count++;
                }
            }
            return count;
        }
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div className="players">
                    {
                        posts.players.map((post, index)=> (
                            <div className="player" key={index}>
                                <div className="player__column-left"></div>
                                <div className="player__column-center">
                                    <img src={post.picture} alt={post.firstname + ' ' + post.lastname} />
                                    <p className="player__column-center-name"><img src={post.country.picture} alt={post.country.code} className="player__column-center-name-img-country"/> {post.firstname} {post.lastname}</p>
                                </div>
                                <div className="player__column-right">
                                    <ul className="player__column-right-info-list">
                                        <li className="player__column-right-info-list-item"><div className="player__column-right-info-list-item-title">Shortname:</div> <div className="player__column-right-info-list-item-value">{post.shortname}</div></li>
                                        <li className="player__column-right-info-list-item"><div className="player__column-right-info-list-item-title">Sex:</div> <div className="player__column-right-info-list-item-value">{post.sex}</div></li>
                                        <li className="player__column-right-info-list-item"><div className="player__column-right-info-list-item-title">Rank:</div> <div className="player__column-right-info-list-item-value">{post.data.rank}</div></li>
                                        <li className="player__column-right-info-list-item"><div className="player__column-right-info-list-item-title">Points:</div> <div className="player__column-right-info-list-item-value">{post.data.points}</div></li>
                                        <li className="player__column-right-info-list-item"><div className="player__column-right-info-list-item-title">Weight:</div> <div className="player__column-right-info-list-item-value">{post.data.weight/1000} Kg</div></li>
                                        <li className="player__column-right-info-list-item"><div className="player__column-right-info-list-item-title">Height:</div> <div className="player__column-right-info-list-item-value">{post.data.height} cm</div></li>
                                        <li className="player__column-right-info-list-item"><div className="player__column-right-info-list-item-title">Age:</div> <div className="player__column-right-info-list-item-value">{post.data.age}</div></li>
                                        <li className="player__column-right-info-list-item"><div className="player__column-right-info-list-item-title">Total wins :</div> <div className="player__column-right-info-list-item-value"></div>{countInArray(post.data.last, 1)}</li>
                                        <li className="player__column-right-info-list-item"><div className="player__column-right-info-list-item-title">Total losses :</div> <div className="player__column-right-info-list-item-value">{countInArray(post.data.last, 0)}</div></li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            );
        }    
    }
  }

  export default GetOnlinePlayers;