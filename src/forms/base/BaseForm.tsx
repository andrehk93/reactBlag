import * as React from "react";

export interface IBaseFormProps {
    url: string;
    errorMsg?: string;
}

export interface IBaseFormState {
    valid?: boolean;
    submitted?: "SENT" | "PENDING" | "ERROR";
}

export class BaseForm extends React.Component<IBaseFormProps, IBaseFormState> {

    static displayName = "BaseForm";

    constructor(props: IBaseFormProps) {
        super(props);
    }


    render() {
        return (
            <form>
                {this.props.children}
            </form>
        )
    }
}