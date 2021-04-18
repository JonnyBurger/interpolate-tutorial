import React from 'react';
import {Img} from 'remotion';
import styled from 'styled-components';
import {Panel} from './Panel';

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 600;
	font-size: 28px;
	margin-top: 30px;
	margin-bottom: 30px;
`;

export const ReadTheDocs: React.FC = () => {
	return (
		<Panel>
			<Img
				style={{height: 100, marginLeft: -10}}
				src="https://www.remotion.dev/img/logo-small.png"
			/>
			<Title>Discord link in description</Title>
			<Title>Read docs at remotion.dev/docs</Title>
			<Title>Subscribe for more tutorials</Title>
		</Panel>
	);
};
