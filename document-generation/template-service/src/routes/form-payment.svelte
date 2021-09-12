<script>
    let check = false;
    let text = "";
</script>

<h1>Payment form</h1>

<form class="content">
    <input type=checkbox bind:checked={check}>

    {#if check}
        <input type="text" bind:value={text}>
    {/if}
</form>
