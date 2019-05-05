import * as React from "react";
import classNames from "../../utils/ClassNames";
import * as PropTypes from "prop-types";



export default class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    static ClassNames = {
        root: "page"
    };

    static propTypes = {
        className: PropTypes.string
    };

    render() {
        const { children, className } = this.props;
        const classes = classNames([Page.ClassNames.root, className]);
        return (
            <div className={classes}>
                { children }
            </div>
        )
    }
}