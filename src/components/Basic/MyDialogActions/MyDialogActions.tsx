// src/components/MyDialogActions.tsx
import React from "react";

import DialogActions, { DialogActionsProps } from "@mui/material/DialogActions";

export type MyDialogActionsProps = DialogActionsProps;

const MyDialogActions: React.FC<MyDialogActionsProps> = (props) => {
    return <DialogActions {...props} />;
};

export default MyDialogActions;
