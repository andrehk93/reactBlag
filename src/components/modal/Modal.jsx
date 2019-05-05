import * as React from "react";
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider';
import { Button } from "../button/Button";

export const BlagModal = ( props ) => {

    return (
        <Modal open={ props.open } onEscapeKeyDown={ props.onEscapeKeyDown } onBackdropClick={ props.onBackdropClick }>
            <div className={ "modal--item" }>
                <List>
                    <ListItem>
                        <Avatar>
                            <WorkIcon/>
                        </Avatar>
                        <ListItemText primary={ props.title } secondary={ new Date().toDateString() }/>
                    </ListItem>
                    <li>
                        <Divider variant="inset" />
                    </li>
                    <ListItem>
                        { props.children }
                    </ListItem>
                    <ListItem>
                        <Button onClick={ props.close }>
                            { "Avbryt" }
                        </Button>
                    </ListItem>
                </List>
            </div>
        </Modal>
    )
};

BlagModal.propTypes = {
    open: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
    title: PropTypes.string,
    onEscapeKeyDown: PropTypes.func,
    onBackdropClick: PropTypes.func
};
BlagModal.displayName = "Modal";
