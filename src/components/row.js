// External
import React from 'react';
import PropTypes from 'prop-types';

// Internal
import Photo from './photo';

const PhotoRow = ( props ) => {
	return (
		<div
			style={ {
				display: 'flex',
				flexDirection: 'row',
                maxWidth: '960px',
                textAlign: 'center',
                margin: '0 auto',
                padding: '0 1rem'
			} }
		>
			{
				props.photos.map( photo => {
					return (
						<Photo
							sizes={ photo.node.featured_media.localFile.childImageSharp.sizes }
							key={ photo.node.id }
                            link={ photo.node.slug }
						/>
					)
				} )
			}
		</div>
	)
}

PhotoRow.PropTypes = {
	photos: PropTypes.array,
}

export default PhotoRow;