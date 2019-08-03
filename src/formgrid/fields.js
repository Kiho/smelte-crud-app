import Field from './Field.svelte';
import {
  TextInput,
  NumberInput,
  MaskedInput,
  CurrencyInput,
  SelectInput,
} from './inputs';

function mergeState(data, fieldtype) {
  return Object.assign(
    data,
    { settings: data, withSettings: true },
    { fieldtype },
  );
}

export const TextField = class extends Field {
  constructor(options) {
    mergeState(options.props, TextInput);
    super(options);
  }
};

export const NumberField = class extends Field {
  constructor(options) {
    mergeState(options.props, NumberInput);
    super(options);
  }
};

export const MaskedField = class extends Field {
  constructor(options) {
    mergeState(options.props, MaskedInput);
    super(options);
  }
};

export const CurrencyField = class extends Field {
  constructor(options) {
    mergeState(options.props, CurrencyInput);
    super(options);
  }
};

export const SelectField = class extends Field {
  constructor(options) {
    mergeState(options.props, SelectInput);
    super(options);
  }
};
