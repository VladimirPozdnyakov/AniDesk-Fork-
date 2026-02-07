<div class="skeleton-collection-row-card">
    <div class="skeleton-poster skeleton"></div>
    <div class="skeleton-info">
        <div class="skeleton-title skeleton"></div>
        <div class="skeleton-counts flex-row">
            <div class="skeleton-count-icon skeleton"></div>
            <div class="skeleton-count-number skeleton"></div>
            <div class="skeleton-count-separator skeleton"></div>
            <div class="skeleton-count-icon skeleton"></div>
            <div class="skeleton-count-number skeleton"></div>
        </div>
        <div class="skeleton-description">
            <div class="skeleton-line medium skeleton"></div>
            <div class="skeleton-line long skeleton"></div>
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
        width: 100%;
        max-width: 400px;
        aspect-ratio: 16 / 9;
        border-radius: 15px;
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
        border-radius: 4px;
    }

    .skeleton-counts {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .skeleton-count-icon {
        width: 14px;
        height: 14px;
        border-radius: 3px;
    }

    .skeleton-count-number {
        height: 14px;
        width: 20px;
        border-radius: 4px;
    }

    .skeleton-count-separator {
        width: 4px;
        height: 4px;
        border-radius: 100%;
    }

    .skeleton-description {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .skeleton-line {
        height: 14px;
        border-radius: 4px;
    }

    .skeleton-line.medium {
        width: 90%;
    }

    .skeleton-line.long {
        width: 100%;
    }
</style>
