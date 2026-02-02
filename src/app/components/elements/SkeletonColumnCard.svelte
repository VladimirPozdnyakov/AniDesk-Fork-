<div class="skeleton-column-card">
    <div class="skeleton-poster"></div>
    <div class="skeleton-title"></div>
    <div class="skeleton-episodes"></div>
</div>

<style>
    .skeleton-column-card {
        margin-left: 20px;
        margin-bottom: 20px;
        margin-top: 20px;
        margin-right: 20px;
        max-width: 169px;
        border-radius: 20px;
        padding: 10px;
    }

    .skeleton-poster {
        width: 169px;
        height: 242px;
        border-radius: 20px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        margin-bottom: 10px;
    }

    .skeleton-title {
        height: 14px;
        width: 80%;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
        margin-bottom: 5px;
    }

    .skeleton-episodes {
        height: 12px;
        width: 40%;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
    }

    @keyframes skeletonAnimation {
        0% {
            background-color: var(--skeleton-background-color);
        }

        50% {
            background-color: var(--skeleton-animation-color);
        }

        100% {
            background-color: var(--skeleton-background-color);
        }
    }
</style>
