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
