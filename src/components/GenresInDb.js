import React, {Component} from 'react';
import Genre  from './Genre';

class GenresInDb extends Component {

    constructor() {
        super();

            this.state = {genresList : [],

            fondoCambiado : false, 
        };
    }

    componentDidMount() {

        fetch('/api/genres')
        .then( resultado => {return resultado.json()} )
        .then( listGen => this.setState({ genresList : listGen.data }) )
        .catch( error => console.log( error ) )
    }

    componentDidUpdate() {

    }

    cambiarBgColor = () => {
        this.setState( (state) => ({ fondoCambiado : !state.fondoCambiado }) );
    }
    

    render() {

        /*const { genresList, fondoCambiado} = this.state; para invocar sin el this.state
          a las variables de instancia/estadp fondoCambiado y genresList 
        */
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800"
                                    onMouseOver={this.cambiarBgColor}>Genres in Data Base
                                </h6>
                            </div>
                            <div className={`card-body ${this.state.fondoCambiado ? 'bg-secondary' : ''}`}>
                                <div className="row">
                                    {
                                        this.state.genresList.map((genre,index)=>{
                                            return  <Genre  {...genre}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }

}
export default GenresInDb;