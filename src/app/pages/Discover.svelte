<script>
    import SkeletonAnimeCard from "../components/elements/SkeletonAnimeCard.svelte";
    import SkeletonPoster from "../components/elements/SkeletonPoster.svelte";
    import SkeletonColumnCard from "../components/elements/SkeletonColumnCard.svelte";
    import SkeletonComment from "../components/elements/SkeletonComment.svelte";
    import AnimePoster from "../components/release/AnimePoster.svelte";
    import AnimeFullRowCard from "../components/elements/AnimeFullRowCard.svelte";
    import AnimeColumnCard from "../components/elements/AnimeColumnCard.svelte";
    import ViewAllButton from "../components/buttons/ViewAllButton.svelte";
    import CommentOutOfRelesaeItem from "../components/elements/CommentOutOfRelesaeItem.svelte";
    import BaseModal from "../components/modal/BaseModal.svelte";
    import WatchingModal from "../components/discover/WatchingModal.svelte";
    import MetaInfo from "../components/gui/MetaInfo.svelte";

    async function getDiscover() {
        return {
            interesting: await anixApi.discover.getInteresting(),
            discussing: await anixApi.discover.getDiscussing(),
            comments: await anixApi.discover.getComments(),
            watching: await anixApi.discover.getWatching(0),
            recomendations: await anixApi.discover.getRecommendations(0),
            collections: await anixApi.collection.all(0, null, {
                queryParams: { previous_page: -1, where: 2, sort: 4 },
            }),
        };
    }

    function scrollToIndex(index) {
        const container = document.querySelector(".interesting");
        const items = document.querySelectorAll(".interesting-item");

        const containerCenter = container.offsetWidth / 2;
        const item = items[index];
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;

        container.scrollTo({
            left: itemCenter - containerCenter,
            behavior: "smooth",
        });
    }

    let windowWidth, windowHeight, height, width, modalSubTitle;
    let viewLastCard = false,
        watchingModalShowed = false;

    let activeIndex = 0;

    $: viewLastCard = !(windowWidth < 1700);

    function sliderPrevClick() {
        if (activeIndex > 0) {
            activeIndex--;
            scrollToIndex(activeIndex);
        }
    }

    function sliderNextClick() {
        const items = document.querySelectorAll(".interesting-item");

        if (activeIndex < items.length - 1) {
            activeIndex++;
            scrollToIndex(activeIndex);
        }
    }

    function interestingItemClick(r) {
        updateViewportComponent(8, { id: Number(r.action) });
    }
</script>

<svelte:window bind:outerWidth={windowWidth} bind:outerHeight={windowHeight} />

<MetaInfo subTitle="Обзор" />

{#await getDiscover()}
    <div class="skeleton-discover-wrapper">
        <div class="interesting-slider-wrapper">
            <div class="spacer"></div>
            <div class="interesting flex-row">
                <SkeletonPoster />
            </div>
            <div class="spacer"></div>
        </div>
        <div class="container flex-column">
            <div class="discussing">
                <span class="main-title title-margin">Обсуждаемое сегодня</span>
                <SkeletonAnimeCard />
                <SkeletonAnimeCard />
                <SkeletonAnimeCard />
            </div>
            <div class="anime-column-row">
                <div class="current-view flex-row">
                    <span class="main-title">Сейчас смотрят</span>
                </div>
                <div class="anime-row flex-row">
                    <SkeletonColumnCard />
                    <SkeletonColumnCard />
                    <SkeletonColumnCard />
                    <SkeletonColumnCard />
                </div>
            </div>
            <div class="popular-comments">
                <span class="main-title title-margin">Комментарии недели</span>
                <SkeletonComment />
                <SkeletonComment />
                <SkeletonComment />
            </div>
        </div>
    </div>
{:then d}
    <div class="interesting-slider-wrapper">
        <button class="nav prev" onclick={sliderPrevClick}>‹</button>
        <div class="interesting flex-row">
            <div class="spacer"></div>
            {#each d.interesting.content as r}
            <button class="interesting-item" onclick={interestingItemClick(r)}>
                <div class="flex-column">
                    <AnimePoster
                        size={{ height: 420 }}
                        posterInfo={{ poster: r.image, title: r.title }}
                        shadow={true}
                        borderRadius={20}
                    />
                    <div class="interesting-item-title">{r.title}</div>
                    <div class="interesting-item-description">{r.description}</div>
                </div>
            </button>
            {/each}
            <div class="spacer"></div>
        </div>
        <button class="nav next" onclick={sliderNextClick}>›</button>
    </div>
    <div class="container flex-column">
        <div class="discussing">
            <span class="main-title title-margin">Обсуждаемое сегодня</span>
            {#each d.discussing.content as r}
                <AnimeFullRowCard anime={r}>
                    <div class="comments-info">
                        {r.comment_per_day_count} {utils.getNumericWord(r.comment_per_day_count, ['комментарий', 'комментария', 'комментариев'])}
                    </div>
                </AnimeFullRowCard>
            {/each}
        </div>
        <div class="anime-column-row">
            <div class="current-view flex-row">
                <span class="main-title">Сейчас смотрят</span>
                <ViewAllButton
                    onClickCallback={() => (watchingModalShowed = true)}
                />
            </div>

            <div class="anime-row flex-row">
                {#each d.watching.content.slice(0, viewLastCard ? 6 : 5) as r}
                    <div class="card">
                        <AnimeColumnCard anime={r} />
                    </div>
                {/each}
            </div>
        </div>
        <div class="popular-comments">
            <span class="main-title title-margin">Комментарии недели</span>
            {#each d.comments.content as r}
                <div class="comment-out-of-release">
                    <CommentOutOfRelesaeItem
                        comment={r}
                        release={typeof r.release == "number"
                            ? d.comments.content.find(
                                  (c) => c.release["@id"] == r.release,
                              ).release
                            : null}
                    />
                </div>
            {/each}
        </div>
    </div>

    <BaseModal
        modalComponent={WatchingModal}
        showed={watchingModalShowed}
        modalSize={{ width: "80%", height: "90%" }}
        bind:modalTitle={modalSubTitle}
        on:closeModal={() => (watchingModalShowed = false)}
    />
{/await}

<style>
    .interesting {
        width: 100%;
        margin-top: 20px;
        gap: 20px;
        overflow-x: hidden;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;
        position: relative;
    }

    .interesting-slider-wrapper {
        position: relative;
    }

    .spacer {
        flex: 0 0 calc(50% - 130px);
        scroll-snap-align: none;
        pointer-events: none;
    }

    .comment-out-of-release {
        margin: 0px 15px;
    }

    .popular-comments {
        width: 100%;
    }

    .skeleton-discover-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 20px;
        padding-bottom: 25px;
    }
</style>
