import * as React from 'react';

export const Solution = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 669.552 500"
			width={669.552}
			height={500}
			{...props}
		>
			<g strokeOpacity={0.3} fillOpacity={0.3} fill="none">
				<path
					d="M32.778 225.489s0 0 0 0m0 0s0 0 0 0m-.66 24.454c7.667-8.592 13.727-14.224 23.157-24.76M34.01 249.61c4.774-4.913 8.552-10.88 20.06-24.937m-22.908 47.889c12.603-9.987 20.133-20.038 44.303-47.011m-43.177 48.606c15.447-18.802 33.32-38.178 43.251-47.845m-39.401 69.129c16.09-18.182 31.266-34.921 62.396-69.084m-63.369 71.079c24.02-27.088 47.528-55.894 61.246-72.209m-40.112 69.985c12.54-14.476 26.202-28.838 62.108-69.858m-63.388 71.494c16.32-17.656 31.876-36.946 63.329-71.21m-41.773 70.946c25.982-26.12 51.908-56.867 62.752-72.483m-62.342 72.497c21.935-24.548 43.66-50.123 61.554-72.426m-40.643 71.253c19.61-21.044 41.623-46.261 60.556-69.962M98.41 297.659c17.05-20.78 34.271-39.72 61.008-71.409m-38.655 71.91c15.664-20.47 29.886-38.51 58.966-70.812m-60.19 68.692c17.634-20.458 37.95-43.093 62.129-69.352m-41.17 71.83c23.995-27.681 44.004-53.63 60.706-74.537M139.9 296.408c13.939-14.158 28.183-30.193 62.752-70.558m-40.158 72.434c12.561-16.413 25.028-32 62.41-74.644m-62.236 72.078c13.754-16.432 29.315-34.512 60.75-69.463m-41.957 69.79c24.413-26.964 49.463-54.332 61.962-69.89m-60.376 70.679c15.928-18.816 32.2-36.415 61.371-71.873m-40.39 71.74c15.622-21.532 34.019-39.816 63.148-73.04m-63.187 73.248c17.301-19.56 34-40.976 61.89-71.729m-39.273 72.008c13.602-15.773 30.817-37.332 61.042-71.838m-62.458 72.643c18.48-21.377 34.578-40.045 62.992-72.077m-41.466 69.85c18.914-23.324 42.758-44.955 61.93-69.552m-63.116 70.972c20.126-22.568 41.952-48.2 62.704-71.609m-39.384 72.163c18.79-25.942 38.287-45.51 60.697-73.935m-61.474 73.436c24.957-28.462 48.798-56.37 61.771-71.63m-42.773 71.363c17.782-16.886 33.548-37.61 65.475-69.998m-64.76 69.973c14.4-14.96 26.94-30.888 62.315-70.826m-41.838 70.51c26.626-25.596 47.598-51.022 65.648-71.997m-64 72.122c23.224-25.271 45.963-51.234 61.833-71.254m-40.362 72.437c10.395-13.765 26.428-29.577 63.19-70.687m-64.227 69.152c23.334-24.956 44.263-51.059 62.538-69.595M350.7 296.922c14.525-15.07 27.584-28.924 63.297-72.334m-61.987 71.947c15.056-17.1 28.731-32.575 61.99-70.164m-38.936 70.787c22.657-26.224 44.187-52.842 58.448-70.192m-60.279 69.361c18.32-20.059 37.348-41.212 63.153-70.392m-41.246 72.598c19.133-22.76 38.777-44.892 63.023-71.517m-64.046 70.106c18.323-19.959 36.252-39.912 63.023-71.838m-42.479 72.704c14.423-18.135 28.486-32.835 64.656-72.817m-62.4 70.875c22.381-26.005 43.713-50.445 61.972-71.434m-41.86 74.411c22.682-29.865 48.156-59.17 60.886-72.606m-60.157 69.972c13.926-18.263 30.644-35.978 62.402-70.244m-40.978 71.283c22.273-26.676 46.834-57.016 60.533-72.382m-62.076 71.167c13.158-13.666 25.909-28.539 62.12-70.443m-40.849 72.792c22.965-29.314 48.768-56.43 63.636-73.158m-63.68 71.1c22.404-24.442 45.598-51.657 62.281-71.844m-40.417 70.423c15.296-14.237 30.726-32.822 62.829-68.44m-63.507 71.134c18.74-22.127 37.384-43.831 62.755-72.88m-40.329 71.558c19.33-22.219 38.631-41.446 59.994-72.987m-60.631 72.991c15.246-16.946 28.453-31.546 62.787-71.358m-42.064 72.597c20.017-22.826 38.936-44.858 62.263-70.808m-61.551 69.622c22.173-24.368 44.956-50.112 63-70.464m-43.063 70.084c22.906-25.417 46.282-51.682 61.364-70.403m-60.399 71.328c25.412-28.716 48.94-55.614 62.734-72.002m-41.186 71.082c13.224-17.551 28.595-31.917 60.24-71.791m-60.443 71.656c23.676-26.033 46.101-53.643 62.67-69.414m-42.474 71.307c20.212-18.758 36.622-39.312 57.184-69.448m-55.091 67.215c12.84-13.03 24.533-28.212 56.962-64.725m-36.393 67.206c9.182-13.497 20.147-25.685 35.207-45.287m-36.141 43.536c10.09-8.806 17.292-19.06 36.612-41.527m-16.337 40.057c7.261-4.022 14.062-12.376 16.092-16.432m-14.704 17.711c5.052-4.638 9.98-10.74 15.517-16.742m-631.766 16.05s0 0 0 0m0 0s0 0 0 0m24.173.649c-4.708-6.724-10.326-8.343-23.74-23.635m24.544 23.534c-10.976-8.108-19.183-16.83-26.023-21.242m51.18 20.722c-13.28-9.588-26.868-21.541-50.758-43.568m49.41 44.65c-9.52-10.262-19.308-17.673-49.917-44.627m74.388 43.014c-13.59-12.112-30.692-24.01-71.47-64.437m71.078 64.186c-25.76-22.392-49.805-44.118-73.41-62.509m98.459 63.445c-34.737-28.519-65.568-57.57-92.207-77.503m92.71 78.28c-28.69-25.403-57.921-49.864-92.094-78.576m115.452 76.01c-19.786-15.733-36.402-31.224-89.52-75.34m89.899 75.98c-35.827-29.34-70.14-59.242-91.66-77.949m113.853 77.873c-20.656-15.78-41.694-37.92-89.879-75.384m91.483 75.687c-34.635-30.138-70.186-59.62-89.586-76.748m115.591 79.5c-30.398-28.87-60.799-56.192-92.167-79.866m91.174 77.941c-34.315-31.871-69.975-60.392-91.642-77.997m115.413 79.69c-31.373-27.816-61.296-56.016-88.732-79.669m89.732 78.171c-31.223-28.801-62.18-54.989-90.94-79.507m114.36 79.134c-26.972-23.696-59.26-49.839-88.71-80.172m89.407 81.41c-18.931-18.576-39.217-36.519-91.249-79.712m116.634 79.548c-36.573-32.73-72.082-63.665-90.701-79.418m89.753 79.325c-32.225-29.34-66.023-57.919-91.686-79.823m114.488 76.788c-31.316-27.294-63.85-53.667-90.326-74.663m90.295 75.664c-23.08-19.243-46.65-40.35-88.256-76.403m115.09 75.981c-32.498-29.115-65.585-57.65-92.215-78.383m91.65 79.116c-27.146-21.393-54.05-44.652-91.85-77.352m113.402 78.65c-25.455-23.435-51.463-46.577-86.468-79.713m89.115 79.64c-31.069-26.805-59.259-51.42-90.704-79.354m113.05 79.835c-23.792-21.136-46.535-40.496-87.968-78.284m89.1 77.17c-20.18-18.926-41.228-36.58-89.715-77.718m113.206 77.22c-33.712-31.602-72.727-61.466-89.069-78.385m90.945 78.651c-26.474-22.35-52.19-43.672-91.124-78.533m115.462 78.264c-30.808-23.323-60.948-51.85-91.14-79.526m89.583 79.483c-27.611-23.95-57.219-49.128-90.059-77.233m116.7 77.313c-36.646-30.862-71.88-58.809-92.56-76.43m90.667 76.384c-23.285-21.428-49.528-43.095-90.538-78.596M470.192 294.9c-21.49-18.313-44.846-40.362-89.178-76.482m90.154 77.712c-32.911-30.547-66.418-59.328-89.92-78.18m113.361 76.053c-17.112-15.622-38.16-34.15-89.63-77.564m90.74 80.18c-25.613-22.656-49.243-46.106-90.23-80.169m116.894 77.042c-40.244-30.817-76.318-58.832-92.022-78.218m89.677 79.888c-23.365-19.22-45.808-38.782-90.833-77.526m115.367 76.88c-29.4-26.033-59.946-51.296-91.466-76.197m91.429 77.758c-31.357-28.125-61.688-54.591-89.98-78.563m113.254 79.267c-28.098-27.256-57.392-50.062-88.097-80.48m88.813 78.414c-24.502-20.466-51.211-44.372-88.817-76.93m115.573 75.546c-34.067-25.542-64.141-54.464-91.513-76.702m90.568 78.491c-34.074-26.782-64.609-54.627-89.826-77.06m114.753 77.825c-24.511-20.799-47.37-38.757-92.099-76.992m91.804 77.354c-22.973-18.628-45.212-38.792-92.158-80.013m115.524 78.11c-35.56-30.696-68.985-59.262-88.953-77.483m89.047 79.473c-24.515-22.284-49.364-44.848-89.547-78.973m109.25 73.494c-21.225-18.798-42.365-34.353-85.433-72.875m86.917 73.863c-32.465-27.577-62.837-54.512-87.86-73.81m86.775 52.023c-24.837-19.294-46.988-37.476-59.8-53.334m59.895 53.865c-19.492-16.984-39.425-34.794-61.748-53.995m62.578 31.195c-10.192-8.134-20.253-14.305-38.04-30.423m36.266 31.95c-11.565-10.683-23.79-21.16-35.457-32.52"
					stroke="#40c057"
					strokeWidth={2}
				/>
				<path
					d="M32.325 226c157.742 1.435 314.669 1.018 626.995-1.053m-626.865.71c166.895-.62 333.453-.587 626.92-.118m1.806 1.135c-1.287 17.771.147 37.159-2.548 67.278m.531-69.376c1.47 22.837 1.525 42.951.85 71.004m-.08-.09c-153.025-3.01-305.303-2.003-626.732.299m626.548-.447c-247.873 1.537-495.603 2.053-626.873-.06m-.312 1.266c-1.105-18.068.877-36.4.645-71.34m-1.065 69.903c.686-24.286 1.407-47.944 1.2-70.537"
					stroke="rgba(0, 0, 0, 0)"
					strokeWidth={4}
				/>
			</g>
			<g fontFamily="Virgil, Segoe UI Emoji" fontSize={44.509}>
				<text
					y={39}
					style={{
						whiteSpace: 'pre',
					}}
					transform="translate(10 10)"
				>
					interpolate(
				</text>
				<text
					y={95}
					style={{
						whiteSpace: 'pre',
					}}
					transform="translate(10 10)"
				>
					{'		frame,'}
				</text>
				<text
					y={151}
					style={{
						whiteSpace: 'pre',
					}}
					transform="translate(10 10)"
				>
					{' 	[0, 50],'}
				</text>
				<text
					y={207}
					style={{
						whiteSpace: 'pre',
					}}
					transform="translate(10 10)"
				>
					{' 	[0, 1],'}
				</text>
				<text
					y={263}
					style={{
						whiteSpace: 'pre',
					}}
					transform="translate(10 10)"
				>
					{'  {extrapolateRight: "clamp";}'}
				</text>
				<text
					y={319}
					style={{
						whiteSpace: 'pre',
					}}
					transform="translate(10 10)"
				>
					)
				</text>
			</g>

			<g fontFamily="Virgil, Segoe UI Emoji" fontSize={42.416} fill="#364fc7">
				<text
					y={38}
					style={{
						whiteSpace: 'pre',
					}}
					transform="translate(44.3 397.42)"
				>
					Fixed: Now the output value
				</text>
				<text
					y={92}
					style={{
						whiteSpace: 'pre',
					}}
					transform="translate(44.3 397.42)"
				>
					will never go above 1!
				</text>
			</g>
			<path
				d="M43.161 451.503c18.455.007 91.855.567 110.323.373M41.967 453.59c18.267-.255 91.884-2.948 110.446-3.319"
				stroke="#364fc7"
				strokeWidth={4}
				fill="none"
			/>
		</svg>
	);
};