1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll
These methods are used to select things or elements from the DOM. getElementById() brings a single element based on its unique ID. getElementsByClassName() brings elements using a class name . querySelector() uses CSS selectors to return the first matching element, and querySelectorAll() also uses CSS selectors but returns all matching elements as a static NodeList. The main difference is whether the method returns a single element or a collection.

2. How to create and insert a new element into the DOM
At forst, Create and insert a new element into the DOM involves generating a new element.

3. What is Event Bubbling and how it works
Event bubbling is a behavior in the DOM event system where an event that occurs on a specific element first triggers on that element and then gradually moves upward through its parent elements in the DOM hierarchy. This upward propagation continues until it reaches the root of the document or until the event propagation is stopped. This mechanism allows parent elements to also respond to events that originate from their child elements.

4. What is Event Delegation and why it is useful
Event delegation is a technique where an event listener is attached to a parent element instead of assigning separate listeners to each of its child elements. Because events bubble up through the DOM, the parent element can capture and handle events triggered by its children. This approach improves performance, reduces the number of event listeners in the code, and allows newly added child elements to automatically inherit the same event behavior.

5. Difference between preventDefault() and stopPropagation()
preventDefault() is used to stop the browser from performing the default action associated with an event, such as navigating to a link or submitting a form. On the other hand, stopPropagation() is used to prevent the event from continuing its propagation through the DOM hierarchy. In essence, one controls the browser’s default behavior, while the other controls how the event moves through elements in the DOM.
