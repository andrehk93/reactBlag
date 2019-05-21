import * as React from "react";
import profileData from "../../../mockdata/profile";
import {PageContainer} from "../../layouts/page/PageContainer";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import {Introduction} from "../../components/introduction/Introduction";

export default class Profile extends React.Component {
    static displayName = 'Profile';

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            error: null,
            profile: null
        };
    }

    componentDidMount() {
        fetch("http://org.ntnu.no/fotball/blag/reactBlag/backend/getProfile.php")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            profile: result,
                            isLoaded: true,
                        }
                    )
                },
                (error) => {
                    console.log('ERROR: ', error);
                    this.setState({
                        error: error,
                        profile: profileData,
                        isLoaded: true
                    })
                }
            )
    }

    renderJsonData() {
        const { isLoaded, error, profile } = this.state;
        console.log('Profile: ', profile);
        console.log('isLoaded: ', isLoaded);
        console.log('Error: ', error);
        if (isLoaded && profile) {
            return (
                <dl>
                    {
                        Object.keys(profile[0]).map((field) => (
                            <dd>{ field }</dd>
                        ))
                    }
                </dl>
            );
        } else if (!isLoaded) {
            return <CircularProgress color="secondary" />;
        } else {
            return (
                <div>
                    <p>
                        { error }
                    </p>
                </div>
            );
        }
    }

    render() {
        return (
            <PageContainer>
                {[
                    <Introduction
                        title={'Min profil'}
                        introduction={'Her kan du se profildetaljene dine, ' +
                        'samt endre enkelte felter. Husk at passord ikke må deles med andre!'}
                    />,
                    this.renderJsonData()
                ]}
            </PageContainer>
        )
    }


}