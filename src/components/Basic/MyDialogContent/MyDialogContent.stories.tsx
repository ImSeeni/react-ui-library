// src/components/MyDialogContent.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { MyDialogContentText } from "../MyDialogContentText";
import MyDialogContent from "./MyDialogContent";

// Metadata about the story
const meta: Meta<typeof MyDialogContent> = {
    title: "Components/Basic/MyDialogContent",
    component: MyDialogContent,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyDialogContent>;

// Primary story
export const Primary: Story = {
    args: {
        children: (
            <MyDialogContentText>
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
            </MyDialogContentText>
        ),
    },
};
