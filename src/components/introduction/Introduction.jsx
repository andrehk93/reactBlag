import React from "react";
import {Alignment} from "../../utils/statics/Alignment";
import classNames from "../../utils/ClassNames";
import {Margin} from "../../utils/statics/Margin";

export const Introduction = ({title, introduction, image}) => {
    const classes = classNames([Alignment.CENTER, 'introduction', Margin.VERTICAL_LARGE]);
    if (image) {
        return (
            <div className={classes}>
                <h1>{ title }</h1>
                { image }
                <p>{ introduction }</p>
            </div>
        )
    } else {
        return (
            <div className={classes}>
                <h1>{ title }</h1>
                <p>{ introduction }</p>
            </div>
        )
    }
};

Introduction.displayName = 'Introduction';