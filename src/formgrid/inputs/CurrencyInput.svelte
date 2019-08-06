<script>
  import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
  import { onCreate, validate } from './field-base';
  import { TextField } from "smelte";

  const dispatch = createEventDispatcher();
  const toNumber = v => Number(v.replace(/[^0-9\.]+/g,""));

  export let input = null;
  export let inputClass = '';
  export let placeholder = '';
  export let text = '';
  export let readonly = false;
  export let required = false;
  export let type = 'text';
  export let label = '';
  export let value = '';
  export let className = '';
  export let pattern = '';
  export let uniqueId = false;
  export let submit = false;
  export let error = '';
  export let uuid = ''
  export let dataset = null;

  let self;

  let props;
  $: { 
      props = $$props;
      console.log('Currency', props);
  }

  onMount(() => {
    // onCreate(input, arg);
    input = self.querySelector('input');
  });

  $: text = formatCurrency(value);

  function blur(text) {
    let val = text ? toNumber(text) : 0;
    if (!isNaN(val)) {
      text = formatCurrency(val);
    }
    if (validate(input)) {                    
      value = val;
    }              
  }

  function formatCurrency(data, alwaysShowCents = true) {
    var options = {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    if (!alwaysShowCents) {
      options.minimumFractionDigits = 0;
      options.maximumFractionDigits = 0;
    }

    return Number(data).toLocaleString('en-US', options);
  }
</script>

<div bind:this="{self}">
  <TextField
    {...props}
    placeholder="{placeholder}"
    pattern="^(?!\(.*[^)]$|[^(].*\)$)\(?\$?(0|[1-9]\d&#123;0,2}(,?\d&#123;3})?)(\.\d\d?)?\)?$"
    bind:value="{text}"    
    {error}
    on:blur="{() => blur(text)}"
    on:change="{event => dispatch('change', event)}"      
    />
</div>    
