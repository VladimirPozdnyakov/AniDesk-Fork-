<div class="skeleton-release flex-row">
    <div class="skeleton-left flex-column">
        <div class="skeleton-poster skeleton"></div>
        <div class="skeleton-play-btn skeleton"></div>
        <div class="skeleton-bookmark-btn skeleton"></div>
        <div class="skeleton-favorite-btn skeleton"></div>
        <div class="skeleton-rating flex-row">
            <div class="skeleton-rate-text flex-column">
                <div class="skeleton-rate-label skeleton"></div>
                <div class="skeleton-rate-value skeleton"></div>
                <div class="skeleton-rate-votes skeleton"></div>
            </div>
            <div class="skeleton-rate-graph flex-column">
                {#each {length: 5} as _}
                    <div class="skeleton-rate-bar-row flex-row">
                        <div class="skeleton-rate-bar-name skeleton"></div>
                        <div class="skeleton-rate-bar skeleton"></div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="skeleton-bookmarks-bar skeleton"></div>
        <div class="skeleton-bookmark-stats">
            <div class="skeleton-stat-row flex-row">
                <div class="skeleton-stat-item skeleton"></div>
                <div class="skeleton-stat-item skeleton"></div>
                <div class="skeleton-stat-item skeleton"></div>
            </div>
            <div class="skeleton-stat-row flex-row">
                <div class="skeleton-stat-item skeleton"></div>
                <div class="skeleton-stat-item skeleton"></div>
            </div>
        </div>
    </div>
    <div class="skeleton-right flex-column">
        <div class="skeleton-title skeleton"></div>
        <div class="skeleton-alt-title flex-row">
            <div class="skeleton-alt-text skeleton"></div>
            <div class="skeleton-age-badge skeleton"></div>
        </div>
        <div class="skeleton-description flex-column">
            <div class="skeleton-desc-line skeleton"></div>
            <div class="skeleton-desc-line skeleton"></div>
            <div class="skeleton-desc-line skeleton"></div>
            <div class="skeleton-desc-line short skeleton"></div>
        </div>
        <div class="skeleton-content flex-row">
            <div class="skeleton-screenshots flex-column">
                <div class="skeleton-section-label skeleton"></div>
                <div class="skeleton-screenshots-row flex-row">
                    <div class="skeleton-screenshot skeleton"></div>
                    <div class="skeleton-screenshot skeleton"></div>
                </div>
            </div>
            <div class="skeleton-min-info flex-column">
                {#each {length: 5} as _}
                    <div class="skeleton-info-row flex-row">
                        <div class="skeleton-info-icon skeleton"></div>
                        <div class="skeleton-info-text skeleton"></div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="skeleton-comments flex-column">
            <div class="skeleton-comments-title skeleton"></div>
            <div class="skeleton-comments-sub skeleton"></div>
            {#each {length: 3} as _}
                <div class="skeleton-comment-item flex-row">
                    <div class="skeleton-comment-avatar skeleton"></div>
                    <div class="skeleton-comment-body flex-column">
                        <div class="skeleton-comment-name skeleton"></div>
                        <div class="skeleton-comment-text skeleton"></div>
                        <div class="skeleton-comment-text short skeleton"></div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .skeleton-release {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .skeleton-left {
        max-width: 388px;
        min-width: 390px;
        padding: 20px 15px 20px 20px;
        gap: 10px;
        overflow: hidden;
    }

    .skeleton-poster {
        width: 387px;
        height: 567px;
        border-radius: 20px;
    }

    .skeleton-play-btn {
        width: 387px;
        height: 48px;
        border-radius: 50px;
    }

    .skeleton-bookmark-btn {
        width: 387px;
        height: 48px;
        border-radius: 50px;
    }

    .skeleton-favorite-btn {
        width: 387px;
        height: 48px;
        border-radius: 50px;
    }

    .skeleton-rating {
        margin-top: 10px;
        min-width: 385px;
        gap: 15px;
    }

    .skeleton-rate-text {
        min-width: 88px;
        margin-left: 4px;
        gap: 5px;
    }

    .skeleton-rate-label {
        height: 15px;
        width: 60px;
        border-radius: 4px;
    }

    .skeleton-rate-value {
        height: 32px;
        width: 70px;
        border-radius: 4px;
    }

    .skeleton-rate-votes {
        height: 12px;
        width: 80px;
        border-radius: 4px;
    }

    .skeleton-rate-graph {
        flex: 1;
        gap: 6px;
        justify-content: center;
    }

    .skeleton-rate-bar-row {
        align-items: center;
        gap: 10px;
    }

    .skeleton-rate-bar-name {
        width: 12px;
        height: 12px;
        border-radius: 3px;
        flex-shrink: 0;
    }

    .skeleton-rate-bar {
        flex: 1;
        height: 10px;
        border-radius: 10px;
    }

    .skeleton-bookmarks-bar {
        height: 22px;
        width: 100%;
        border-radius: 10px;
        margin-top: 5px;
    }

    .skeleton-bookmark-stats {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .skeleton-stat-row {
        gap: 15px;
    }

    .skeleton-stat-item {
        height: 13px;
        width: 100px;
        border-radius: 4px;
    }

    .skeleton-right {
        padding: 20px;
        margin-left: 20px;
        width: 100%;
        overflow: hidden;
    }

    .skeleton-title {
        height: 30px;
        width: 70%;
        border-radius: 6px;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .skeleton-alt-title {
        align-items: center;
        gap: 10px;
        margin-bottom: 5px;
    }

    .skeleton-alt-text {
        height: 16px;
        width: 50%;
        border-radius: 4px;
    }

    .skeleton-age-badge {
        height: 24px;
        width: 40px;
        border-radius: 6px;
    }

    .skeleton-description {
        gap: 8px;
        margin-bottom: 15px;
        margin-top: 10px;
    }

    .skeleton-desc-line {
        height: 14px;
        width: 100%;
        border-radius: 4px;
    }

    .skeleton-desc-line.short {
        width: 60%;
    }

    .skeleton-content {
        gap: 40px;
        margin-bottom: 20px;
    }

    .skeleton-screenshots {
        flex: 1;
        gap: 8px;
    }

    .skeleton-section-label {
        height: 20px;
        width: 60px;
        border-radius: 4px;
    }

    .skeleton-screenshots-row {
        gap: 10px;
    }

    .skeleton-screenshot {
        width: 420px;
        height: 242px;
        border-radius: 13px;
    }

    .skeleton-min-info {
        min-width: 200px;
        max-width: 433px;
        margin-top: 40px;
        gap: 12px;
    }

    .skeleton-info-row {
        align-items: center;
        gap: 10px;
    }

    .skeleton-info-icon {
        width: 37px;
        height: 22px;
        border-radius: 5px;
        flex-shrink: 0;
    }

    .skeleton-info-text {
        height: 14px;
        width: 150px;
        border-radius: 4px;
    }

    .skeleton-comments {
        margin-top: 10px;
        gap: 12px;
    }

    .skeleton-comments-title {
        height: 20px;
        width: 160px;
        border-radius: 4px;
    }

    .skeleton-comments-sub {
        height: 14px;
        width: 200px;
        border-radius: 4px;
    }

    .skeleton-comment-item {
        gap: 10px;
        align-items: flex-start;
    }

    .skeleton-comment-avatar {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        flex-shrink: 0;
    }

    .skeleton-comment-body {
        flex: 1;
        gap: 6px;
    }

    .skeleton-comment-name {
        height: 16px;
        width: 120px;
        border-radius: 4px;
    }

    .skeleton-comment-text {
        height: 14px;
        width: 100%;
        border-radius: 4px;
    }

    .skeleton-comment-text.short {
        width: 70%;
    }
</style>
