import React from 'react'
//import PropTypes from 'prop-types';

const ContentRowMovies = ({rowMovies}) => {
  
    return (

        
        <div className="row">

            {/*<!-- Movies in Data Base -->*/}
            {/*<!-- Total awards -->*/}
            {/*<!-- Actors quantity -->*/}
            {rowMovies.map((row,i) => 
            (
                <div className="col-md-4 mb-4" key={i}>
                    <div className={`card border-left-${row.color} shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold text-${row.color} text-uppercase mb-1`}>{row.titulo}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{row.cifra}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={`fas ${row.icono} fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
  )
}

// ContentRowMovies.propTypes = {
//     titulo: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     cifra: PropTypes.string.isRequired || PropTypes.number.isRequired,
//     icono: PropTypes.string("fa-film").isRequired || PropTypes.string("fa-award").isRequired || PropTypes.string("fa-userEvent").isRequired,
// }


// ContentRowMovies.defaultProps = {
//     titulo: "titulo",
// }

export default ContentRowMovies