import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import games from "../../../mockdata/matchesPreUpdate";
import parseMockData from "../../utils/JsonParser";
import {MultiPurposeCard} from "../../components/multiPurposeCard/MultiPurposeCard";

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
            return <MultiPurposeCard key={cell[0]} title={cell[1]} description={cell[5]} date={cell[4]}/>
        })
    }

    render() {
        const { error, isLoaded, items } = this.state;
        console.log("Items: ", items);
        if (error) {
            return (
                <div>
                    <h2>Fetching from local mock data:</h2>
                    {this.renderJsonData()}
                </div>
            );
        } else if (!isLoaded) {
            return <CircularProgress color="secondary" />;
        } else {
            return (
                this.renderJsonData()
            );
        }
    }
}