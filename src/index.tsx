import React from 'react';
import ReactDOM from 'react-dom';

import { unregister } from './core';

ReactDOM.render(<div>Hello world</div>, document.getElementById('root'));

unregister();
