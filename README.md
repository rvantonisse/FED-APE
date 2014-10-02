# Accessibility Lab; Front-end development Accessible Pattern Encyclopedia
_Roel Antonisse May 2014_

The Accessibility Lab or front-end development accessible pattern encyclopedia, is a front-end developer tool to be consulted for accessible front-end practices. What practices will be 
demonstrated is the result of the research done on accessible front-end practices by me (Roel Antonisse). This project is an edited clone of 
the __voorhoede-site__ created by [De Voorhoede](http://www.voorhoede.nl).

## Getting started
### 1 Clone repository
This project is hosted as a BitBucket.org GIT repository. Clone it:

    $ git clone https://github.com/rvantonisse/FED-APE.git

### 2 Configure vhost
1. Copy vhost file from `sample/accessibility-lab.vhost` to your vhost directory.
2. Add to your `/etc/hosts` index file:

        local.accessibility-lab.voorhoede.nl            <-- Development
        distribution.accessibility-lab.voorhoede.nl     <-- Distribution
        guide.accessibility-lab.voorhoede.nl            <-- Front-end guide

### 3 Install dependencies
This project requires:

* [NodeJS](http://nodejs.org/), NPM (comes with NodeJS)
* [SASS](http://sass-lang.com/) (sass 3.3+ for the SASS sourcemaps to be created)
* [Grunt.js](http://gruntjs.com)

Other project dependencies can be installed via NPM:

        $ npm install

### 4 Developing
You are now good to go and start developing. To automatically generate the web contents while developing run:

	$ grunt develop


## Architecture
This project uses the common Voorhoede architecture with [Nunjucks](http://jlongster.github.io/nunjucks/) for HTML templating:

	distribution/                   <-- auto generated using `grunt deploy` task
	guide/                          <-- auto generated using `grunt create-guide` task

	source/
		assets/
			fonts/
			images/
			scss/
			style/                  <-- base.css & main.css compiled from scss
		content/
		    documentation/
		    patterns/
		modules/
			components/
				component-name/     <-- re-usable block (html,js,css,readme,tests)
			views/
				view-name/          <-- unique view using components				
		vendor/                     <-- 3rd party libraries
			nunjucks/               <-- templating library used for this project
	
	tasks/
		grunt/
		    configuration/
		    tasks/
		    templates/
		    utilities/
		java/
		phing/
		
	web/                            <-- auto generated via `grunt develop` task
	
### Grunt tasks

    // Task wizard; all available grunt tasks
    $ grunt
    
    // Views
    $ grunt create-view
    $ grunt remove-view
    
    // Components
    $ grunt create-component
    $ grunt remove-component
    
    // Documentation
    $ grunt create-documentation
    $ grunt remove-documentation
    
    // Patterns
    $ grunt create-pattern
    $ grunt remove-pattern
    
    // Development; Compiles project to web folder
    $ grunt develop
    
    // Distribution; Compiles project with minified styles and scripts to distribution folder
    $ grunt deploy
    
    // Front-end guide; Compiles project as component viewer and styleguide to guide folder
    $ grunt create-guide
    
## Todos
1. Clean-up grunt tasks
    1. Refine pattern related tasks
    2. Refine documentation related tasks
    3. Delete redundant files and code
2. Design for project
    1. Styleguide
3. Add new documentation
    1. User perspectives
4. Have at least 5 accessible pattern examples ready before live deployment
    1. Time-based patterns
        1. Carousel
        2. Media control panel (video / audio)
    2. Content expanding patterns
        1. Tabs
        2. Accordion
    3. Filtering controls / widgets
        1. Data sliders
        2. Colour picker
        3. Date picker
    4. Notification / message pattern
        1. Alert
        2. Cookie notification
    5. Other...
    
### Sample folder
In this folder you can find more information about the project. It contains:

1. Project statement
2. Project backlog (another todo)
3. Visual look moodboard
4. Web prototype containing index.html, pattern overview and pattern detail pages.