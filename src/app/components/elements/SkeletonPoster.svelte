<style>
    .skeleton-poster {
        width: 420px;
        height: 420px;
        border-radius: 20px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        flex-shrink: 0;
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
