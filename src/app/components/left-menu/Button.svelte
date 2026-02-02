<script>
    import Icon from "../elements/Icon.svelte";

    export let viewportComponentIndex;
    export let icon;
    export let selected
    export let type = "viewport";
    export let modalComponent;
    export let argsComponent = null;
    export let title = "";
    export let ariaLabel = title;

    let modalShowed = false;
</script>

<button class="left-menu-button" onclick={() => type == "viewport" ? updateViewportComponent(viewportComponentIndex, argsComponent) : modalShowed = !modalShowed} class:selected={selected} {ariaLabel} title={title}>
    <Icon src={icon} varColor="--main-text-color" size={{width: 20, height: 20}}/>
    {#if title}
        <span class="tooltip">{title}</span>
    {/if}
</button>

{#if type == "modal" && modalShowed}
<svelte:component this={modalComponent} showed={modalShowed} on:closeModal={() => modalShowed = false}></svelte:component>
{/if}

<style>
    .left-menu-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 100%;
        transition: all 0.3s;
    }

    .left-menu-button:hover {
        background-color: var(--select-button-left-color);
    }

    .selected {
        background-color: var(--select-button-left-color);
    }

    .selected:hover {
        background-color: var(--background-color);
    }

    .left-menu-button:focus-visible {
        box-shadow: 0 0 0 2px var(--main-text-color);
    }

    .left-menu-button {
        position: relative;
    }

    .tooltip {
        position: absolute;
        left: 70px;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--alt-background-color);
        color: var(--main-text-color);
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 14px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s, visibility 0.2s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        pointer-events: none;
    }

    .tooltip::before {
        content: '';
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border: 6px solid transparent;
        border-right-color: var(--alt-background-color);
    }

    .left-menu-button:hover .tooltip {
        opacity: 1;
        visibility: visible;
    }
</style>