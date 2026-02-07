<div class="skeleton-comment">
    <div class="skeleton-author flex-row">
        <div class="skeleton-avatar skeleton"></div>
        <div class="skeleton-author-details">
            <div class="skeleton-author-name flex-row">
                <div class="skeleton-username skeleton"></div>
                <div class="skeleton-badge skeleton"></div>
                <div class="skeleton-rel-label skeleton"></div>
            </div>
            <div class="skeleton-release-title skeleton"></div>
        </div>
    </div>
    <div class="skeleton-message">
        <div class="skeleton-line medium skeleton"></div>
        <div class="skeleton-line long skeleton"></div>
        <div class="skeleton-line medium skeleton"></div>
    </div>
    <div class="skeleton-footer flex-row">
        <div class="skeleton-date skeleton"></div>
        <div class="skeleton-vote-count skeleton"></div>
    </div>
</div>

<style>
    .skeleton-comment {
        margin: 10px 20px;
        background-color: var(--alt-background-color);
        border-radius: 10px;
        padding: 15px 20px;
        width: 100%;
        box-sizing: border-box;
    }

    .skeleton-author {
        align-items: flex-start;
        margin-bottom: 8px;
    }

    .skeleton-avatar {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin-right: 10px;
        flex-shrink: 0;
    }

    .skeleton-author-details {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1;
    }

    .skeleton-author-name {
        align-items: center;
        gap: 5px;
    }

    .skeleton-username {
        height: 16px;
        width: 120px;
        border-radius: 4px;
    }

    .skeleton-badge {
        width: 20px;
        height: 20px;
        border-radius: 4px;
    }

    .skeleton-rel-label {
        height: 12px;
        width: 55px;
        border-radius: 4px;
    }

    .skeleton-release-title {
        height: 12px;
        width: 180px;
        border-radius: 4px;
    }

    .skeleton-message {
        margin-top: 5px;
        margin-bottom: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .skeleton-line {
        height: 14px;
        border-radius: 4px;
        width: 100%;
    }

    .skeleton-line.medium {
        width: 90%;
    }

    .skeleton-line.long {
        width: 100%;
    }

    .skeleton-footer {
        justify-content: space-between;
        align-items: center;
    }

    .skeleton-date {
        height: 12px;
        width: 80px;
        border-radius: 4px;
    }

    .skeleton-vote-count {
        height: 14px;
        width: 35px;
        border-radius: 5px;
    }
</style>
