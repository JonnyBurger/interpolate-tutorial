import {Panel} from './Panel';
import {Solution} from './svg/solution';

export const SolutionPanel: React.FC = () => {
	return (
		<Panel>
			<Solution style={{width: 400}} />
		</Panel>
	);
};
