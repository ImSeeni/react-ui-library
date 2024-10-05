// src/components/MyDialogTitle.tsx
import React from "react";

import DialogTitle, { DialogTitleProps } from "@mui/material/DialogTitle";

export type MyDialogTitleProps = DialogTitleProps;

const MyDialogTitle: React.FC<MyDialogTitleProps> = (props) => {
    return <DialogTitle {...props} />;
};

export default MyDialogTitle;
