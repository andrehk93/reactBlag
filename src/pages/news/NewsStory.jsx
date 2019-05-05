import React from 'react';
import { Card } from "../../components/card/Card";
import GridItem from "../../layouts/grid/GridItem";

/*
Really simple class for rendering NewsStory
 */
export const NewsStory = (props) => {
    const newsDetails = props.children;
    return (
        <GridItem>
            <Card title={ newsDetails[3] } date={ newsDetails[4] }
                  description={ newsDetails[2] && newsDetails[2].split('\n') }
                  skin={ Card.Skin.PRIMARY }/>
        </GridItem>
    );
};

/*
These are important for ease-of-use in other components
 */
NewsStory.displayName = "NewsStory";
