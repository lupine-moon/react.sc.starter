import * as React from 'react';

import HtmlHead from '@bit/lupine-moon.interaction.html-head';

export default ({ children }: any) => (
	<HtmlHead>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		{children}
	</HtmlHead>
);
