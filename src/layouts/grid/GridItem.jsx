import React from 'react';
import classNames from "../../utils/ClassNames";

export default class GridItem extends React.Component {

    constructor(props) {
        super(props);
    }

    static ClassNames = {
        root: "grid-item",
        span: span => "grid-item--span-" + span,
        offset: offset => "grid-item--offset-" + offset,
    };

    render() {
        const {span, offset, children, additionalClasses, key} = this.props;
        const allClasses = classNames(
            [
                GridItem.ClassNames.root,
                span && GridItem.ClassNames.span(span),
                offset && GridItem.ClassNames.offset(offset),
                additionalClasses
            ]
        );
        return (
            <div key={ key } className={ allClasses }>
                { children }
            </div>
        );
    }
}
