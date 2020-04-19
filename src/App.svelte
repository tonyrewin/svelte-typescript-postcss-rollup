<script lang="typescript">
  import Card from 'components/Card'
  import { count } from './stores/counter'
  import Counter from 'components/Counter'

  export let name: string = 'test'
</script>

<style type="postcss">
  h1 {
    color: red;
  }
</style>

<Card />

<h1>Hello {name}!</h1>
<p>
  <Counter />
  <Counter value={1}>Counter 1</Counter>
  <Counter value={$count} step={3}>Counter 2</Counter>
</p>
