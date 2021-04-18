import React from 'react';
import {
	AbsoluteFill,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';
import {AdvancedPanel} from './AdvancedPanel';
import {EasingPanel} from './EasingPanel';
import {ExplanationPanel} from './ExplanationPanel';
import {InbetweenPanel} from './InbetweenPanel';
import './index.css';
import {OverTimePanel} from './OverTimePanel';
import {Parameters2Panel} from './Parameters2Panel';
import {ParametersPanel} from './ParametersPanel';
import {ProblemPanel} from './ProblemPanel';
import main from './raw.mp4';
import {ReadTheDocs} from './ReadTheDocs';
import {SolutionPanel} from './SolutionPanel';
import {SpringAnimation} from './SpringAnimation';
import {StylePanel} from './StylePanel';

export const Main: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	return (
		<div>
			<Video src={main} muted={false} />
			<Sequence durationInFrames={960} from={670}>
				<OverTimePanel />
			</Sequence>
			<Sequence durationInFrames={750} from={1880}>
				<InbetweenPanel />
			</Sequence>
			<Sequence durationInFrames={1400} from={2700}>
				<ParametersPanel />
			</Sequence>
			<Sequence durationInFrames={250} from={4100}>
				<StylePanel />
			</Sequence>
			<Sequence durationInFrames={750} from={4350}>
				<AdvancedPanel />
			</Sequence>
			<Sequence durationInFrames={950} from={5100}>
				<Parameters2Panel />
			</Sequence>
			<Sequence durationInFrames={1800} from={6050}>
				<ProblemPanel />
			</Sequence>
			<Sequence durationInFrames={750} from={7850}>
				<SolutionPanel />
			</Sequence>
			<Sequence durationInFrames={600} from={8600}>
				<ExplanationPanel />
			</Sequence>
			<Sequence durationInFrames={900} from={9200}>
				<EasingPanel />
			</Sequence>
			<Sequence durationInFrames={300} from={10100}>
				<SpringAnimation />
			</Sequence>
			<Sequence durationInFrames={durationInFrames - 10400} from={10400}>
				<ReadTheDocs />
			</Sequence>
			{frame >= 7571 && frame < 7590 ? (
				<AbsoluteFill>
					<div
						style={{
							backgroundColor: 'white',
							display: 'inline',
							position: 'absolute',
							padding: 14,
							fontSize: 40,
							top: 320,
							left: 300,
							fontFamily: 'sans-serif',
						}}
					>
						*output range
					</div>
				</AbsoluteFill>
			) : null}
		</div>
	);
};
