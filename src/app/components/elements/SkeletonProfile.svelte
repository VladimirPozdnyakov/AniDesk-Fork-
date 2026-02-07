<div class="skeleton-profile-container">
    <div class="skeleton-cover skeleton"></div>
    <div class="skeleton-profile">
        <div class="skeleton-main-info flex-row">
            <div class="skeleton-avatar-wrapper">
                <div class="skeleton-avatar skeleton"></div>
            </div>
            <div class="skeleton-info-main flex-column">
                <div class="skeleton-name-row flex-row">
                    <div class="skeleton-username skeleton"></div>
                    <div class="skeleton-badge skeleton"></div>
                    <div class="skeleton-reputation skeleton"></div>
                    <div class="skeleton-online skeleton"></div>
                </div>
                <div class="skeleton-status skeleton"></div>
                <div class="skeleton-roles flex-row">
                    <div class="skeleton-role skeleton"></div>
                    <div class="skeleton-role skeleton"></div>
                </div>
                <div class="skeleton-socials flex-row">
                    <div class="skeleton-social skeleton"></div>
                    <div class="skeleton-social skeleton"></div>
                    <div class="skeleton-social skeleton"></div>
                </div>
            </div>
        </div>
        <div class="skeleton-stats flex-column">
            <div class="skeleton-stats-title skeleton"></div>
            <div class="skeleton-bookmark-bar skeleton"></div>
            <div class="skeleton-bookmark-dots flex-row">
                <div class="skeleton-dot-item skeleton"></div>
                <div class="skeleton-dot-item skeleton"></div>
                <div class="skeleton-dot-item skeleton"></div>
                <div class="skeleton-dot-item skeleton"></div>
                <div class="skeleton-dot-item skeleton"></div>
            </div>
            <div class="skeleton-watch-info flex-row">
                <div class="skeleton-watch-stat skeleton"></div>
                <div class="skeleton-watch-stat skeleton"></div>
            </div>
        </div>
        <div class="skeleton-section">
            <div class="skeleton-section-title skeleton"></div>
            <div class="skeleton-dynamic-bar skeleton"></div>
        </div>
        <div class="skeleton-section">
            <div class="skeleton-section-title skeleton"></div>
            <div class="skeleton-cards flex-row">
                <div class="skeleton-card skeleton"></div>
                <div class="skeleton-card skeleton"></div>
                <div class="skeleton-card skeleton"></div>
                <div class="skeleton-card skeleton"></div>
                <div class="skeleton-card skeleton"></div>
            </div>
        </div>
    </div>
</div>

<style>
    .skeleton-profile-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: max-content;
        position: relative;
    }

    .skeleton-cover {
        width: 100%;
        height: 400px;
        position: absolute;
    }

    .skeleton-profile {
        z-index: 1;
        min-width: 930px;
        max-width: 1200px;
        width: 100%;
        margin-top: 312px;
    }

    .skeleton-main-info {
        align-items: flex-start;
    }

    .skeleton-avatar-wrapper {
        border-radius: 100%;
        outline: 6px solid var(--background-color);
        flex-shrink: 0;
    }

    .skeleton-avatar {
        width: 175px;
        height: 175px;
        border-radius: 100%;
    }

    .skeleton-info-main {
        margin-left: 10px;
        margin-top: 95px;
        width: 100%;
        gap: 10px;
    }

    .skeleton-name-row {
        align-items: center;
        gap: 10px;
        width: 100%;
    }

    .skeleton-username {
        height: 32px;
        width: 200px;
        border-radius: 6px;
    }

    .skeleton-badge {
        width: 38px;
        height: 38px;
        border-radius: 6px;
    }

    .skeleton-reputation {
        width: 50px;
        height: 25px;
        border-radius: 5px;
    }

    .skeleton-online {
        height: 14px;
        width: 120px;
        border-radius: 4px;
        margin-left: auto;
    }

    .skeleton-status {
        height: 16px;
        width: 250px;
        border-radius: 4px;
    }

    .skeleton-roles {
        gap: 7px;
    }

    .skeleton-role {
        height: 24px;
        width: 90px;
        border-radius: 20px;
    }

    .skeleton-socials {
        gap: 10px;
        margin-top: 5px;
    }

    .skeleton-social {
        width: 53px;
        height: 34px;
        border-radius: 10px;
    }

    .skeleton-stats {
        margin-top: 15px;
        gap: 10px;
    }

    .skeleton-stats-title {
        height: 24px;
        width: 140px;
        border-radius: 4px;
    }

    .skeleton-bookmark-bar {
        height: 28px;
        width: 100%;
        border-radius: 10px;
    }

    .skeleton-bookmark-dots {
        gap: 15px;
        flex-wrap: wrap;
    }

    .skeleton-dot-item {
        height: 16px;
        width: 120px;
        border-radius: 4px;
    }

    .skeleton-watch-info {
        gap: 15px;
        margin-top: 2px;
    }

    .skeleton-watch-stat {
        height: 16px;
        width: 180px;
        border-radius: 4px;
    }

    .skeleton-section {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        gap: 12px;
    }

    .skeleton-section-title {
        height: 24px;
        width: 200px;
        border-radius: 4px;
    }

    .skeleton-dynamic-bar {
        height: 180px;
        width: 100%;
        border-radius: 10px;
    }

    .skeleton-cards {
        gap: 15px;
    }

    .skeleton-card {
        width: 169px;
        height: 242px;
        border-radius: 15px;
        flex-shrink: 0;
    }
</style>
