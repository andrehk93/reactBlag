import * as React from "react";
import classNames from "../../utils/ClassNames";
import { Button } from '../button/Button';
import PropTypes from 'prop-types';
import Grid from "../../layouts/grid/Grid";
import GridItem from "../../layouts/grid/GridItem";


export class Card extends React.Component{
    constructor(props) {
        super(props);
    }

    static Skin = {
        PRIMARY: 'primary',
        SECONDARY: 'secondary',
        TERTIARY: 'tertiary',
    };

    static propTypes = {
        title: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.string),
        additionalClasses: PropTypes.string,
        skin: PropTypes.oneOf(Object.values(Card.Skin)),
        noButtons: PropTypes.bool,
        firstHeader: PropTypes.bool,
    };

    static styleClass = {
        root: "card",
        skin: skin => "card-skin--" + skin,
    };

    render() {
        const { title, description, date, additionalClasses, skin, noButtons, firstHeader } = this.props;
        const classes = classNames([Card.styleClass.root, skin && Card.styleClass.skin(skin), additionalClasses]);
        return (
            <div className={ classes }>
                <Grid>
                    <GridItem>
                        {
                            firstHeader ?
                                <h1>
                                    { title }
                                </h1>
                                :
                                <h2>
                                    { title }
                                </h2>
                        }
                        <p>
                            <i>
                                { date }
                            </i>
                        </p>
                    </GridItem>
                    <GridItem>
                        {description && description.map((paragraph, i) => (
                            <p key={'p-' + i}>
                                { paragraph }
                            </p>
                        ))}

                    </GridItem>
                    {
                        !noButtons &&
                            (
                                <Grid composition={Grid.Composition.TWO}>
                                    <GridItem>
                                        <Button skin={Button.ButtonSkin.PRIMARY}>
                                            Del
                                        </Button>
                                    </GridItem>
                                    <GridItem>
                                        <Button skin={Button.ButtonSkin.SECONDARY}>
                                            Les mer
                                        </Button>
                                    </GridItem>
                                </Grid>
                            )
                    }
                </Grid>
            </div>
        );
    }
};