import React from 'react';
import classNames from "../../utils/ClassNames";
import Grid from "@material-ui/core/Grid/Grid";
import * as PropTypes from "prop-types";


class GridLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    static ClassNames = {
        root: "blag-grid",
        composition: comp => "blag-grid--composition-" + comp,
    };

    render() {
        const {composition, children, classes, key} = this.props;
        const allClasses = classNames([GridLayout.ClassNames.root, GridLayout.ClassNames.composition(composition), classes]);
        return (
            <Grid key={key} {...this.props} className={allClasses}>
                {children}
            </Grid>
        );
    }
}

GridLayout.propTypes = {
    container: PropTypes.bool.isRequired,
    item: PropTypes.bool.isRequired,
    direction: PropTypes.string,
};

export default GridLayout;