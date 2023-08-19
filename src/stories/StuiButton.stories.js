import StuiButton from "../lib/components/StuiButton/StuiButton.svelte";

export default {
	title: "StuiButton",
	component: StuiButton,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: {type: "select"},
			options: ["XS", "S", "M", "L", "Block"],
		},
		appearance: {
			control: {type: "select"},
			options: ["Primary"],
		},
		textColor: {control: "color"},
	},
};

export const normal = {};
