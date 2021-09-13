<script>

    let separator;
    let left, right;
    export let leftPaneSize = '50%';
    export let rightPaneSize = '50%';
    export let minLeftPaneSize = '0';
    export let minRightPaneSize = '0';
    
</script>

<style>
    div.wrapper {
        width: 100%;
        height: 100%;
        display: inline-flex;
    }
    div.separator {
        cursor: col-resize;
        height: 100%;
        width: 4px;
        margin-left: -2px;
        z-index: 1;
        background-color: #aaa;
        background-repeat: no-repeat;
        background-position: center;
    }
    div.left {
        width: var(--left-panel-size);
        min-width: var(--min-left-panel-size);
        height: 100%;
    }
    div.right {
        width: var(--right-panel-size);
        min-width: var(--min-right-panel-size);
        height: 100%;
    }
</style>

<div class="wrapper" style="--left-panel-size: {leftPaneSize}; --right-panel-size: {rightPaneSize}; --min-left-panel-size: {minLeftPaneSize}; --min-right-panel-size: {minRightPaneSize};">
    <div bind:this={left} class="left">
        <slot name="left"></slot>
    </div>
    <div bind:this={separator} class="separator">
    </div>
    <div bind:this={right} class="right">
        <slot name="right"></slot>
    </div>
</div>