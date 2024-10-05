// src/components/MyDialogActions.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { MyButton } from "../MyButton";
import MyDialogActions from "./MyDialogActions";

// Metadata about the story
const meta: Meta<typeof MyDialogActions> = {
    title: "Components/Basic/MyDialogActions",
    component: MyDialogActions,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyDialogActions>;

// Primary story
export const Primary: Story = {
    args: {
        children: (
            <>
                <MyButton>Disagree</MyButton>
                <MyButton autoFocus>Agree</MyButton>
            </>
        ),
    },
};
