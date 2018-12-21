import React from 'react';
import classNames from "../../utils/ClassNames";
import Button from "@material-ui/core/Button/Button";
import PropTypes from 'prop-types';

export class BlagButton extends React.Component {

    static displayName = "BlagButton";

    static ClassNames = {
        root: "blag-button",
        composition: skin => "blag-button--skin-" + skin,
    };

    constructor(props) {
        super(props);
    }

    onClick = (__event) => {
        const {onClick} = this.props;
        onClick && onClick(__event);
    };

    render() {
        const {composition, children} = this.props;
        const classes = classNames([BlagButton.ClassNames.root, BlagButton.ClassNames.composition(composition)]);
        return (
            <Button className={classes} onClick={this.onClick}>
                {children}
            </Button>
        );
    }
}

BlagButton.propTypes = {
    onClick: PropTypes.object.isRequired
};