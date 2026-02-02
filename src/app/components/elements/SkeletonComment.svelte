<div class="skeleton-comment">
    <div class="skeleton-author flex-row">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-author-info flex-row">
            <div class="skeleton-username"></div>
            <div class="skeleton-badge"></div>
        </div>
    </div>
    <div class="skeleton-message">
        <div class="skeleton-line medium"></div>
        <div class="skeleton-line long"></div>
        <div class="skeleton-line medium"></div>
    </div>
    <div class="skeleton-footer flex-row">
        <div class="skeleton-date"></div>
        <div class="skeleton-vote-count"></div>
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
        align-items: center;
        margin-bottom: 8px;
    }

    .skeleton-avatar {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        margin-right: 10px;
        flex-shrink: 0;
    }

    .skeleton-author-info {
        align-items: center;
        gap: 5px;
        flex: 1;
    }

    .skeleton-username {
        height: 16px;
        width: 150px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
    }

    .skeleton-badge {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
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
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
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
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 4px;
    }

    .skeleton-vote-count {
        height: 14px;
        width: 35px;
        background-color: var(--skeleton-background-color);
        animation: skeletonAnimation 1.5s ease-in-out infinite;
        border-radius: 5px;
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
