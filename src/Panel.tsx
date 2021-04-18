import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	right: 10px;
	bottom: 10px;
	top: 10px;
	background-color: white;
	width: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Panel: React.FC = ({children}) => {
	const {fps, height, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();
	const openProgress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	const contentOpacity = interpolate(frame, [15, 30], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const contentOpacityOut = interpolate(
		frame,
		[durationInFrames - 40, durationInFrames - 20],
		[1, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const closeprogress = spring({
		fps,
		frame: frame - durationInFrames + 30,
		config: {
			damping: 200,
		},
	});
	const opacity = contentOpacity * contentOpacityOut;
	const progress = (1 - closeprogress) * openProgress;
	const h = interpolate(progress, [0, 1], [510, 0]);
	return (
		<Container style={{transform: `translateX(${h}px)`}}>
			<div style={{opacity}}>{children}</div>
		</Container>
	);
};
