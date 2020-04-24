### Adding material theme for the date picker
Add below code to global CSS styles.scss

 @import '~@angular/material/theming';<br/>
// Plus imports for other components in your app.<br/>

// Include the common styles for Angular Material. We include this here so that you only<br/>
// have to load a single css file for Angular Material in your app.<br/>
// Be sure that you only ever include this mixin once!<br/>
@include mat-core();<br/>

$mat-sds-green: (<br/>
  50: #ecf3ec, //green-cool-5<br/>
  100: #e3f5e1, //primary-lighter<br/>
  200: #b4d0b9, //green-cool-20<br/>
  300: #86b98e, //green-cool-30<br/>
  400: #70e17b, //primary<br/>
  500: #b7f5bd, //Material default -> sam-styles primary-light color<br/>
  600: #21c834, // primary-vivid<br/>
  700: #00a91c, // primary-dark<br/>
  800: #008817, // primary-darker<br/>
  900: #446443, // green-cool-60<br/>
  A100: #b9f6ca,<br/>
  A200: #69f0ae,<br/>
  A400: #00e676,<br/>
  A700: #00c853,<br/>
  contrast: (<br/>
    50: $dark-primary-text,<br/>
    100: $dark-primary-text,<br/>
    200: $dark-primary-text,<br/>
    300: $dark-primary-text,<br/>
    400: $dark-primary-text,<br/>
    500: $dark-primary-text,<br/>
    600: $light-primary-text,<br/>
    700: $light-primary-text,<br/>
    800: $light-primary-text,<br/>
    900: $light-primary-text,<br/>
    A100: $dark-primary-text,<br/>
    A200: $dark-primary-text,<br/>
    A400: $dark-primary-text,<br/>
    A700: $dark-primary-text,<br/>
  )<br/>
);<br/>
<br/>
$mat-sds-blue: (<br/>
  50: #eff6fb, //accent-cool-lighter<br/>
  100: #d9e8f6, //accent-cool-light<br/>
  200: #aacdec, //accent-cool<br/>
  300: #81aefc, //secondary-lighter<br/>
  400: #5994f6, //secondary-light<br/>
  500: #2672de, //Material default -> sam-tyles secondary color<br/>
  600: #0050d8, // secondary-vivid<br/>
  700: #1a4480, // secondary-dark<br/>
  800: #162e51, // secondary-darker<br/>
  900: #13171f, // blue-warm-90<br/>
  A100: #b9eaf6,<br/>
  A200: #69def0,<br/>
  A400: #0095e6,<br/>
  A700: #0061c8,<br/>
  contrast: (<br/>
    50: $dark-primary-text,<br/>
    100: $dark-primary-text,<br/>
    200: $dark-primary-text,<br/>
    300: $dark-primary-text,<br/>
    400: $dark-primary-text,<br/>
    500: $dark-primary-text,<br/>
    600: $light-primary-text,<br/>
    700: $light-primary-text,<br/>
    800: $light-primary-text,<br/>
    900: $light-primary-text,<br/>
    A100: $dark-primary-text,<br/>
    A200: $dark-primary-text,<br/>
    A400: $dark-primary-text,<br/>
    A700: $dark-primary-text,<br/>
  )<br/>
);<br/>

$mat-sds-red: (<br/>
  50: #f9eeee, //red-5v<br/>
  100: #f8e1de, //red-10v<br/>
  200: #fde0db, //red-vivid-10v<br/>
  300: #fdb8ae, //error-lighter<br/>
  400: #ff8d7b, //error-light<br/>
  500: #fb5a47, //Material default -> sam-tyles error color<br/>
  600: #e52207, // red-vivid-50v<br/>
  700: #b51d09, // error-dark<br/>
  800: #8b1303, // error-darker<br/>
  900: #5c1111, // red-vivid-80v<br/>
  A100: #f6b9b9,<br/>
  A200: #f06969,<br/>
  A400: #e60000,<br/>
  A700: #c80000,<br/>
  contrast: (<br/>
    50: $dark-primary-text,<br/>
    100: $dark-primary-text,<br/>
    200: $dark-primary-text,<br/>
    300: $dark-primary-text,<br/>
    400: $dark-primary-text,<br/>
    500: $dark-primary-text,<br/>
    600: $light-primary-text,<br/>
    700: $light-primary-text,<br/>
    800: $light-primary-text,<br/>
    900: $light-primary-text,<br/>
    A100: $dark-primary-text,<br/>
    A200: $dark-primary-text,<br/>
    A400: $dark-primary-text,<br/>
    A700: $dark-primary-text,<br/>
  )<br/>
);<br/>



// Define the palettes for your theme using the Material Design palettes available in palette.scss<br/>
// (imported above). For each palette, you can optionally specify a default, lighter, and darker<br/>
// hue. Available color palettes: https://material.io/design/color/<br/>
$sds-mat-app-primary: mat-palette($mat-sds-green);<br/>
$sds-mat-app-accent:  mat-palette($mat-sds-blue, A200, A100, A400);<br/>
<br/>
// The warn palette is optional (defaults to red).<br/>
$sds-mat-app-warn:    mat-palette($mat-sds-red);<br/>

// Create the theme object (a Sass map containing all of the palettes).<br/>
$sds-mat-app-theme: mat-light-theme($sds-mat-app-primary, $sds-mat-app-accent, $sds-mat-app-warn);<br/>
<br/>
// Include theme styles for core and each component used in your app.<br/>
// Alternatively, you can import and @include the theme mixins for each component<br/>
// that you are using.<br/>
@include angular-material-theme($sds-mat-app-theme);<br/>
<br/>
.mat-calendar-table-header {<br/>
  color: black !important;<br/>
}<br/>

.mat-calendar-body-cell-content.mat-calendar-body-selected {<br/>
  border: solid 1px #70e17b;<br/>
}<br/>

//global styles below<br/>

$theme-image-path: '~@gsa-sam/sam-styles/src/img';<br/>
$theme-font-path: '~@gsa-sam/sam-styles/src/fonts';<br/>

@import '~@gsa-sam/sam-styles/src/stylesheets/sam';<br/>

//CDK Overlay<br/>
@import '~@angular/cdk/overlay';<br/>
$cdk-overlay-dark-backdrop-background: rgba(14, 52, 88, 0.7);<br/>
@include cdk-overlay;<br/>


