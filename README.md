# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans :
document.getElementById() selector type is only (id), it returns single element 
Ex: 
      <h1 id="my-dream">Full Stack Web Developer Is My Dream</p>
      const myDream = document.getElementById('my-dream')
      
document.getElementByClassName() selector type is only (class), it returns single element 
Ex:
      <h1 class="my-dream">Full Stack Web Developer Is My Dream</p>
      const myDream = document.getElementByClassName('my-dream')
      
document.querySelector() selector type is any CSS selector, it returns First match Element
Ex:
  <h1 id="title">Developer</h1>
  <p class="text">Front End Developer</p>
  <p class="text">Back End Developer</p>
  
  const heading = document.querySelector("#title");
  console.log(heading.innerText);

  const firstPara = document.querySelector(".text");
  console.log(firstPara.innerText);

document.querySelectorAll() selector type is any CSS selector, it returns NodeList (all match)
Ex:
   <p class="text">This is paragraph 1</p>
  <p class="text">This is paragraph 2</p>
  <p class="text">This is paragraph 3</p>

  const paragraphs = document.querySelectorAll(".text");
  console.log(paragraphs.length);

# How do you create and insert a new element into the DOM?
Ans :
  <h1>My Page</h1>
  const newParagraph = document.createElement('p');
  newParagraph.innerText = "This is a new paragraph";
  document.body.appendChild(newParagraph);

# What is Event Bubbling and how does it work?
Event bubbling in JavaScript is a mechanism in the Document Object Model (DOM) event propagation where an event, after being triggered on a target element, 
"bubbles up" through its ancestor elements in the DOM hierarchy. 
Event bubbling is a mechanism in JavaScript's Document Object Model (DOM) event propagation where an event, after being triggered on a target element, 
"bubbles up" through its ancestors in the DOM tree. This means the event is handled first by the element it originated from, 
and then by its parent, then its grandparent, and so on, all the way up to the document root (or until it's explicitly stopped). 

# What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to manage events from multiple child elements. 
This approach leverages event bubbling to catch events from child elements without adding separate listeners for each child.

# What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() controls the behavior of the element itself in response to an event (preventing a link from navigating).
stopPropagation() controls the flow of the event through the DOM (preventing a click on a child element from also triggering a click handler on its parent).
