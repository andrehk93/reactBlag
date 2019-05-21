import * as React from "react";

export const PageContainer = (props) => {
    console.log('PROPS: ', props);
    return (
        <div className={"page-container"}>
            { props.children.map((child, i) => (
                <section key={ 'section-' + i }>
                    <div>
                        { child }
                    </div>
                </section>
            ))}
        </div>
    )
};

PageContainer.displayName = 'PageContainer';