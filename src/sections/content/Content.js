import React from 'react';
import './content.scss';

const ContentTitle = ({title}) => {
    return <div className="content-title">{title}</div>
};


class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({ result: this.props.results[this.props.params.id]});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ result: this.props.results[nextProps.params.id]});
    }

    render() {
        return (
            <div className="content">
                <ContentTitle title={this.state.result.name}/>
                <div className="content-pane">{this.state.result.value}</div>
            </div>
        );
    }
}

export default Content;
