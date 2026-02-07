<div class="skeleton-anime-card">
    <div class="skeleton-poster skeleton"></div>
    <div class="skeleton-info">
        <div class="skeleton-title skeleton"></div>
        <div class="skeleton-episodes skeleton"></div>
        <div class="skeleton-description">
            <div class="skeleton-line medium skeleton"></div>
            <div class="skeleton-line long skeleton"></div>
            <div class="skeleton-line short skeleton"></div>
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
        border-radius: 4px;
        margin-bottom: 12px;
    }

    .skeleton-episodes {
        height: 18px;
        width: 30%;
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
</style>
