// src/components/MyDialog.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { MyButton } from "../MyButton";
import { MyDialogActions } from "../MyDialogActions";
import { MyDialogContent } from "../MyDialogContent";
import { MyDialogContentText } from "../MyDialogContentText";
import { MyDialogTitle } from "../MyDialogTitle";
import MyDialog from "./MyDialog";

// Metadata about the story
const meta: Meta<typeof MyDialog> = {
    title: "Components/Basic/MyDialog",
    component: MyDialog,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyDialog>;

// Primary story
export const Primary: Story = {
    args: {
        open: true,
        children: (
            <>
                <MyDialogTitle>
                    Use Google&apos;s location service?
                </MyDialogTitle>
                <MyDialogContent>
                    <MyDialogContentText>
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google even when no
                        apps are running.
                    </MyDialogContentText>
                </MyDialogContent>
                <MyDialogActions>
                    <MyButton>Disagree</MyButton>
                    <MyButton autoFocus>Agree</MyButton>
                </MyDialogActions>
            </>
        ),
    },
};
