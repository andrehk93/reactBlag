import * as React from "react";
import {TextField} from "@material-ui/core";
import {ChangeEvent} from "react";

export interface IBaseFieldProps {
    type: string;
    label: string;
    id: string;
    name?: string;
    placeholder?: string;
    classes?: string;
    onChange?: (event: ChangeEvent) => void;
    value?: any;
    errorMsg?: string;
    fullWidth?: boolean;
    multiline?: boolean;
    rows?: number;
}

export interface IBaseFieldState {
    valid: boolean;
}

export class BaseField extends React.Component<IBaseFieldProps, IBaseFieldState> {

    static displayName = "BaseField";

    constructor(props: IBaseFieldProps) {
        super(props);
        this.state = {valid: true};
    }

    onChange = (__event: ChangeEvent) => {
        const { onChange, value } = this.props;
        onChange && onChange(__event);
        console.log("VALUE: ", value);
    };

    fieldOfType = (type: string) => {
        const { value, classes, label, multiline, placeholder, rows, fullWidth } = this.props;
        console.log("FILTER: ", ...this.filterProps(this.props, ["onChange", "value", "classes", "type"]));
        switch (type) {
            case "string":
                return <TextField
                    value={value ? value : undefined}
                    type={ "string" }
                    className={ classes }
                    onChange={this.onChange}
                    label={ label }
                    multiline={multiline}
                    placeholder={placeholder}
                    fullWidth={fullWidth}
                    rows={rows}
                    error={!this.state.valid}
                />;
            case "number":
                return <TextField
                    value={value ? value : undefined}
                    type={ "number" }
                    className={ classes }
                    onChange={this.onChange}
                    error={!this.state.valid}
                />;
            default:
                return <TextField
                    value={value ? value : undefined}
                    type={ "string" }
                    className={ classes }
                    onChange={this.onChange}
                    //{...this.filterProps(this.props, ["onChange", "value", "classes", "type"])}
                    error={!this.state.valid}
                />;
        }
    };

    filterProps = (props: IBaseFieldProps, omit: string[]) => {
        return Object.keys(props).filter((prop: string) => {
            if (!(prop in omit)) {
                return prop;
            }
        })
    };

    render() {
        const { type } = this.props;
        return this.fieldOfType(type);
    }

}