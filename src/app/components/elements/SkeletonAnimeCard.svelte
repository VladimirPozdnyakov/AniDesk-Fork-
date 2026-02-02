<div class="skeleton-anime-card">
    <div class="skeleton-poster"></div>
    <div class="skeleton-info">
        <div class="skeleton-title"></div>
        <div class="skeleton-episodes"></div>
        <div class="skeleton-description">
            <div class="skeleton-line medium"></div>
            <div class="skeleton-line long"></div>
            <div class="skeleton-line short"></div>
        </div>
    </div>
</div>

<style>
    .skeleton-anime-card {
        margin-left: 20px;
        margin-bottom: 20px;
        margin-top: 20px;
        margin-right: 20px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        border-radius: 20px;
        padding: 15px;
        display: flex;
        flex-direction: row;
    }

    .skeleton-poster {
        width: 140px;
        height: 205px;
        border-radius: 20px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        margin-right: 25px;
        flex-shrink: 0;
    }

    .skeleton-info {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .skeleton-title {
        height: 24px;
        width: 60%;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
        margin-bottom: 12px;
    }

    .skeleton-episodes {
        height: 18px;
        width: 30%;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
        margin-bottom: 10px;
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

    .skeleton-line.short {
        width: 90%;
    }

    .skeleton-line.medium {
        width: 95%;
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
