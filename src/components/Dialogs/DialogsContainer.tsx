import React from 'react';
import {actions} from "../../redux/dialogs-reducer";
import Dialogs from "../../components/Dialogs/Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import { AppStateType } from '../../redux/redux-store';

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions})
)(Dialogs);