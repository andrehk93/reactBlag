import NewsStory from "./NewsStory";
import React from "react";
import {Route} from "react-router-dom";
import Page from "../page/Page";
import newsArticles from "../../../mockdata/newsArticles";
import parseMockData from "../../utils/JsonParser";
import {BlagModal} from "../modal/Modal";
import {NewsForm} from "../../forms/news/NewsForm";
import {BlagButton} from "../button/Button";
import Divider from '@material-ui/core/Divider';

// when the url matches `/tacos` this component renders
export class News extends React.Component {

    static displayName = "News";

    constructor(props) {
        super(props);

        this.state = {openModal: false};
    }

    onClick = () => {
        this.setState({openModal: !this.state.openModal})
    };


    render() {
        return (
            // TODO: Make into List (after Page)
            <Page>
                <h1>Nyheter</h1>
                <BlagButton onClick={this.onClick}>
                    {"Opprett nyhet"}
                </BlagButton>
                <Divider variant={"inset"}/>
                <br/>
                {parseMockData(newsArticles, 2, NewsStory)}
                <BlagModal
                    open={this.state.openModal}
                    onEscapeKeyDown={this.onClick}
                    onBackdropClick={this.onClick}
                    title={"Skriv en nyhet"}
                    close={this.onClick}
                >
                    <NewsForm url={this.props.match.url + "/story"} errorMsg={"Dette er en feilmelding"}/>
                </BlagModal>
                <Route path={this.props.match.url + "/story"} component={NewsStory} />

            </Page>
        )
    }
}

News.displayName = "News";