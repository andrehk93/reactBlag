import React from "react";
import PropTypes from 'prop-types';
import classNames from "../../utils/ClassNames";
import {Button} from "../button/Button";

export const carouselInterval = 5000;


export default class Carousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItem: props.startItem || 0,
            cycles: 0,
            timer: setTimeout(() => {
                this.rotateOnce(1);
            }, props.interval || carouselInterval)
        }
    }

    static displayName = 'Carousel';

    static propTypes = {
        startItem: PropTypes.number,
        title: PropTypes.string,
        cycleTime: PropTypes.number,
        totalCycles: PropTypes.number,
        items: PropTypes.any
    };

    static styleClass = {
        root: 'carousel',
        panelRoot: 'carousel--panel',
        controlRoot: 'carousel--controls',
        controlPagination: 'carousel--controls-pagination',
    };

    onClick = (direction) => (__event) => {
        this.rotateOnce(direction);
    };

    rotateOnce = (direction) => {
        const currentStep = this.state.activeItem;
        let newActiveItem = currentStep;
        if (currentStep > 0 && currentStep < this.props.items.length - 1) {
            newActiveItem += direction;
        } else if (currentStep === 0) {
            if (direction < 0) {
                newActiveItem = this.props.items.length - 1;
            } else {
                newActiveItem += direction;
            }
        } else {
            if (direction > 0) {
                newActiveItem = 0;
            } else {
                newActiveItem += direction;
            }
        }
        this.setState({
            activeItem: newActiveItem,
            timer: setTimeout(() => {
                this.rotateOnce(1);
            }, this.props.interval || carouselInterval)
        });
    };

    setActiveItem = (index) => (__event) => {
        __event.preventDefault();
        this.setState({activeItem: index});
    };

    paginationButtons = () => {
        const { items } = this.props;
        let buttons = [];
        let count = 5;
        let startIndex = Math.max(this.state.activeItem - 2, 0);
        let endIndex = Math.min(startIndex + count, items.length);
        const total = endIndex - startIndex;
        if (total < count) {
            startIndex = Math.max(startIndex - (count - total), 0);
        }

        for (let i = startIndex; i < endIndex; i++) {
            buttons.push(
                <a key={'a-' + i} onClick={this.setActiveItem(i)}
                   className={i === this.state.activeItem && 'active'}>
                    {i + 1}
                </a>
            )
        }
        return buttons;
    };

    render() {
        const { items } = this.props;
        console.log(items);
        const classes = classNames([Carousel.styleClass.root]);
        return (
            <div className={classes}>
                { React.Children.map(items, (child, i) => {
                    if (i === this.state.activeItem) {
                        let panelClasses = classNames([Carousel.styleClass.panelRoot]);
                        return (
                            <div className={panelClasses}>
                                { child }
                            </div>
                        )
                    }
                }) }
                <div className={Carousel.styleClass.controlRoot}>
                    <Button skin={Button.ButtonSkin.TERTIARY} onClick={this.onClick(-1)}>
                        { 'Forrige' }
                    </Button>
                    <div>
                        <div className={Carousel.styleClass.controlPagination}>
                            {
                                this.paginationButtons()
                            }
                        </div>
                    </div>
                    <Button skin={Button.ButtonSkin.TERTIARY} onClick={this.onClick(1)}>
                        { 'Neste' }
                    </Button>
                </div>
            </div>
        )
    }



}