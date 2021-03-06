import Button from '@bit/lupine-moon.interaction.button';
import * as React from 'react';

import * as colors from '@styles/colors.scss';

class App extends React.Component {
	public render() {
		return (
			<section>
				<Button borderRadius="3px" color={colors.primaryColor}>
					Normal Button
				</Button>
				<Button borderRadius="3px" color={colors.primaryColor} primary={true}>
					{' '}
					Primary Button
				</Button>
			</section>
		);
	}
}

export default App;
