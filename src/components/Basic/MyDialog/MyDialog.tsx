// src/components/MyDialog.tsx
import React from "react";

import Dialog, { DialogProps } from "@mui/material/Dialog";

export type MyDialogProps = DialogProps;

const MyDialog: React.FC<MyDialogProps> = (props) => {
    return <Dialog {...props}>{props.children}</Dialog>;
};

export default MyDialog;
