import * as React from "react";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";


export class MultiPurposeCard extends React.Component{
    constructor(props) {
        super(props);
    }

    static styleClass = {
        root: "blag-card"
    };

    render() {
        const { title, description, date } = this.props;
        return (
            <Card className={MultiPurposeCard.styleClass.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography component="p">
                            {description}
                        </Typography>
                        <Typography component={"i"}>
                            {date}
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
};