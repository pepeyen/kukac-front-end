import React from "react";
import {withRouter} from "react-router-dom";

interface IExampleComponentProps {
    location: {
        pathname: string
    }
};

class ScrollToTop extends React.Component<IExampleComponentProps> {
	componentDidUpdate(prevProps: IExampleComponentProps): void {
		if(this.props.location.pathname !== prevProps.location.pathname){
			window.scrollTo(0, 0);
		};
	};

	render() {
		return null;
	};
};

export default withRouter(ScrollToTop);