import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

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
        fetch("http://www.reddit.com/r/reactjs.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
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
                <div>
                    <h1>React AJAX call</h1>
                    <h2><i>Reddit authors:</i></h2>
                    <ul>
                        {items.data.children.map((child, i) => {
                            return <li key={i}>{child.data.author}</li>
                        })}
                    </ul>
                </div>
            );
        }
    }
}