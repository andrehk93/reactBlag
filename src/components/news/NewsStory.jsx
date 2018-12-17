import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

function NewsStory(props) {
    const { classes, children } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {children[3]}
                    </Typography>
                    <Typography component="p" className={classes.text}>
                        {children[2]}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Del
                </Button>
                <Button size="small" color="primary">
                    Les mer
                </Button>
            </CardActions>
        </Card>
    );
}

NewsStory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsStory);