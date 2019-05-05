import * as React from "react";
import games from "../../../mockdata/matchesPreUpdate";
import {Card} from "../../components/card/Card";
import {PageContainer} from "../../layouts/page/PageContainer";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

export default class Kamper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://org.ntnu.no/fotball/blag/reactBlag/backend/getMatches.php")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("ITEMs: ", result);
                    this.setState(
                        {
                            items: result,
                            isLoaded: true,
                        }
                    )
                },
                (error) => {
                    this.setState({
                        error: error,
                        items: games,
                        isLoaded: true
                    })
                }
            )
    }

    renderJsonData() {
        const { items } = this.state;

        return items[0].map((cell) => {
            return <Card key={cell[0]} title={'Kamp: ' + cell[1]} description={cell[5] && cell[5].split('\n')} date={cell[4]} skin={Card.Skin.TERTIARY}/>
        })
    }

    render() {
        const { error, isLoaded, items } = this.state;
        console.log("Items: ", items);
        if (error) {
            console.log('LOCAL data');
            return (
                <PageContainer>
                    {this.renderJsonData()}
                </PageContainer>
            );
        } else if (!isLoaded) {
            return <CircularProgress color="secondary" />;
        } else {
            return (
                <PageContainer>
                    { this.renderJsonData() }
                </PageContainer>
            );
        }
    }
}