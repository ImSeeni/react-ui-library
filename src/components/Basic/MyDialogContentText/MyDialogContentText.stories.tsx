// src/components/MyDialogContentText.stories.tsx
import { Meta, StoryObj } from "@storybook/react";

import MyDialogContentText from "./MyDialogContentText";

// Metadata about the story
const meta: Meta<typeof MyDialogContentText> = {
    title: "Components/Basic/MyDialogContentText",
    component: MyDialogContentText,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyDialogContentText>;

// Primary story
export const Primary: Story = {
    args: {
        children: `Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.`,
    },
};
