<script>
    import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
    import { onCreate } from './field-base';

    const dispatch = createEventDispatcher();
    const toNumber = v => Number(v.replace(/[^0-9\.]+/g,""));

    export let input = null;
    export let inputClass = '';
    export let text = '';
    export let readonly = false;
    export let required = false;
    export let pattern = '';
    export let placeholder = '';
    export let type = 'text';
    export let label = '';
    export let value = '';
    export let className = '';
    export let uniqueId = false;
    export let maxlength;
    export let charset;
    export let validExample;
    export let submit = false;
    export let error = '';
    export let uuid = ''
    export let dataset = null;

    function setError(error1, submit1) {
        error = error1;
        if (submit != undefined) {
            submit = submit1;
        }
    }

    let arg = {
        uuid, dataset, submit, error, setError
    }

    onMount(() => {
        onCreate(input, arg);
    });

    $: text = formatCurrency(value);

    function handleChange(e) {
        e.target.value = handleCurrentValue(e);
        // document.getElementById(uuid + 'Mask').innerHTML = this.setValueOfMask(e);
        value = e.target.value;
    }

    export function handleCurrentValue(e) {
        const isCharsetPresent = charset,
            maskedNumber = 'XMDY',
            maskedLetter = '_',
            placeholder = isCharsetPresent || placeholder,
            value = e.target.value, l = placeholder.length;
        let i, j, isInt, isLetter, strippedValue, matchesNumber, matchesLetter, newValue = '';

        // strip special characters
        strippedValue = isCharsetPresent ? value.replace(/\W/g, "") : value.replace(/\D/g, "");

        for (i = 0, j = 0; i < l; i++) {
            isInt = !isNaN(parseInt(strippedValue[j]));
            isLetter = strippedValue[j] ? strippedValue[j].match(/[A-Z]/i) : false;
            matchesNumber = (maskedNumber.indexOf(placeholder[i]) >= 0);
            matchesLetter = (maskedLetter.indexOf(placeholder[i]) >= 0);
            if ((matchesNumber && isInt) || (isCharsetPresent && matchesLetter && isLetter)) {
                newValue += strippedValue[j++];
            } else if ((!isCharsetPresent && !isInt && matchesNumber) || (isCharsetPresent && ((matchesLetter && !isLetter) || (matchesNumber && !isInt)))) {
                return newValue;
            } else {
                newValue += placeholder[i];
            }
            // break if no characters left and the pattern is non-special character
            if (strippedValue[j] == undefined) {
                break;
            }
        }

        if (validExample) {
            return validateProgress(e, newValue);
        }                
        return newValue;
    }

    export function validateProgress(e, value) {
        let l = value.length, testValue = '', i;
        const regex = new RegExp(__this.props.pattern);

        //convert to months
        if ((l == 1) && (placeholder.toUpperCase().substr(0, 2) == 'MM')) {
            if(value > 1 && value < 10) {
                value = '0' + value;
            }
            return value;
        }

        for ( i = l; i >= 0; i--) {
            testValue = value + validExample.substr(value.length);
            if (regex.test(testValue)) {
                return value;
            } else {
                value = value.substr(0, value.length-1);
            }
        }

        return value;
    }
</script>

<input type="text"
    bind:this={input} 
    class="form-control masked {inputClass}" 
    bind:value="{text}"
    readonly="{readonly}"
    {required} 
    {pattern}
    {placeholder}               
    on:input="{handleChange}" 
    on:change="{event => dispatch('change', event)}"       
    />