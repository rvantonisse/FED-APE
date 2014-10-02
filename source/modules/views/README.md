# Views

A view is a specific composition of components within the site / application.

All views (pages) extend a base view and are compiled into individual files during deploy. Exception:
View directories prefixed with an underscore are abstract views, which do not compile directly.

## List views

Use `grunt list-modules` or `grunt list-modules:views` to list all registered views.
All registered views are defined in `source/modules/index.json`. Registered views are listed
on the index page of both the development and distribution index.

## Create new view

Use `grunt create-view:view-name` to add a view. This will create a directory for the new view in
source/modules/views/ with a basic HTML, SCSS and README file. The view is registered to the index
JSON and the SCSS file is imported to source/assets/scss/_modules.scss.

## Remove a view

Use `grunt remove-view:view-name` to delete a view. This will remove the view's directory from
source/modules/views/ and will remove it from the modules index JSON & SCSS files.