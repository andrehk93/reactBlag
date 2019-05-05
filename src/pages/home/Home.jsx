import * as React from "react";
import games from "../../../mockdata/matchesPreUpdate";
import newsArticles from "../../../mockdata/newsArticles";
import {Card} from "../../components/card/Card";
import {PageContainer} from "../../layouts/page/PageContainer";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Grid from "../../layouts/grid/Grid";
import GridItem from "../../layouts/grid/GridItem";
import {NewsStory} from "../news/NewsStory";
import Carousel from "../../components/carousel/Carousel";
import {Alignment} from "../../utils/statics/Alignment";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            matches: [],
            news: newsArticles,
        };
    }

    componentDidMount() {
        fetch("http://org.ntnu.no/fotball/blag/reactBlag/backend/getMatches.php")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            matches: result,
                            isLoaded: true,
                        }
                    )
                },
                (error) => {
                    this.setState({
                        error: error,
                        matches: games,
                        isLoaded: true
                    })
                }
            )
    }

    renderMatchTeasers(amount) {
        const { matches } = this.state;

        return matches[0].map((cell, i) => {
            if (i >= amount) {
                return;
            }
            const desc = cell[5];
            let teaser = '';
            if (desc) {
                let words = desc.split(' ');
                let w = 0;
                while (teaser.length < 200 && w < words.length) {
                    teaser += words[w] + ' ';
                    w ++;
                }
                teaser = teaser.trim();
                teaser += '...';
            }
            return (
                <GridItem>
                    <Card key={cell[0]} title={'Kamp: ' + cell[1]} description={ [teaser] } date={cell[4]} skin={Card.Skin.TERTIARY}/>
                </GridItem>
            )
        })
    }

    renderNewsTeasers(amount) {
        const { news } = this.state;
        let newsItems = [];

        for (let i = 0; i < amount; i++) {
            let newsDetails = news[i];
            const desc = newsDetails[2];
            let teaser = '';
            if (desc) {
                let words = desc.split(' ');
                let w = 0;
                while (teaser.length < 250 && w < words.length) {
                    teaser += words[w] + ' ';
                    w ++;
                }
                teaser = teaser.trim();
                teaser += '...';
            }
            newsItems.push(
                <Card title={ newsDetails[3] } date={ newsDetails[4] }
                      description={ [teaser] } skin={ Card.Skin.PRIMARY }/>
            );
        }

        return newsItems;
    }

    render() {
        const { isLoaded } = this.state;
        if (!isLoaded) {
            return <CircularProgress color="secondary" />;
        } else {
            return (
                <PageContainer>
                    <Grid>
                        <GridItem additionalClasses={Alignment.CENTER}>
                            <Card noButtons firstHeader title={'Velkommen til NTNUi B-laget!'} description={['Vi er en gjeng med studenter ' +
                            'som elsker å spille fotball, men som fortsatt ønsker å kunne gjøre andre ' +
                            'ting ved siden av. Vi har lenge vært i 5. divisjon, da A-laget aldri makter å rykke opp.' +
                            'For å kunne bli med, bør du ha vært innom 5. divisjon eller høyere før, men alle skal få' +
                            'lov til å vise hva de kan!']}/>
                        </GridItem>
                        <GridItem>
                            <h2>{ "Siste nyheter" }</h2>
                        </GridItem>
                        <Carousel items={ this.renderNewsTeasers(8) }/>
                    </Grid>
                    <Grid composition={Grid.Composition.TWO}>
                        <GridItem>
                            <h2>Chat</h2>
                        </GridItem>
                        <GridItem>
                            <Grid>
                                <GridItem>
                                    <h2>{ 'Siste kamper' }</h2>
                                </GridItem>
                                { this.renderMatchTeasers(5) }
                            </Grid>
                        </GridItem>
                    </Grid>
                </PageContainer>
            );
        }
    }
}