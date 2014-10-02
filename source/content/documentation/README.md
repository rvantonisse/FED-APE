# Documentation

Documentation contains research reports, experiments and translations / interpretations useful for front-end development.
A new documentation can be created with the grunt task: __$ grunt create-documentation__.

## File structure

When a new documentation is created with __$ grunt create-documentation__ this should be the output:

    /documentation-name
        /chapters                   <-- All documentation chapters in markdown format

        /media                      <-- All documentation media files

        _documentation-name.html
        _documentation-name.scss
        _meta.json                  <-- All meta data like title, description, keywords

## Todos

A few grunt items have to be edited to get the intended results:

* Tasks:
    * develop.js and configuration
    * deploy.js and configuration
* Templates:
    * documentation html and scss templates


### Develop &amp; Deploy result

The output of documentation to web-folder and distribution-folder should be like this:

    /documentation-name
        /chapter-name-1
        /chapter-name-2
        /chapter-name-etc
        
        /media
        
        index.html

Each chapter directory should contain the markdown formatted chapter compiled into a index.html file.