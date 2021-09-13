<script>
	import store from "./store";
	import SplitPane from "../../../components/splitPane.svelte";
	import QuestionBlock from "../../../components/questionBlock.svelte";
</script>

<h1 class="text-2xl">Payment form</h1>

<SplitPane>
	<div slot="left">
        <QuestionBlock>
            <form class="content">
                <input type="checkbox" id="q11" bind:checked={$store.q1.check} />
                <label for="q11">Include a text field.</label>
    
                {#if $store.q1.check}
                    <div>
                        <textarea class="resize-y w-full" rows="4" bind:value={$store.q1.text} />
                    </div>
                {/if}
            </form>
        </QuestionBlock>
        <QuestionBlock>
            <form class="content">
                <input type="checkbox" id="q21" bind:checked={$store.q2.check} />
                <label for="q21">Include a text field.</label>
    
                {#if $store.q2.check}
                    <div>
                        <textarea class="resize-y w-full" rows="4" bind:value={$store.q2.text} />
                    </div>
                {/if}
            </form>
        </QuestionBlock>
	</div>
	<div slot="right">RIGHT</div>
</SplitPane>
