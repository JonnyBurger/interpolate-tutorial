import React from 'react';
import {Panel} from './Panel';
import {EasingSvg} from './svg/easing';

export const EasingPanel: React.FC = () => {
	return (
		<Panel>
			<EasingSvg style={{width: 500}} />
		</Panel>
	);
};
