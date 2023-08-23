<script>
	import "./StuiLoader.scss";

	/**
	 * Color of loader
	 *
	 * @type {string}
	 * @default var(--stui-primary-text)
	 */
	export let color = "var(--stui-primary-text)";

	/**
	 * Loader thick
	 *
	 * @type {number}
	 * @default 5
	 */
	export let thick = 5;
</script>

<div class="loader" style:stroke={color} style:stroke-width={`${thick}`}>
	<svg class="circular-loader" viewBox="25 25 50 50">
		<circle
			class="loader-path"
			cx="50"
			cy="50"
			r="22"
			fill="none"
			stroke="inherit"
			stroke-width="inherit"
		/>
	</svg>
</div>
