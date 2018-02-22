import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const TemplateWrapper = ( { children } ) => (
	<div style={ { backgroundColor: '#f5f5f5', paddingBottom:'1rem' } }>
		<div
			style={ {
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