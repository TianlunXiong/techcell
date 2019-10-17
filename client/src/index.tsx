import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Text from './components/Text';

const App = () => <div>12443<Text content={123}/></div>;

ReactDOM.render(<App/>, document.getElementById('app'));