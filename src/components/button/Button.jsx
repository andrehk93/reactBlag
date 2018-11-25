import React from 'react';
import classNames from "../../utils/ClassNames";

export class Button extends React.Component {

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
        const classes = classNames([Button.ClassNames.root, Button.ClassNames.composition(composition)]);
        return (
            <button className={classes} onClick={this.onClick}>
                {children}
            </button>
        );
    }
}