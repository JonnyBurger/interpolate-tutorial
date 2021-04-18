import React from 'react';
import {Panel} from './Panel';
import {ExtrapolateExplanation} from './svg/extrapolate-explanation';

export const ExplanationPanel: React.FC = () => {
	return (
		<Panel>
			<ExtrapolateExplanation style={{width: 400}} />
		</Panel>
	);
};
