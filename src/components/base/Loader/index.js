import React from 'react'
import PropTypes from 'prop-types'
import styled, {css, keyframes} from 'styled-components'
import GlobalImages from '../../../assets/global-images'

const Loader = (props) => {
	return (
		<RippleContainer {...props}>
		</RippleContainer>
	)
}
const RippleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(GlobalImages.logo);
	width: 100vw;
	height: 100vh;
	background: orange;
`

const propTypes = {

}

const defaultProps = {

}

Loader.propTypes = propTypes
Loader.defaultProps = defaultProps

export default Loader
