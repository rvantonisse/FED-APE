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
