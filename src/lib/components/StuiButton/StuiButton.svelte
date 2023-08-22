<script>
	/**
	 * Component Taiga UI Button
	 *
	 * @component TuiButton
	 *
	 * @slot - Default button title text
	 * @slot icoLeft - For left ico, have auto size 24x24px for 'L','M' 16x16px for 'S' and 'XS', use ico component teg
	 *
	 * @param {"XS" | "S" | "M" | "L" | "Block"} size - have 'L','M','S','XS' and "Block" sizes
	 * @param {"Primary"} appearance
	 * @param {string} backgroundColor - background color in HEX
	 * @param {string} backgroundColorHover - background color on hover in HEX
	 * @param {string} textColor - text color in HEX
	 */

	import "./StuiButton.scss";
	import StuiLoader from "$lib/components/StuiLoader/StuiLoader.svelte";

	export let size = "L";
	const validSizes = ["L", "M", "S", "XS", "Block"];
	export let appearance = "Primary";
	const validAppearance = ["Primary"];
	export let textColor = "var(--stui-base-01)";
	export let label = true;
	export let loader = false;
	$: {
		if (!validSizes.includes(size)) size = "L";
	}
</script>

<button
	class="stui-button"
	class:stui-button_primary={appearance == "Primary"}
	class:size-L={size == "L"}
	class:size-M={size == "M"}
	class:size-S={size == "S"}
	class:size-XS={size == "XS"}
	class:size-Block={size == "Block"}
	style:color={textColor}
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
				<StuiLoader color={textColor} />
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
