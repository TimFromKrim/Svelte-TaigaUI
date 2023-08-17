import StuiButton from "../lib/components/StuiButton/StuiButton.svelte";

export default {
	title: "StuiButton",
	component: StuiButton,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: {type: "select"},
			options: ["XS", "S", "M", "L", "Fill"],
		},
		appearance: {
			control: {type: "select"},
			options: ["Flex", "Primary"],
		},
		backgroundColor: {control: "color"},
		backgroundColorHover: {control: "color"},
		textColor: {control: "color"},
	},
};

export const normal = {};
