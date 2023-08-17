<script>
	/**
	 * Component Taiga UI Button
	 *
	 * @component TuiButton
	 *
	 * @slot - Default button title text
	 * @slot icoLeft - For left ico, have auto size 24x24px for 'L','M' 16x16px for 'S' and 'XS', use ico component teg
	 *
	 * @param {"XS" | "S" | "M" | "L" | "Fill"} size - have 'L','M','S','XS' and "Fill" sizes
	 * @param {"Flex" | "Primary"} appearance
	 * @param {string} backgroundColor - background color in HEX
	 * @param {string} backgroundColorHover - background color on hover in HEX
	 * @param {string} textColor - text color in HEX
	 */

	import "@/assets/styles/variables.scss";
	import StuiIconLoader from "../../../assets/stui-icons/iconsComponents/StuiIconLoader.svelte";

	export let size = "L";
	const validSizes = ["L", "M", "S", "XS", "Fill"];
	export let appearance = "Primary";
	const validAppearance = ["Primary", "Flex"];
	export let backgroundColor = "#526ED3";
	export let backgroundColorHover = "#6C86E2";
	export let textColor = "#fff";
	export let label = true;
	export let loader = false;

	$: {
		if (!validSizes.includes(size)) size = "L";
		if (appearance != "Flex" && size == "Fill") size = "L";
	}

	// Flex appearance hover handel
	let isHovered = false;
	$: currentColor = isHovered ? backgroundColorHover : backgroundColor;
</script>

{#if appearance == "Flex" && !loader}
	<button
		class="stui-button"
		class:size-L={size == "L"}
		class:size-M={size == "M"}
		class:size-S={size == "S"}
		class:size-XS={size == "XS"}
		class:size-Fill={size == "Fill"}
		style:background={currentColor}
		style:color={textColor}
		on:mouseenter={() => (isHovered = true)}
		on:mouseleave={() => (isHovered = false)}
		on:click
		{...$$restProps}
	>
		{#if $$slots.icoLeft}
			<div
				class="ico-left"
				class:ico-left_big={size == "L" ||
					size == "M" ||
					size == "Fill"}
				class:ico-left_small={size == "S" || size == "XS"}
			>
				<slot name="icoLeft" />
			</div>
		{/if}

		{#if label}
			<span
				class:main-text_big={size == "L" ||
					size == "M" ||
					size == "Fill"}
				class:main-text_small={size == "S" || size == "XS"}
			>
				<slot>Flex button</slot>
			</span>
		{/if}
	</button>
{/if}

{#if appearance != "Flex" && !loader}
	<button
		class="stui-button"
		class:stui-button_primary={appearance == "Primary"}
		class:size-L={size == "L"}
		class:size-M={size == "M"}
		class:size-S={size == "S"}
		class:size-XS={size == "XS"}
		on:click
		{...$$restProps}
	>
		{#if $$slots.icoLeft}
			<div
				class="ico-left"
				class:ico-left_big={size == "L" ||
					size == "M" ||
					size == "Fill"}
				class:ico-left_small={size == "S" || size == "XS"}
			>
				<slot name="icoLeft" />
			</div>
		{/if}

		{#if label}
			<span
				class:main-text_big={size == "L" ||
					size == "M" ||
					size == "Fill"}
				class:main-text_small={size == "S" || size == "XS"}
			>
				<slot>Button</slot>
			</span>
		{/if}
	</button>
{/if}

{#if loader}
	<button
		class="stui-button"
		class:stui-button_primary={appearance == "Primary"}
		class:size-L={size == "L"}
		class:size-M={size == "M"}
		class:size-S={size == "S"}
		class:size-XS={size == "XS"}
		{...$$restProps}
	>
		<div
			class="ico-left"
			class:ico-left_big={size == "L" || size == "M" || size == "Fill"}
			class:ico-left_small={size == "S" || size == "XS"}
		>
			<StuiIconLoader />
		</div>
	</button>
{/if}

<style lang="scss">
	@use "../../../assets/styles/mediaQueries.scss";

	:root {
		font-size: 10px;
	}

	.stui-button {
		display: flex;
		align-items: center;
		justify-content: center;

		border: 0;

		border-radius: 1.2rem;

		padding: 0;

		font-family: Manrope, sans-serif;
		font-weight: 800;
		font-style: normal;
		font-size: 1.5rem;
		line-height: 2.4rem;
		color: #ffffff;

		background: var(--stui-clear);

		cursor: pointer;

		&_primary {
			color: var(--stui-text-01-night);

			background: var(--stui-primary);

			&:hover {
				@media #{mediaQueries.$stui-mouse-device} {
					background: var(--stui-primary-hover);
				}
			}
		}

		&_accent {
			color: var(--stui-text-01-night);

			background: var(--stui-primary);

			&:hover {
				@media #{mediaQueries.$stui-mouse-device} {
					background: var(--stui-primary-hover);
				}
			}
		}

		// TODO: Make different appearance and configure storybook

		.ico-left {
			&_big {
				max-width: 2.4rem;
				max-height: 2.4rem;
			}

			&_small {
				max-width: 1.6rem;
				max-height: 1.6rem;
			}
		}

		.main-text {
			&_big {
				padding: 0 0.8rem;
			}

			&_small {
				padding: 0 0.4rem;
			}
		}

		&:disabled {
			opacity: 0.5600000023841858;

			cursor: not-allowed;
		}

		&.size-L {
			padding: 0 1.6rem;

			height: 5.6rem;
			min-width: 5.6rem;

			font-weight: 800;
			font-size: 1.5rem;
			line-height: 2rem;
		}

		&.size-M {
			padding: 0 1rem;

			height: 4.4rem;
			min-width: 4.4rem;

			font-weight: 800;
			font-size: 1.5rem;
			line-height: 2rem;
		}

		&.size-S {
			padding: 0 0.8rem;

			height: 3.2rem;
			min-width: 3.2rem;

			font-weight: 800;
			font-size: 1.3rem;
			line-height: 2rem;
		}

		&.size-XS {
			padding: 0 0.4rem;

			height: 2.4rem;
			min-width: 2.4rem;

			font-weight: 800;
			font-size: 1.3rem;
			line-height: 2rem;
		}

		&.size-Fill {
			width: 100%;
			height: 5.6rem;
		}
	}
</style>
