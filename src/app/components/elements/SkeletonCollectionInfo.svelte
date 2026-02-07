<div class="skeleton-collection-wrapper">
    <div class="skeleton-cover skeleton"></div>
    <div class="skeleton-author-section">
        <div class="skeleton-author-left flex-row">
            <div class="skeleton-avatar skeleton"></div>
            <div class="skeleton-author-name skeleton"></div>
        </div>
        <div class="skeleton-dates">
            <div class="skeleton-date-line skeleton"></div>
            <div class="skeleton-date-line skeleton"></div>
        </div>
    </div>
    <div class="skeleton-info-center">
        <div class="skeleton-title skeleton"></div>
        <div class="skeleton-buttons">
            <div class="skeleton-button skeleton"></div>
        </div>
        <div class="skeleton-description">
            <div class="skeleton-desc-line medium skeleton"></div>
            <div class="skeleton-desc-line long skeleton"></div>
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
        width: 100%;
        max-width: 890px;
        aspect-ratio: 89 / 50;
        border-radius: 15px;
        flex-shrink: 0;
    }

    .skeleton-author-section {
        width: 100%;
        max-width: 880px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .skeleton-author-left {
        align-items: center;
        gap: 10px;
    }

    .skeleton-avatar {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        flex-shrink: 0;
    }

    .skeleton-author-name {
        height: 16px;
        width: 120px;
        border-radius: 4px;
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
    }

    .skeleton-info-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 880px;
        gap: 15px;
        margin-top: 20px;
    }

    .skeleton-title {
        height: 30px;
        width: 70%;
        border-radius: 4px;
    }

    .skeleton-buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
    }

    .skeleton-button {
        height: 40px;
        width: 100px;
        border-radius: 10px;
    }

    .skeleton-description {
        width: 100%;
        max-width: 880px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 5px;
    }

    .skeleton-desc-line {
        height: 14px;
        border-radius: 4px;
    }

    .skeleton-desc-line.medium {
        width: 90%;
    }

    .skeleton-desc-line.long {
        width: 100%;
    }
</style>
