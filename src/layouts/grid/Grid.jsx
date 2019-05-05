import React from 'react';
import classNames from "../../utils/ClassNames";
import * as PropTypes from "prop-types";

class Grid extends React.Component {

    constructor(props) {
        super(props);
    }

    static Composition = {
        DEFAULT: '',
        TWO: 'two-columns',
        THREE: 'three-columns',
        FOUR: 'four-columns',
    };

    static ClassNames = {
        root: "grid",
        composition: comp => "grid-composition--" + comp,
    };

    static propTypes = {
        composition: PropTypes.oneOf(Grid.Composition),
    };

    render() {
        const {composition, children, classes, key} = this.props;
        const allClasses = classNames(
            [Grid.ClassNames.root, composition && Grid.ClassNames.composition(composition), classes]
        );
        return (
            <div key={ key } className={ allClasses }>
                { children }
            </div>
        );
    }
}

export default Grid;