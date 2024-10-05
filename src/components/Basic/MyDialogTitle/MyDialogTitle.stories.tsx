// src/components/MyDialogTitle.stories.tsx
import { Meta, StoryObj } from "@storybook/react";

import MyDialogTitle from "./MyDialogTitle";

// Metadata about the story
const meta: Meta<typeof MyDialogTitle> = {
    title: "Components/Basic/MyDialogTitle",
    component: MyDialogTitle,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyDialogTitle>;

// Primary story
export const Primary: Story = {
    args: {
        children: "Use Google's location service?",
    },
};
