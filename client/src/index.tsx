import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Index from './pages';
import Text from './components/Text';

const App = () => <Index />;

ReactDOM.render(<App/>, document.getElementById('app'));