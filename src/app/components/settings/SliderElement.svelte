<script>
    export let title;
    export let description;
    export let value = 0;
    export let min = 0;
    export let max = 100;
    export let step = 1;
    export let suffix = "";
    export let onChangeCallback;
    export let disabled = false;

    $: percentage = ((value - min) / (max - min)) * 100;

    function _onChange(e) {
        const newValue = Number(e.target.value);
        onChangeCallback({ target: { value: newValue } });
    }
</script>

<div class="slider-element flex-row" class:disabled={disabled}>
    <div class="slider-info flex-column">
        <span class="slider-title">{title}</span>
        {#if description}
            <span class="slider-description">{description}</span>
        {/if}
    </div>
    <div class="slider-input-container flex-row">
        <input
            type="range"
            class="slider-input"
            {min}
            {max}
            {step}
            {value}
            oninput={_onChange}
            disabled={disabled}
            style="--slider-position: {percentage}%;"
        />
        <span class="slider-value">{value}{suffix}</span>
    </div>
</div>

<style>
    .slider-element {
        width: max-content;
        justify-content: space-between;
        margin: 10px auto;
        width: 80%;
        transition: opacity 0.1s ease-in-out;
    }

    .slider-title {
        font-size: 16px;
        font-weight: bold;
        color: var(--main-text-color);
        margin-bottom: 5px;
    }

    .slider-description {
        font-size: 14px;
        color: var(--secondary-text-color);
    }

    .slider-input-container {
        align-items: center;
        gap: 15px;
    }

    .slider-input {
        appearance: none;
        width: 100px;
        height: 6px;
        border-radius: 9999px;
        background: linear-gradient(90deg, #ffffff var(--slider-position, 0), #5a5a5a var(--slider-position, 0));
        cursor: pointer;
    }

    .slider-input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 14px;
        height: 14px;
        border-radius: 9999px;
        background: #f0f0f0;
        box-shadow: none;
    }

    .slider-input::-moz-range-thumb {
        width: 14px;
        height: 14px;
        border-radius: 9999px;
        background: #f0f0f0;
        border: none;
    }

    .slider-value {
        font-size: 14px;
        font-weight: bold;
        color: var(--main-text-color);
        min-width: 40px;
        text-align: right;
    }
</style>
