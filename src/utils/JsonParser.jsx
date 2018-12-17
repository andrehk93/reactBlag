import React from "react";

export default function parseMockData(jsonArray, degree, WrapperComponent) {
    console.log("jsonArray: ", jsonArray);
    if (degree === 1) {
        return jsonArray.map((cell) => {
            return (
                <WrapperComponent>
                    {cell}
                </WrapperComponent>
            );
        })
    } else if (degree === 2) {
        return jsonArray.map((cellArray) => {
            return (
                <WrapperComponent>
                    {cellArray.map((cell) => {
                        return cell;
                    })}
                </WrapperComponent>
            )
        })
    }
};