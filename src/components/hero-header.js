import React from "react";
import Img from "gatsby-image";
import Link from 'gatsby-link';

const HeroHeader = (props) => {
    return (
    <div
      style={{
        background: '#D80919',
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: '100%',
          padding: '0.5rem 1.0875rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
      <Link
			to='/'
		>
        <Img
                    sizes={props.sizes}
					style={ {
						width: '70px',
						height: 'auto',
                    } }
				/>
      </Link>
      </div>
    </div>
    )
}
  
  export default HeroHeader