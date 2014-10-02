# FRONT-END DEVELOPMENT ACCESSIBILITY GUIDELINES
Below you can find a translation of the Web Content Accessibility Guidelines 2.0 (WCAG) created by the World Wide Web Consortium Web Accessibility Initiative (W3C-WAI), 
specifically made for front-end development. Instead of the four main principles the WCAG defines, the front-end development accessibility guidelines (FEDAG) counts only three.
These principles are operable, understandable and robust (OUR), leaving the perceivable principle out. This is explicitly done, because:

1.	The perceivable principle is visual content related, which is mostly important to designers and content editors and managers.
2.	Front-end development should make mark-up and additional content related attributes available so that designers and content editors can use them. 
    This is code related of which a part is required to write valid mark-up and code.
3.	Writing standard and valid code is covered with the robust principle.

The translation is made with the help and guidance of the W3C’s document “Understanding WCAG 2.0”. This document is referred to from the WCAG 2.0, 
to explain the guidelines and to help understand how to implement these guidelines. Included technology: HTML (Hyper Text Markup Language), CSS (Cascading Style Sheets) and JS (JavaScript). 
Partly included: ARIA (Accessible Rich Internet Applications).

## Table of Contents
1. [OPERABLE]()
    1. [KEYBOARD ACCESSIBILITY]()
        1. [Keyboard operable]()
        2. [Avoid keyboard traps]()
    2. [TIMING]()
        1. [Time-based media]()
        2. [Time-based web components]()
    3. [NAVIGABLE]()
        1. [Page structure]()
        2. [Links]()
        3. [Focus order]()
        4. [Focus visible]()
2. [UNDERSTANDABLE]()
    1. [READABLE]()
        1. [Language]()
        2. [Abbreviations]()
    2. [PREDICTABLE]()
        1. [Interaction]()
        2. [Consistency]()
    2.3. [INPUT ASSISTANCE]()
        1. [Instruction]()
        2. [Suggestion]()
        3. [Prevention]()
3. [ROBUST]()
    1. [COMPATIBILITY]()
        1. [Web standards]()
        2. [Mark-up syntax and semantics]()

# 1 Operable
All functionality within a website or –application should be able to be operated by the user. This means basic functionality and interactive components should be accessible. 
Basic means of operating a website are by mouse, keyboard and touch. Operating a website with assistive technologies is dependent on these basic means of operating, of which the keyboard has a main role.

## 1.1 Keyboard accessibility

### 1.1.1 Keyboard operable
All functionality of the content is operable through a keyboard interface.

*	Elements with a `hover` event also have a `focus` event specified.
    *	CSS: Combine `:hover` with `:focus` pseudo-selectors.
    *	JS: Combine `mouseover` with `focus` events and `mouseout` with `blur` events.
*	Elements with a `click` event can be triggered with a keyboard interface.
    *	HTML &amp; JS: Make sure non-focusable elements with a `click` event are able to receive focus by adding the `tabindex="-1"` HTML global attribute.
 
### 1.1.2 Avoid keyboard traps
If keyboard focus can be moved to an element on the page, then focus can be moved away using only a keyboard interface.

*	A page’s content should be tab-able on focusable elements from begin to end. 
    *	HTML: Focus is received and passed through links `<a>`, buttons `<button>`, form elements `<input>`, `<select>`, `<textarea>` and elements that have the `tabindex`-attribute, when the tab-key is pressed.
*	When a default keyboard interaction is prevented it does not cause a keyboard trap.
    *	JS: Where `keydown` and `keypress` events are used to prevent default keyboard interaction does not break the page tab-ability.
    *	JS: Where `keydown` and `keypress` events are used to prevent default keyboard interaction there is a `keyup` event followed with an alternate action.
    *	JS: When default-keys are used to operate within a web application, make sure a way to exit the application is available, so that the default actions for those keys are made available again. This can be done by adding a `blur()` action to the escape-key or by setting focus on a previous element.
*	Give instructions when other or extra keys than default are used for interaction with the keyboard.
    *	HTML &amp; JS: Use the `title`-attribute to give instructions. Optional: Use JavaScript to read the `title`-attribute and display a _tooltip_ when the element receives focus.
 
## 1.2 Timing
Provide users enough time to read and use content.

### 1.2.1 Time-based media
The user is provided control over time-based media.

*	Video and Audio elements have controls available so that the user is able to decide to start or stop the media.
    *	HTML: Add the `controls`-attribute to provide the user control over time-based media.
*	When custom controls are needed for video or audio web players, provide the same functionality as default controls.
    *	HTML &amp; JS: Use the `HTMLMediaElement` methods `play()` and `pause()` and the properties `volume`, `muted` and `currentTime` to bind to custom media buttons as `<button>`.

### 1.2.2 Time-based web components
The user is provided control over time-based web components.

*	The user is offered controls to operate a time-based component.
    *	HTML &amp; JS: Create controlling elements on top of the time-based web component to add pause or change timing functionality for the user. Use DOM event handling and node manipulation to create these controls.
 
## 1.3 Navigable
Provide ways to help users navigate and find content.

### 1.3.1 Page structure
Web pages have a title, headings and labels to describe topic or purpose.

*	Pages are titled.
    *	HTML: A `<title>` is present in the `<head>` describing the page.
    *	HTML: Use one `<h1>` to display the website title inside the `<body>`.
*	Pages consist of headings.
    *	HTML: Use heading mark-up `<h1-6>` to describe topic and purpose to sections of a page and add structure.
*	Big repetitive blocks of web content can be skipped.
    *	HTML: Use local links `<a href="#target">` to skip directly to content with `id="target"`. Add `tabindex="-1"` to elements naturally not focusable to move the focus cursor.
    *	CSS &amp; JS: Create an expandable menu or table of contents to navigate through big content blocks. 
 
### 1.3.2 Links
The purpose of each link can be identified from link text alone.

*	An `<a>` element should only be used to link to refer to parts within a web page, a web page within the web site or an external web site.
    *	HTML: To a part within a web page `<a href="#part-of-page">part of page</a>`. The target should have either a preceding `<a name="part-of-page"></a>` or an `id="part-of-page"` and `tabindex="-1"` attribute.

### 1.3.3 Focus order
Focusable elements receive focus in a meaningful and operable order.

*	When moving focus from and to focusable elements, the direction should be determined by the language direction: left to right, top to bottom or right to left, bottom to top.
 
### 1.3.4 Focus visible
If a keyboard moves focus, the focussed element is visible.

*	Focus on links, buttons and form elements should always be visible.
    *	CSS: Use the `:focus` pseudo selector where the `:hover` pseudo selector is used. 
    *	CSS: Never use the `outline: none` property, unless an alternative visible feedback is given.
*	Focus on elements with the `tabindex`-attribute should be visible if they have similar functionality as links, buttons or form elements.
    *	HTML: Elements with `tabindex` set to 0 or higher integer values have similar tab-able functionality and their focus should be visible.
    *	HTML: Elements with `tabindex` set to -1 are not included in the focus order but are made focusable for JavaScript `element.focus()` and local linking `<a href="#target">` to move the focus cursor manually. 
        Focus on these elements does not need to be made visible.

# 2 Understandable
Information and the operation of user interface must be understandable.

## 2.1 Readable
Make text content readable and understandable.

### 2.1.1 Language
The human language can be programmatically determined.

*	The human language of a web page can be determined.
    *	HTML: Set the `lang`-attribute on the `<html>`-element. Use a value format like this: `en-GB` (language – REGION). [See a list of all language subtags](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
*	The human language of parts of a web page can be determined.
    *	HTML: Set the `lang`-attribute on the html-element enclosing the word or phrase in another language than the default set on the `<html>`-element. E.g. `<p lang="nl-NL">Dit is Nederlandse taal</p>` ("This is Dutch language").

### 2.1.2 Abbreviations
The expanded form of abbreviations and acronyms are made available.

*	Provide appropriate ways to identify the meaning of abbreviations and acronyms.
    *	HTML: Enclose abbreviations with `<abbr title="Expanded form">Exp.</abbr>` and acronyms with `<acronym title="Expanded Word">EW</acronym>`. Set the appropriate language by adding the `lang`-attribute.
 
## 2.2 Predictable
Make Web pages appear and operate in predictable ways.

### 2.2.1 Interaction
When a component receives focus or input or changes in any other way, it does not initiate a change of context in the web page.

*	User input or focus does not initiate a change of context.
    *	HTML &amp; JS: A button press activating a `click` or `submit` -event initiates Change of context. This will give the user control.
    *	JS: `focus`, `blur` and `change` events should not initiate changes of context.

### 2.2.2 Consistency
Repetitive content within web pages is displayed and structured consistently.

*	Navigational elements are repeated in the same relative order on each page within a website.
    *	HTML: Repeating content like logo, main navigation, header and footer information is ordered and structured in the same relative order on every page.
*	Components that have the same functionality are identified consistently.
    *	HTML &amp; CSS: Use the `class`-attribute to add similar layout to components with comparable functionality.
    *	HTML &amp; JS: Use the `data-*`-attribute to bind interactivity and or behaviour to components with comparable functionality.
 
## 2.3 Input assistance
Help users avoid and correct mistakes.

### 2.3.1 Instruction
Provide instructions when content requires user input.

*	Forms are structured.
    *	HTML: Use `<label>` to label `<input>` with visible text or use `<input title="Labelling">` when visible text is not available.
    *	HTML: Group relating form controls with `<fieldset>` followed directly by a title with `<legend>`.
*	Applications are structured.
    *	ARIA: Use `aria-label` and `aria-labelledby` or `aria-describedby` to label and identify controls.
    *	ARIA: Choose a matching ARIA `role` to describe the application’s functionality as accurate as possible.

### 2.3.2 Suggestion
Provide suggestions when specific user input is required.

*	Form input required format is suggested.
    *	HTML &amp; JS: For text based `<input>` display a placeholder or create a tooltip when the `<input>` receives focus.

### 2.3.3 Prevention
User input is validated to prevent errors.

*	Where users are required to submit information
    *	HTML &amp; JS: Prevent default action of the forms on `submit` event. Initiate a validation and / or ask for confirmation from the user before submitting the form.

# 3 Robust
Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

## 3.1 Compatibility
Maximize compatibility with current and future user agents, including assistive technologies.

### 3.1.1 Web standards
Web standard technology is used to maximize compatibility with current and future user agents.

*	A standard web technology, recommended by the World Wide Web Consortium, is used. [All W3C webdesign standards](http://www.w3.org/standards/webdesign/) 
    *	HTML: [W3C HTML standards](http://www.w3.org/standards/techs/html)
    *	ARIA: [W3C ARIA standards](http://www.w3.org/standards/techs/aria) 
    *	CSS: [W3C CSS standards](http://www.w3.org/standards/techs/css)
    *	JS-DOM: [W3C DOM standards](http://www.w3.org/standards/techs/dom)
    *	JS-DOM events: [W3C DOM Events standards](http://www.w3.org/standards/techs/domevents)
*	When a non-standard or experimental web technology is used, a fallback to a standard web technology is implemented.
    *	Develop with the progressive enhancement principle to ensure newest technology degrades gracefully for older technology.
 
### 3.1.2 Mark-up syntax and semantics
Mark-up and code is written accordingly to the language’ specification to maximize compatibility with current and future user agents.

*	Mark-up and code written is validated for each web site view.
    *	HTML &amp; ARIA: Validate HTML with the [W3C mark-up validation service](validator.w3.org). This includes ARIA syntax as well.
    *	CSS: Validate CSS with the [W3C CSS validation service](jigsaw.w3.org/css-validator) or for stricter CSS with code quality validation the [CSS LINT validation service](www.csslint.net).
    *	JS: Validate JS with the [JSLint JavaScript validation and code quality service](www.jslint.com)
*	Prevent the use of user agent specific technologies as much as possible. User agents should implement the web standard technology documentation to render web pages.
    *	CSS: Always end with the standardized CSS property after user agent prefixes; `-webkit-`, `-moz-`, `-ms-`, `-o-`. Preferably their usage is avoided.
