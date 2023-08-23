<script>
	/**
	 * Component Taiga UI Button
	 *
	 * @component TuiButton
	 *
	 * @slot - Default button title text
	 * @slot icoLeft - For left ico, have auto size 24x24px for 'L','M' 16x16px for 'S' and 'XS', use ico component teg
	 *
	 * @param {string} backgroundColor - background color in HEX
	 * @param {string} backgroundColorHover - background color on hover in HEX
	 * @param {string} textColor - text color in HEX
	 */

	import "./StuiButton.scss";
	import StuiLoader from "$lib/components/StuiLoader/StuiLoader.svelte";

	/**
	 * Size of button
	 *
	 * @type {string}
	 * @param {"XS" | "S" | "M" | "L" | "Block"} size - have 'L','M','S','XS' and "Block" sizes
	 */
	export let size = "L";
	const validSizes = ["L", "M", "S", "XS", "Block"];

	/**
	 * Appearance of button
	 *
	 * @type {string} appearance
	 * @param {"Primary" | "Secondary" | "Accent" | "Flat" | "Outline"} appearance
	 */
	export let appearance = "Primary";
	const validAppearance = [
		"Primary",
		"Secondary",
		"Accent",
		"Flat",
		"Outline",
	];

	export let label = true;
	export let loader = false;

	let loaderColor = {
		Primary: "var(--stui-text-01-night)",
		Secondary: "var(--stui-link)",
	};

	$: {
		if (!validSizes.includes(size)) size = "L";
		if (!validAppearance.includes(appearance)) appearance = "Primary";
	}
</script>

<button
	class="stui-button"
	class:stui-button_primary={appearance == "Primary"}
	class:stui-button_secondary={appearance == "Secondary"}
	class:stui-button_flat={appearance == "Flat"}
	class:stui-button_accent={appearance == "Accent"}
	class:stui-button_outline={appearance == "Outline"}
	class:size-L={size == "L"}
	class:size-M={size == "M"}
	class:size-S={size == "S"}
	class:size-XS={size == "XS"}
	class:size-Block={size == "Block"}
	on:click
	{...$$restProps}
>
	{#if $$slots.icoLeft || loader}
		<div
			class="ico"
			class:ico_big={size == "L" || size == "M" || size == "Block"}
			class:ico_small={size == "S" || size == "XS"}
		>
			{#if loader}
				<StuiLoader color={loaderColor[appearance]} />
			{:else}
				<slot name="icoLeft" />
			{/if}
		</div>
	{/if}

	{#if label && !loader}
		<span
			class:main-text_big={size == "L" || size == "M" || size == "Block"}
			class:main-text_small={size == "S" || size == "XS"}
		>
			<slot>Button</slot>
		</span>
	{/if}
	{#if $$slots.icoRight && !loader}
		<div
			class="ico"
			class:ico_big={size == "L" || size == "M" || size == "Block"}
			class:ico_small={size == "S" || size == "XS"}
		>
			<slot name="icoRight" />
		</div>
	{/if}
</button>
