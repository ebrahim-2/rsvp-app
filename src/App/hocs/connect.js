import React from 'react';
import { Subscribe } from 'unstated';
import stateContainer from 'App/stateContainer';

const connect = ChildComponent => {
	class ComposedComponent extends React.Component {
    render() {
			return (
				<Subscribe to={[stateContainer]}>
          {stateContainer => {
            return <ChildComponent {...stateContainer} {...this.props} />
          }}
				</Subscribe>
			);
		}
	}

	return ComposedComponent;
};

export default connect;