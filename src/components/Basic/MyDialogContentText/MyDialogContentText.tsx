// src/components/MyDialogContentText.tsx
import React from "react";

import DialogContentText, {
    DialogContentTextProps,
} from "@mui/material/DialogContentText";

export type MyDialogContentTextProps = DialogContentTextProps;

const MyDialogContentText: React.FC<MyDialogContentTextProps> = (props) => {
    return <DialogContentText {...props} />;
};

export default MyDialogContentText;
