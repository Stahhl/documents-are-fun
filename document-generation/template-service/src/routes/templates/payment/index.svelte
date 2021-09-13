<script>
	import store from "./store";
	import SplitPane from "../../../components/splitPane.svelte";
</script>

<h1>Payment form</h1>

<!-- <form class="content">
    <input type=checkbox bind:checked={$store.q1.check}>

    {#if $store.q1.check}
    <div>
        <textarea bind:value={$store.q1.text} />
    </div>
    {/if}
</form> -->

<SplitPane>
	<left slot="left"><div class="box">LEFT</div></left>
	<right slot="right">RIGHT</right>
</SplitPane>
