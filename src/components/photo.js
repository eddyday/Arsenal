// External
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

const Photo = ( props ) => {
	return (
		<div
			style={ {
				width: 'calc( 100% / 3 )',
				padding: '0.4em',
			} }
		>
			<Link to={ props.link } >
				<Img
                    sizes={ props.sizes }
					style={ {
						width: 'auto',
						height: 'auto',
                    } }
                    css={{
                        opacity: 1,
                        transition: "0.3s ease-in-out",
                        ':hover': {
                          opacity: 0.5,
                        }
                      }}
				/>
			</Link>
		</div>
	)
}

Photo.PropTypes = {
	src: PropTypes.string,
	sizes: PropTypes.object,
	link: PropTypes.string,
}

export default Photo;