import React from 'react';
import {Panel} from './Panel';
import {Advanced} from './svg/advanced';

export const AdvancedPanel: React.FC = () => {
	return (
		<Panel>
			<Advanced style={{width: 350}} />
		</Panel>
	);
};
