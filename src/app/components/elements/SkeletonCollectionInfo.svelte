<div class="skeleton-collection-wrapper">
    <div class="skeleton-cover"></div>
    <div class="skeleton-author-section">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-dates">
            <div class="skeleton-date-line"></div>
            <div class="skeleton-date-line"></div>
        </div>
    </div>
    <div class="skeleton-info-center">
        <div class="skeleton-title"></div>
        <div class="skeleton-fav-count">
            <div class="skeleton-fav-icon"></div>
            <div class="skeleton-fav-number"></div>
            <div class="skeleton-fav-separator"></div>
            <div class="skeleton-fav-number"></div>
        </div>
        <div class="skeleton-buttons">
            <div class="skeleton-button"></div>
            <div class="skeleton-button"></div>
        </div>
        <div class="skeleton-description">
            <div class="skeleton-desc-line medium"></div>
            <div class="skeleton-desc-line long"></div>
        </div>
    </div>
</div>

<style>
    .skeleton-collection-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 20px 30px 20px;
    }

    .skeleton-cover {
        width: 890px;
        height: 500px;
        border-radius: 15px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        flex-shrink: 0;
    }

    .skeleton-author-section {
        width: 880px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .skeleton-avatar {
        width: 40px;
        height: 40px;
        border-radius: 108%;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        flex-shrink: 0;
    }

    .skeleton-dates {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .skeleton-date-line {
        height: 12px;
        width: 200px;
        border-radius: 4px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
    }

    .skeleton-info-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 880px;
        gap: 15px;
    }

    .skeleton-title {
        height: 30px;
        width: 70%;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
    }

    .skeleton-fav-count {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .skeleton-fav-icon {
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
    }

    .skeleton-fav-number {
        height: 14px;
        width: 30px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
    }

    .skeleton-fav-separator {
        width: 4px;
        height: 4px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 100%;
    }

    .skeleton-buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
    }

    .skeleton-button {
        height: 40px;
        width: 120px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 10px;
    }

    .skeleton-description {
        width: 880px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .skeleton-desc-line {
        height: 14px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
    }

    .skeleton-desc-line.medium {
        width: 90%;
    }

    .skeleton-desc-line.long {
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
