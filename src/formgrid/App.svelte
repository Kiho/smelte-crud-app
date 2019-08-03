<script>
   import { TextField, NumberField } from './fields';

   let text = '12345';
</script>

<div class="wrapper">
   <TextField label="Indivisual TextField" bind:value="{text}" placeholder="Text" />
   <NumberField label="Indivisual NumberField" bind:value="{text}" placeholder="Number" />
   <div class="formcfg">
      FormConfig
   </div>
   <div class="formgen">
      FormGen
   </div>
</div>