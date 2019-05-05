import React from 'react';
import classNames from "../../utils/ClassNames";
import PropTypes from 'prop-types';

export class Button extends React.Component {

    static displayName = "Button";

    static ButtonSkin = {
        PRIMARY: 'primary',
        SECONDARY: 'secondary',
        TERTIARY: 'tertiary',
    };

    static ClassNames = {
        skin: skin => "button--skin-" + skin,
    };

    static propTypes = {
        skin: PropTypes.oneOf(Object.values(Button.ButtonSkin)),
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    onClick = (__event) => {
        const {onClick} = this.props;
        onClick && onClick(__event);
    };

    render() {
        const { skin, children } = this.props;
        const classes = classNames([Button.ClassNames.skin(skin)]);
        return (
            <button className={classes} onClick={this.onClick}>
                { children }
            </button>
        );
    }
}