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
