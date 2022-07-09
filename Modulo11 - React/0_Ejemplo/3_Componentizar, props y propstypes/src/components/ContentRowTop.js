import React from 'react';
import ContentRowMovies from './ContentRowTop/ContentRowMovies';
import GenresInDb from './ContentRowTop/GenresInDb';
import LastMovieInDb from './ContentRowTop/LastMovieInDb';
function ContentRowTop(){

	const rowMovies = [
		{titulo:"MOVIES IN DATA BASE", cifra:21, color:"primary", icono:"fa-film"},
		{titulo:"TOTAL AWARDS", cifra:"79", color:"success", icono:"fa-award"},
		{titulo:"ACTORS QUANTITY", cifra:49, color:"warning", icono:"fa-user"}
	];
	
    return(
        <React.Fragment>

				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies rowMovies={rowMovies}/>
					{/*<!-- End movies in Data Base -->*/}
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						
						{/*<!-- Last Movie in DB -->*/}
						<LastMovieInDb/>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb/>
						{/*<!-- End Genres in DB -->*/}
						
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;