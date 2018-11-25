import React from 'react';
import classNames from "../../utils/ClassNames";

export class Grid extends React.Component {

    constructor(props) {
        super(props);
    }

    static ClassNames= {
        root: "blag-grid",
        composition: comp => "blag-grid--composition-" + comp,
    };

    render() {
        const {composition, children} = this.props;
        console.log("RenderGrid.");
        const classes = classNames([Grid.ClassNames.root, Grid.ClassNames.composition(composition)]);
        console.log("Classnames: ", classes);
        return (
            <div className={classes}>
                {children}
            </div>
        );
    }

}