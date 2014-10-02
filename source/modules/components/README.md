# Components

A component is a self contained block and should behave as such. Components are partials and are
not compiled individually during deploy. Instead a preview is generated for each component in the distribution.

## List components

Use `grunt list-modules` or `grunt list-modules:components` to list all registered components.
All registered components are defined in `source/modules/index.json`. Registered components are listed
on the distribution index.

## Create new component

Use `grunt create-component:component-name` to add a component. This will create a directory for
the new component in source/modules/component/ with a basic HTML, SCSS and README file.
The component is registered to the index JSON and the SCSS file is imported to source/assets/scss/_modules.scss.

## Remove a component

Use `grunt remove-component:component-name` to delete a component. This will remove the
component's directory from source/modules/component/ and will remove it from the modules index JSON & SCSS files.