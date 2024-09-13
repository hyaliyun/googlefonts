<!-- ---
name: Buttons
dirname: button
-----><!-- catalog-only-end -->




# Buttons


*   [Design article](https://m3.material.io/components/buttons) 
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/button)




<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Types



![The 5 types of common buttons](images/button/types.webp "Elevated, filled, filled tonal, outlined, and text buttons")




<!--

<div class="figure-wrapper">
  <figure
      class="types-image"
      style="justify-content:center;"
      title="Elevated, filled, filled tonal, outlined, and text buttons"
      aria-label="The 5 types of common buttons">
    <style>
      .types-image .wrapper,
      .types-image .wrapper > * {
        display: flex;
        padding: 8px;
        flex-wrap: wrap;
        justify-content: center;
      }
      .types-image .wrapper > * {
        flex-direction: column;
        align-items: center;
        padding-inline: 16px;
      }
      .types-image span {
        display: inline-flex;
        background-color: var(--md-sys-color-inverse-surface);
        color: var(--md-sys-color-inverse-on-surface);
        padding: 8px;
        margin-block-start: 8px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
      }
    </style>
    <div class="wrapper">
      <div>
        <md-elevated-button hasicon>
          <md-icon slot="icon">add</md-icon>
          Elevated
        </md-elevated-button>
        <span>1</span>
      </div>
      <div>
        <md-filled-button>Filled</md-filled-button>
        <span>2</span>
      </div>
      <div>
        <md-filled-tonal-button>Tonal</md-filled-tonal-button>
        <span>3</span>
      </div>
      <div>
        <md-outlined-button>Outlined</md-outlined-button>
        <span>4</span>
      </div>
      <div>
        <md-text-button>Text</md-text-button>
        <span>5</span>
      </div>
    </div>
  </figure>
</div>

-->

<!-- catalog-only-end -->

1.  [Elevated button](#elevated-button)
1.  [Filled button](#filled-button)
1.  [Filled tonal button](#filled-tonal-button)
1.  [Outlined button](#outlined-button)
1.  [Text button](#text-button)

## Usage

Buttons have label text that describes the action that will occur if a user taps
a button.



![An outlined button with the text "Back" next to a filled button with the text
"Complete"](images/button/usage.webp "Outlined and filled buttons.")




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;gap: 8px;"
      title="Outlined and filled buttons."
      aria-label="An outlined button with the text 'Back' next to a filled button with the text 'Complete'">
    <md-outlined-button>Back</md-outlined-button>
    <md-filled-button>Complete</md-filled-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-outlined-button>Back</md-outlined-button>
<md-filled-button>Complete</md-filled-button>
```

### Icon

An icon may optionally be added to a button to help communicate the button's
action and help draw attention.



![A tonal button with a right arrow send icon with text 'send' and a text button
with the text 'open' with a trailing icon arrow
box](images/button/usage-icon.webp "Slot in icons to the appropriate slots")




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;gap: 8px;"
      title="Outlined and filled buttons."
      aria-label="An outlined button with the text 'Back' next to a filled button with the text 'Complete'">
    <md-filled-tonal-button>
      Send
      <svg slot="icon" viewBox="0 0 48 48"><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"/></svg>
    </md-filled-tonal-button>

    <md-text-button trailing-icon>
      Open
      <svg slot="icon" viewBox="0 0 48 48"><path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z"/></svg>
    </md-text-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-filled-tonal-button>
  Send
  <svg slot="icon" viewBox="0 0 48 48"><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"/></svg>
</md-filled-tonal-button>

<md-text-button trailing-icon>
  Open
  <svg slot="icon" viewBox="0 0 48 48"><path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z"/></svg>
</md-text-button>
```

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
attribute to buttons whose labels need a more descriptive label.

```html
<md-elevated-button aria-label="Add a new contact">Add</md-elevated-button>
```

### Focusable and disabled

By default, disabled buttons are not focusable with the keyboard, while
"soft-disabled" buttons are. Some use cases encourage focusability of disabled
toolbar items to increase their discoverability.

See the
[ARIA guidelines on focusability of disabled controls](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls)
for guidance on when this is recommended.

```html
<div role="toolbar">
  <md-text-button>Copy</md-text-button>
  <md-text-button>Cut</md-text-button>
  <!--
    This button is disabled but kept focusable to improve its discoverability
    in the toolbar.
  -->
  <md-text-button soft-disabled>Paste</md-text-button>
</div>
```

## Elevated button

<!-- go/md-elevated-button -->

[Elevated buttons](https://m3.material.io/components/buttons/guidelines#4e89da4d-a8fa-4e20-bb8d-b8a93eff3e3e)
are essentially filled tonal buttons with a shadow. To prevent shadow creep,
only use them when absolutely necessary, such as when the button requires visual
separation from a patterned background.



![An elevated button](images/button/usage-elevated-button.webp)




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      aria-label="An elevated button.">
    <md-elevated-button>Elevated</md-elevated-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-elevated-button>Elevated</md-elevated-button>
```

## Filled button

<!-- go/md-filled-button -->

[Filled buttons](https://m3.material.io/components/buttons/guidelines#9ecffdb3-ef29-47e7-8d5d-f78b404fcafe)
have the most visual impact after the FAB, and should be used for important,
final actions that complete a flow, like Save, Join now, or Confirm.




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      aria-label="A filled button.">
    <md-filled-button>Filled</md-filled-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-filled-button>Filled</md-filled-button>
```

## Filled tonal button

<!-- go/md-filled-tonal-button -->

A
[filled tonal button](https://m3.material.io/components/buttons/guidelines#07a1577b-aaf5-4824-a698-03526421058b)
is an alternative middle ground between filled and outlined buttons. They're
useful in contexts where a lower-priority button requires slightly more emphasis
than an outline would give, such as "Next" in an onboarding flow.



![A filled tonal button](images/button/usage-filled-tonal-button.webp)




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      aria-label="A tonal button.">
    <md-filled-tonal-button>Tonal</md-filled-tonal-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-filled-tonal-button>Tonal</md-filled-tonal-button>
```

## Outlined button

<!-- go/md-outlined-button -->

[Outlined buttons](https://m3.material.io/components/buttons/guidelines#3742b09f-c224-43e0-a83e-541bd29d0f05)
are medium-emphasis buttons. They contain actions that are important, but aren’t
the primary action in an app.



![An outlined button](images/button/usage-outlined-button.webp)




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      aria-label="An outlined button.">
    <md-outlined-button>Outlined</md-outlined-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-outlined-button>Outlined</md-outlined-button>
```

## Text button

<!-- go/md-text-button -->

[Text buttons](https://m3.material.io/components/buttons/guidelines#c9bcbc0b-ee05-45ad-8e80-e814ae919fbb)
are used for the lowest priority actions, especially when presenting multiple
options.



![A text button](images/button/usage-text-button.webp)




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      aria-label="A text button.">
    <md-text-button>Text</md-text-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-text-button>Text</md-text-button>
```

## Theming

Button supports [Material theming](../theming/README.md) and can be customized
in terms of color, typography, and shape.

### Elevated button tokens

Token                                   | Default value
--------------------------------------- | -------------------------------------
`--md-elevated-button-container-color`  | `--md-sys-color-surface`
`--md-elevated-button-container-shape`  | `--md-sys-shape-corner-full`
`--md-elevated-button-label-text-color` | `--md-sys-color-on-surface`
`--md-elevated-button-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-elevated-button.scss)


### Elevated button example



![Image of an elevated button with a different theme applied](images/button/theming-elevated-button.webp "Elevated button theming example.")




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Elevated button theming example."
      aria-label="Image of an elevated button with a different theme applied">
    <style>
      .styled-example {
        background-color: white;
        --md-elevated-button-container-shape: 0px;
        --md-elevated-button-label-text-font: system-ui;
        --md-sys-color-surface-container-low: #FAFDFC;
        --md-sys-color-primary: #191C1C;
      }
    </style>

    <md-elevated-button>Elevated</md-elevated-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-elevated-button-container-shape: 0px;
  --md-elevated-button-label-text-font: system-ui;
  --md-sys-color-surface-container-low: #FAFDFC;
  --md-sys-color-primary: #191C1C;
}
</style>

<md-elevated-button>Elevated</md-elevated-button>
```

### Filled button tokens

Token                                 | Default value
------------------------------------- | -------------------------------------
`--md-filled-button-container-color`  | `--md-sys-color-primary`
`--md-filled-button-container-shape`  | `--md-sys-shape-corner-full`
`--md-filled-button-label-text-color` | `--md-sys-color-on-primary`
`--md-filled-button-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filled-button.scss)


### Filled button example



![Image of a filled button with a different theme applied](images/button/theming-filled-button.webp "Filled button theming example.")




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Filled button theming example."
      aria-label="Image of a filled button with a different theme applied">
    <style>
      .styled-example {
        background-color: white;
        --md-filled-button-container-shape: 0px;
        --md-filled-button-label-text-font: system-ui;
        --md-sys-color-primary: #006A6A;
        --md-sys-color-on-primary: #FFFFFF;
      }
    </style>

    <md-filled-button>Filled</md-filled-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-filled-button-container-shape: 0px;
  --md-filled-button-label-text-font: system-ui;
  --md-sys-color-primary: #006A6A;
  --md-sys-color-on-primary: #FFFFFF;
}
</style>

<md-filled-button>Filled</md-filled-button>
```

### Filled tonal button tokens

Token                                       | Default value
------------------------------------------- | -------------
`--md-filled-tonal-button-container-color`  | `--md-sys-color-secondary-container`
`--md-filled-tonal-button-container-shape`  | `--md-sys-shape-corner-full`
`--md-filled-tonal-button-label-text-color` | `--md-sys-color-on-secondary-container`
`--md-filled-tonal-button-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filled-tonal-button.scss)


### Filled tonal button example



![Image of a filled tonal button with a different theme applied](images/button/theming-filled-tonal-button.webp "Filled tonal button theming example.")




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Tonal button theming example."
      aria-label="Image of a tonal button with a different theme applied">
    <style>
      .styled-example {
        background-color: white;
        --md-filled-tonal-button-container-shape: 0px;
        --md-filled-tonal-button-label-text-font: system-ui;
        --md-sys-color-secondary-container: #CCE8E7;
        --md-sys-color-on-secondary-container: #051F1F;
      }
    </style>

    <md-filled-tonal-button>Tonal</md-filled-tonal-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-filled-tonal-button-container-shape: 0px;
  --md-filled-tonal-button-label-text-font: system-ui;
  --md-sys-color-secondary-container: #CCE8E7;
  --md-sys-color-on-secondary-container: #051F1F;
}
</style>

<md-filled-tonal-button>Tonal</md-filled-tonal-button>
```

### Outlined button tokens

Token                                   | Default value
--------------------------------------- | -------------------------------------
`--md-outlined-button-outline-color`    | `--md-sys-color-outline`
`--md-outlined-button-container-shape`  | `--md-sys-shape-corner-full`
`--md-outlined-button-label-text-color` | `--md-sys-color-primary`
`--md-outlined-button-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-outlined-button.scss)


### Outlined button example



![Image of an outlined button with a different theme applied](images/button/theming-outlined-button.webp "Outlined button theming example.")




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Outlined button theming example."
      aria-label="Image of a outlined button with a different theme applied">
    <style>
      .styled-example {
        background-color: white;
        --md-outlined-button-container-shape: 0px;
        --md-outlined-button-label-text-font: system-ui;
        --md-sys-color-primary: #006A6A;
        --md-sys-color-outline: #6F7979;
      }
    </style>

    <md-outlined-button>Outlined</md-outlined-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-outlined-button-container-shape: 0px;
  --md-outlined-button-label-text-font: system-ui;
  --md-sys-color-primary: #006A6A;
  --md-sys-color-outline: #6F7979;
}
</style>

<md-outlined-button>Outlined</md-outlined-button>
```

### Text button tokens

Token                               | Default value
----------------------------------- | -------------------------------------
`--md-text-button-label-text-color` | `--md-sys-color-primary`
`--md-text-button-label-text-font`  | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-text-button.scss)


### Text button example



![Image of a text button with a different theme applied](images/button/theming-text-button.webp "Text button theming example.")




<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Text button theming example."
      aria-label="Image of a text button with a different theme applied">
    <style>
      .styled-example {
        background-color: white;
        --md-text-button-label-text-font: system-ui;
        --md-sys-color-primary: #006A6A;
      }
    </style>

    <md-text-button>Text</md-text-button>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
:root {
  --md-text-button-label-text-font: system-ui;
  --md-sys-color-primary: #006A6A;
}
</style>

<md-text-button>Text</md-text-button>
```

<!-- auto-generated API docs start -->

## API

### MdElevatedButton <code>&lt;md-elevated-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the button is disabled. |
| `softDisabled` | `soft-disabled` | `boolean` | `false` | Whether the button is "soft-disabled" (disabled but still focusable). |
| `href` | `href` | `string` | `''` | The URL that the link button points to. |
| `target` | `target` | `string` | `''` | Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab. |
| `trailingIcon` | `trailing-icon` | `boolean` | `false` | Whether to render the icon at the inline end of the label rather than the inline start.<br>_Note:_ Link buttons cannot have trailing icons. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Whether to display the icon or not. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdFilledButton <code>&lt;md-filled-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the button is disabled. |
| `href` | `href` | `string` | `''` | The URL that the link button points to. |
| `target` | `target` | `string` | `''` | Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab. |
| `trailingIcon` | `trailing-icon` | `boolean` | `false` | Whether to render the icon at the inline end of the label rather than the inline start.<br>_Note:_ Link buttons cannot have trailing icons. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Whether to display the icon or not. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdFilledTonalButton <code>&lt;md-filled-tonal-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the button is disabled. |
| `href` | `href` | `string` | `''` | The URL that the link button points to. |
| `target` | `target` | `string` | `''` | Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab. |
| `trailingIcon` | `trailing-icon` | `boolean` | `false` | Whether to render the icon at the inline end of the label rather than the inline start.<br>_Note:_ Link buttons cannot have trailing icons. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Whether to display the icon or not. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdOutlinedButton <code>&lt;md-outlined-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the button is disabled. |
| `href` | `href` | `string` | `''` | The URL that the link button points to. |
| `target` | `target` | `string` | `''` | Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab. |
| `trailingIcon` | `trailing-icon` | `boolean` | `false` | Whether to render the icon at the inline end of the label rather than the inline start.<br>_Note:_ Link buttons cannot have trailing icons. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Whether to display the icon or not. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdTextButton <code>&lt;md-text-button&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | `boolean` | `false` | Whether or not the button is disabled. |
| `href` | `href` | `string` | `''` | The URL that the link button points to. |
| `target` | `target` | `string` | `''` | Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab. |
| `trailingIcon` | `trailing-icon` | `boolean` | `false` | Whether to render the icon at the inline end of the label rather than the inline start.<br>_Note:_ Link buttons cannot have trailing icons. |
| `hasIcon` | `has-icon` | `boolean` | `false` | Whether to display the icon or not. |
| `type` | `type` | `string` | `'submit'` | The default behavior of the button. May be "button", "reset", or "submit" (default). |
| `value` | `value` | `string` | `''` | The value added to a form with the button's name when the button submits a form. |
| `name` |  | `string` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->
