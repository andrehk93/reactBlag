import * as React from "react";

export const LineGraph = (props) => {

    const { data } = props;

    return (
        <div>
            <p>Chart data:</p>
            {data}
        </div>
    );
};

LineGraph.displayName = "LineGraph";