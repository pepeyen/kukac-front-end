import React from "react";
import {withRouter} from "react-router-dom";

interface IProps {
    location: {
        pathname: string
    }
};

class ScrollToTop extends React.Component<IProps> {
	componentDidUpdate(prevProps: IProps): void {
		if(this.props.location.pathname !== prevProps.location.pathname){
			window.scrollTo(0, 0);
		};
	};

	render() {
		return null;
	};
};

export default withRouter(ScrollToTop);