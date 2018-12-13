import * as React from "react";

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ""
        };
    }

    componentDidMount() {
        fetch("http://org.ntnu.no/fotball/blag/chat/chat.php")
            .then(
                (result) => {
                    console.log("result: ", result);
                    this.setState({
                        result: result
                    })
                },
                (error) => {
                    console.log("Error: ", error);
                }
            )
    }

    render() {
        return (
            <p>{this.state.result}</p>
        )
    }
}