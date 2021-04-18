import React from 'react';
import styled from 'styled-components';
import {Panel} from './Panel';

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 600;
	font-size: 28px;
	padding: 30px;
`;

export const SpringAnimation: React.FC = () => {
	return (
		<Panel>
			<Title>
				💡 <br /> Also check out spring animations for even smoother animations.
			</Title>
			<Title>remotion.dev/docs/spring</Title>
		</Panel>
	);
};
