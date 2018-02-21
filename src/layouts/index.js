import React from 'react';
import PropTypes from 'prop-types';
//import './index.css';

const TemplateWrapper = ( { children } ) => (
	<div style={ { backgroundColor: '#f5f5f5', paddingBottom:'1rem' } }>
		<div
			style={ {
				margin: '0 auto 2rem',
				maxWidth: '100%',
			} }
		>
			{ children() }
		</div>
	</div>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper