<script>
    import AnimePoster from "../release/AnimePoster.svelte";
    import Dot from "./Dot.svelte";
    
    export let anime;

    function handleClick() {
        updateViewportComponent(8, { id: anime.id });
    }

    function handleKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    }
</script>

<anime-column-card 
    class="flex-column" 
    onclick={handleClick}
    onkeydown={handleKeydown}
    tabindex="0"
    role="button"
    aria-label={`Перейти к ${anime.title_ru || anime.title}`}
>
    <div class="full-column-anime-poster">
        <AnimePoster size={{ width: 169, height: 242 }} posterInfo={{poster: anime.image, title: anime.title}} shadow={true} borderRadius={20} posterStyle={anime.profile_list_status ?? 0}/>
    </div>
    <div class="anime-item-title">{anime.title_ru}</div>
    <slot></slot>
    <div class="anime-item-epCount flex-row">{utils.returnEpisodeString(anime)} эп. {#if utils.returnEpisodeString(anime) != "?" && anime.status?.id !== 3}<Dot size={{width: 4, height: 4}} />{anime.grade.toFixed(2)} ★{/if}</div>
</anime-column-card>

<style>
    anime-column-card {
        margin-left: 20px;
        margin-bottom: 20px;
        margin-top: 20px;
        margin-right: 20px;
        max-width: 169px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        border-radius: 20px;
        padding: 10px;
        cursor: pointer;
    }

    anime-column-card:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        background-color: var(--alt-background-color);
    }

    anime-column-card:focus-visible {
        transform: scale(1.02);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        background-color: var(--alt-background-color);
        outline: 2px solid var(--main-text-color);
        outline-offset: 2px;
    }
    
    .anime-item-title {
        font-size: 14px;
        color: var(--main-text-color);
        font-weight: 600;
        margin-bottom: 5px;
    }
    
    .anime-item-epCount {
        font-size: var(--anime-full-row-epCount-size);
        color: var(--third-text-color);
        font-weight: var(--anime-full-row-epCount-weight);
        margin-bottom: 10px;
        align-items: center;
    }
    
    :global(.dot) {
        margin-left: 5px;
        margin-right: 5px;
    }
    
    .full-column-anime-poster {
        margin-bottom: 10px;
        max-width: 169px;
    }
</style>