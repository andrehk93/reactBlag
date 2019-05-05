import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import {PageContainer} from "../../layouts/page/PageContainer";

export default class Stallen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://org.ntnu.no/fotball/blag/reactBlag/backend/getPlayers.php")
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
                        isLoaded: true
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        console.log("Items: ", items);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <CircularProgress color="secondary" />;
        } else {
            return (
                <PageContainer>
                    <h1>React AJAX call</h1>
                    <h2><i>B-laget 2017:</i></h2>
                    <ul>
                        {items.map((childArray, i) => {
                            switch (i) {
                                case 0:
                                    return (
                                        <li>
                                            <h1>Keepere</h1><ul>
                                            {childArray.map((child, j) => (
                                                <li key={i + "-" + j}>{child.splice(1, 3).join(" ")}</li>
                                            ))
                                            }
                                        </ul>
                                        </li>);
                                case 1:
                                    return (
                                        <li>
                                            <h1>Forsvarere</h1><ul>
                                            {childArray.map((child, j) => (
                                                <li key={i + "-" + j}>{child.splice(1, 3).join(" ")}</li>
                                            ))
                                            }
                                        </ul>
                                        </li>);
                                case 2:
                                    return (
                                        <li>
                                            <h1>Midtbanespillere</h1><ul>
                                            {childArray.map((child, j) => (
                                                <li key={i + "-" + j}>{child.splice(1, 3).join(" ")}</li>
                                            ))
                                            }
                                        </ul>
                                        </li>);
                                case 3:
                                    return (
                                    <li>
                                        <h1>Angripere</h1><ul>
                                            {childArray.map((child, j) => (
                                                <li key={i + "-" + j}>{child.splice(1, 3).join(" ")}</li>
                                            ))
                                            }
                                        </ul>
                                    </li>);
                            }
                        })}
                    </ul>
                </PageContainer>
            );
        }
    }
}