import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
// Internal
import Footer from '../components/footer'
import HeroHeader from '../components/hero-header'
import Header from '../components/header';


const PostTemplate = (props ) => {

		const { bio, username, avatar } = getHeaderDetails(props);
		const currentPage = props.data.wordpressPost
		return (
			<div>
				<HeroHeader sizes={props.data.imageOne.sizes} />
				<Header bio={ bio } username={ username } src={ avatar } />
				<div style={{ margin: '3rem auto', maxWidth: 800, padding: '0 2rem'}}>
				<h1 style={{ marginTop: '1em' }} dangerouslySetInnerHTML={{ __html: currentPage.title }} />
				<Img sizes={ currentPage.featured_media.localFile.childImageSharp.sizes } />
				<div style={{marginTop:'1.5rem'}} dangerouslySetInnerHTML={{ __html: currentPage.content }} />
				</div>
				<Footer />
			</div>
		)
}

PostTemplate.propTypes = {
	data: PropTypes.object.isRequired,
	edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
	  date(formatString: "MMMM DD, YYYY")
	  featured_media {
		localFile {
		  childImageSharp {
			sizes(maxWidth: 400) {
				# Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
				...GatsbyImageSharpSizes_tracedSVG
			  }
		  }
		}
	  }
	  excerpt
	  content
	}
	allWordpressWpMe {
		edges {
			node {
				name
				description
				avatar_urls {
					wordpress_96
				}
			}
		}
	}
	imageOne: imageSharp(id: { regex: "/logo2.png/" }) {
		sizes(maxWidth: 100) {
		  ...GatsbyImageSharpSizes
		}
	  }
  }
`
function getHeaderDetails(props) {
	const bio = props.data.allWordpressWpMe.edges[0].node.description;
	const username = props.data.allWordpressWpMe.edges[0].node.name;
	const avatar = props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96;
	return { bio, username, avatar, };
  }