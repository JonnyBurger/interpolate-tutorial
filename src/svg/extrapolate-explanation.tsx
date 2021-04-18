import * as React from 'react';

export const ExtrapolateExplanation: React.FC<React.SVGProps<SVGSVGElement>> = (
	props
) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 726.078 955.256"
			width={726.078}
			height={955.256}
			{...props}
		>
			<path
				d="M316.648 392.664c48.738.079 244.335 1.84 292.737 1.94m-293.839-3.152c48.595.275 244.53 1.085 293.494 1.581"
				stroke="#000"
				strokeWidth={4}
				fill="none"
			/>
			<path
				d="M611.09 366.606c.045 9.029.112 44.874-.007 54.3m-.95-55.247c-.188 9.1-.528 46.871-.08 56.157"
				stroke="#c92a2a"
				strokeWidth={4}
				fill="none"
			/>
			<path
				d="M120 389.376c33.454.123 168.161 1.147 201.564 1.648"
				stroke="#495057"
				strokeWidth={4.5}
				fill="none"
				strokeDasharray="12 8"
			/>
			<text
				y={29.76}
				fontFamily="Virgil, Segoe UI Emoji"
				fontSize={33.408}
				style={{
					whiteSpace: 'pre',
				}}
				transform="translate(162.73 251.501)"
			>
				extrapolateRight: "clamp"
			</text>
			<path
				d="M124.233 121.503c48.744.45 242.765.362 291.41.43m-292.918-.903c49.213.23 246.404-.56 295.129-.722"
				stroke="#000"
				strokeWidth={4}
				fill="none"
			/>
			<path
				d="M119.316 95.858c.538 9.214.8 46.528.957 56.138m-1.844-54.023c.566 9.382 1.135 46.343 1.393 55.3"
				stroke="#c92a2a"
				strokeWidth={4}
				fill="none"
			/>
			<text
				y={30}
				fontFamily="Virgil, Segoe UI Emoji"
				fontSize={33.408}
				style={{
					whiteSpace: 'pre',
				}}
				transform="translate(161.254 10)"
			>
				extrapolateLeft: "clamp"
			</text>
			<path
				d="M418.323 121.623c34.431.132 171.73.781 206.223 1.326"
				stroke="#495057"
				strokeWidth={4.5}
				fill="none"
				strokeDasharray="12 8"
			/>
			<path
				d="M227.489 704.264c48.398.31 242.164.024 290.726-.03m-291.96-.402c48.686.016 245.49-1.686 294.089-1.424"
				stroke="#000"
				strokeWidth={4}
				fill="none"
			/>
			<path
				d="M222.122 678.386c.397 9.13.463 47.006.497 56.32m-1.343-54.288c.351 9.255.62 46.463.69 55.58"
				stroke="#c92a2a"
				strokeWidth={4}
				fill="none"
			/>
			<g fontFamily="Virgil, Segoe UI Emoji" fontSize={33.408}>
				<text
					y={30}
					style={{
						whiteSpace: 'pre',
					}}
					transform="translate(149.082 547.151)"
				>
					extrapolateLeft: "clamp" &
				</text>
				<text
					y={72}
					style={{
						whiteSpace: 'pre',
					}}
					transform="translate(149.082 547.151)"
				>
					extrapolateRight: "clamp"
				</text>
			</g>
			<path
				d="M519.667 668.639c.262 10.41.508 52.27.923 62.877m-2.349-60.667c.668 10.576 3.917 51.337 4.482 61.794"
				stroke="#c92a2a"
				strokeWidth={4}
				fill="none"
			/>
			<text
				y={31.958}
				fontFamily="Virgil, Segoe UI Emoji"
				fontSize={35.966}
				style={{
					whiteSpace: 'pre',
				}}
				transform="translate(304.1 861.247)"
			>
				default:
			</text>
			<path
				d="M219.868 945.256c50.188-.6 250.925-1.9 301.092-2.57m-301.984 1.534c49.92-.458 250.761-3.114 300.923-3.49"
				stroke="#000"
				strokeWidth={4}
				fill="none"
			/>
			<path
				d="M449.162 939.996c26.78.45 133.482 1.952 160.146 2.234M121.032 944.428c26.956-.088 134.61.12 161.232.448"
				stroke="#495057"
				strokeWidth={4.5}
				fill="none"
				strokeDasharray="12 8"
			/>
			<path
				d="M10 195.059c116.092-.989 580.86-4.206 697.135-5.262M11.758 194.2c115.927-.256 578.377-2.043 694.248-2.823M20.376 480.019c115.888-.96 579.477-4.212 695.702-5.193M19.168 479.3c115.616-.823 579.32-5.711 695.724-6.378M17.569 799.963c116.41-1.004 582.23-4.818 698.287-5.545m-696.45 7.827c116.41-.89 579.858-6.026 696.004-6.914"
				stroke="#000"
				strokeWidth={4}
				fill="none"
				strokeOpacity={0.2}
				fillOpacity={0.2}
			/>
		</svg>
	);
};
