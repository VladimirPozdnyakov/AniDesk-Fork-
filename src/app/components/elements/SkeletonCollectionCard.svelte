<div class="skeleton-collection-row-card">
    <div class="skeleton-poster"></div>
    <div class="skeleton-info">
        <div class="skeleton-title"></div>
        <div class="skeleton-counts flex-row">
            <div class="skeleton-count-icon"></div>
            <div class="skeleton-favorites"></div>
            <div class="skeleton-count-separator"></div>
            <div class="skeleton-comments"></div>
        </div>
        <div class="skeleton-description">
            <div class="skeleton-line medium"></div>
            <div class="skeleton-line long"></div>
        </div>
    </div>
</div>

<style>
    .skeleton-collection-row-card {
        margin: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .skeleton-poster {
        width: 400px;
        height: 224px;
        border-radius: 15px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        margin-right: 20px;
        flex-shrink: 0;
    }

    .skeleton-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .skeleton-title {
        height: 28px;
        width: 80%;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
    }

    .skeleton-counts {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .skeleton-count-icon {
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
    }

    .skeleton-favorites {
        height: 14px;
        width: 20px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
    }

    .skeleton-count-separator {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
    }

    .skeleton-comments {
        height: 14px;
        width: 20px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
    }

    .skeleton-description {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .skeleton-line {
        height: 14px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
    }

    .skeleton-line.medium {
        width: 90%;
    }

    .skeleton-line.long {
        width: 100%;
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
