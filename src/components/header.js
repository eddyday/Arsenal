import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Header = ( props ) => {
	const bio = props.bio;
	const username = props.username;
  const src = props.src;

	return (
		<div
			style={ {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexWrap: 'wrap',
        margin: '2em 5rem',
        borderBottom: '1px solid #e0e0e0',
        paddingBottom: '1em',
        maxWidth: '960px'
			} }
		>
			<span
				style={ {
					flexBasis: '120px',
					height: '96px',
				} }
			>
				<img
					src={ src }
					alt={ `Edward Day` }
					style={ {
						marginBottom: 0,
						borderRadius: "50%",
            width: '96px',
            border: '1px solid #e0e0e0'
					} }
				/>
			</span>
			<span
				style={ {
					flexBasis: '150px',
					flexGrow: 1,
				} }
			>
				<Link
					to='/'
					activeStyle={ {
        				textDecoration: 'none',
        				color: '#000000'	
      				} }
				>
					<h4
						dangerouslySetInnerHTML={ { __html: ( username ) } }
						style={ { marginBottom: '0.2em', marginTop: '0' } }
					/>
				</Link>
				<p 
					style={ { marginBottom: 0 } }
					dangerouslySetInnerHTML={ { __html: ( bio ) } }
				/>
        </span>
		</div>
	)
}

Header.PropTypes = {
	src: PropTypes.string,
	username: PropTypes.string,
	bio: PropTypes.string,
}

export default Header;