import { NewsStory } from "./NewsStory";
import React from "react";
import {Route} from "react-router-dom";
import newsArticles from "../../../mockdata/newsArticles";
import parseMockData from "../../utils/JsonParser";
import {NewsForm} from "../../forms/news/NewsForm";
import Divider from '@material-ui/core/Divider';
import { Button } from "../../components/button/Button";
import {BlagModal} from "../../components/modal/Modal";
import {PageContainer} from "../../layouts/page/PageContainer";

export default class News extends React.Component {

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
            <PageContainer>
                <h1>Nyheter</h1>
                <Button onClick={this.onClick}>
                    {"Opprett nyhet"}
                </Button>
                <Divider variant={"inset"}/>
                <br/>
                {
                    <div className={"grid"}>
                        { parseMockData(newsArticles, 2, NewsStory) }
                    </div>
                }
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

            </PageContainer>
        )
    }
}
