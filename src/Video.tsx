import {Composition} from 'remotion';
import {Main} from './Main';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				fps={30}
				durationInFrames={11182}
				component={Main}
				height={720}
				width={1280}
				id="main"
			/>
		</>
	);
};
