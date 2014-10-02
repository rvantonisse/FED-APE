# Pattern

A pattern is a web-component, small or big, that is commonly used to enrich a webpage. A pattern should be able to be added or removed to a webpage without destroying it.
A new pattern can be created with the following grunt task: __$ grunt create-pattern__.
To remove a pattern use __$ grunt remove-pattern__.

## File structure

When a new pattern is created with __$ grunt create-pattern__ this should be the output:

    /pattern-name
        /code                       <-- All pattern code: html, css, js
            /images                 <-- If images are used to design the pattern

        _pattern-name.html
        _pattern-name.scss
        _meta.json                  <-- All meta data like title, description, keywords

## Todos

A few grunt items have to be edited to get the intended results:

* Tasks:
    * develop.js and configuration
    * deploy.js and configuration
* Templates:
    * pattern html and scss templates


### Template

A pattern contains the following:

1. Introduction, explanation
2. A live preview
3. The code: html, css, js
4. The accessibility guide: Front-end and user benefits
5. A download link for the pattern and a link to the Github repository

### Develop &amp; Deploy result

The output of patterns to web-folder and distribution-folder should be like this:

    /pattern-name
        pattern-name.zip            <-- To be a downloadable version of code folder
        /code
            /images
            pattern-name.html
            pattern-name.css
            pattern-name.js
                
        index.html
