import React from 'react';
import Link from 'gatsby-link';

// Internal
import HeroHeader from '../components/hero-header';
import Header from '../components/header';
import Footer from '../components/footer';
import PhotoRow from '../components/row';

const IndexPage = ( props ) => {
	const { bio, username, avatar } = getHeaderDetails(props);
  const photos = props.data.allWordpressPost.edges;


const displayPhotos = () => {
    const photoArray = [];
    let photoRow = [];
    let count = 0;
  
    photos.map( photo => {
      if ( photo.node.featured_media ) {
        photoArray.push( photo );
      }
    } );
  
    return (
      photoArray.map( photo => {
        if ( photoRow.length === 3 ) {
          photoRow = [];
        }
  
        photoRow.push( photo );
        count++;
  
        if ( photoRow.length === 3 ) {
          return returnRow( photoRow, count );
        } else if ( photoArray.length - count === 0 ) {
          return returnRow( photoRow, count );	
        }
      } )
    )
  }
  
  const returnRow = ( photos, count ) => {
    return (
      <PhotoRow photos={ photos } key={ count } />
    )
  }

	return (
		<div>
      <HeroHeader sizes={props.data.imageOne.sizes} />
			<Header bio={ bio } username={ username } src={ avatar } />
      { displayPhotos() }
      <Footer />
		</div>
	)
}

export default IndexPage

export const pageQuery = graphql`
	query IndexQuery {
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
		allWordpressPost( sort: { fields: [ date ], order: DESC } ) {
			edges {
				node {
					id
					title
					slug
					date( formatString: "/YYYY/MM/DD/" )
					featured_media {
						localFile {
							childImageSharp {
								sizes( maxWidth: 200 ) {
									...GatsbyImageSharpSizes
								}
							}
						}
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
  return { bio, username, avatar };
}

