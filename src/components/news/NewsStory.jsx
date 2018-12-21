import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BlagButton} from "../button/Button";

const styles = {
    card: {
        width: 540,
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginRight: 10,
        marginBottom: 10
    },
    media: {
        height: 140,
    },
    text: {

    }
};

/*
Really simple class for rendering NewsStory
 */
export const NewsStory = (props) => {

    const { classes, children } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography
                        gutterBottom variant="h5"
                        component="h2"
                    >
                        {children[3]}
                    </Typography>
                    <Typography
                        component="p"
                        className={classes.text}
                    >
                        {children[2]}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Del
                </Button>
                <BlagButton
                    size="small"
                    color="primary"
                    onClick={() => {}}
                >
                    Les mer
                </BlagButton>
            </CardActions>
        </Card>
    );
};

/*
These are important for ease-of-use in other components
 */
NewsStory.propTypes = {
    classes: PropTypes.object.isRequired,
};
NewsStory.displayName = "NewsStory";

/*
MaterialUI Export:
 */
export default withStyles(styles)(NewsStory);