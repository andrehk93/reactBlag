import * as React from "react";
import {BaseForm, IBaseFormProps, IBaseFormState} from "../base/BaseForm";
import {BaseField} from "../base/BaseField";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export interface INewsFormProps extends IBaseFormProps{
    imageInput?: boolean
}

export interface INewsFormState extends IBaseFormState {
    valid?: boolean;
    submit?: "SENT" | "PENDING" | "ERROR";
}

export class NewsForm extends BaseForm {

    static displayName = "NewsForm";

    constructor(props: INewsFormProps) {
        super(props);
    }

    render() {
        return (
            <BaseForm url={this.props.url}>
                <List>
                    <ListItem>
                        <BaseField type={"string"} label={"Tittel"} id={"news-title"} placeholder={"Skriv inn tittel her..."}/>
                    </ListItem>
                    <ListItem>
                        <BaseField type={"string"} label={"Beskrivelse"} id={"news-description"} placeholder={"Skriv nyheten her..."} multiline={true} rows={10} fullWidth={true}/>
                    </ListItem>
                </List>
            </BaseForm>
        );
    }
}
