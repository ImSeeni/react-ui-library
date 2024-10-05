// src/components/MyDialogContent.tsx
import React from "react";

import DialogContent, { DialogContentProps } from "@mui/material/DialogContent";

export type MyDialogContentProps = DialogContentProps;

const MyDialogContent: React.FC<MyDialogContentProps> = (props) => {
    return <DialogContent {...props} />;
};

export default MyDialogContent;
