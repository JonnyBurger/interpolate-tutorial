import {Panel} from './Panel';
import {OverTime} from './svg/over-time';

export const OverTimePanel: React.FC = () => {
	return (
		<Panel>
			<OverTime style={{width: 450}} />
		</Panel>
	);
};
