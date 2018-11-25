import React from 'react';
import classNames from "../../utils/ClassNames";
import Button from "@material-ui/core/Button/Button";

export class BlagButton extends React.Component {

    constructor(props) {
        super(props);
    }

    static ClassNames = {
        root: "blag-button",
        composition: skin => "blag-button--skin-" + skin,
    };

    onClick = (__event) => {
        const {onClick} = this.props;

        onClick && onClick(__event);
        console.log("Click!");
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