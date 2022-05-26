import React from 'react';
import Loading from '../Shared/Loading';

const Blog = () => {
    return (
        <div>
            <div className='w-11/12 text-left mx-auto my-5'>
                <h1 className='font-semibold text-2xl mb-3 mt-6'>
                    How will you improve the performance of a React Application ?
                </h1>
                <small> <span className='font-bold'>1. Keeping component state local where necessary...</span> We've learned that a state update in a parent component re-renders the parent and its child components.
                    So, to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code.</small>
                <br />
                <small><span className='font-bold'> 2. Memoizing React components to prevent unnecessary re-renders...</span>
                    Unlike the previous performance technique where refactoring our code gives us a performance boost, here we trade memory space for time. So, we must only memoize a component when necessary.
                    Memoization is an optimization strategy that caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.</small>
                <br />
                <small><span className='font-bold'>3. Code-splitting in React using dynamic import()</span>
                    Code-splitting is another important optimization technique for a React application. By default, when a React application renders in a browser, a “bundle” file containing the entire application code loads and serves to users at once. This file generates by merging all the code files needed to make a web application work.
                    The idea of bundling is useful because it reduces the number of HTTP requests a page can handle. However, as an application grows, the file sizes increase, thus increasing the bundle file. At a certain point, this continuous file increase slows the initial page load, reducing the user's satisfaction.
                    With code-splitting, React allows us to split a large bundle file into multiple chunks using dynamic'import() followed by lazy loading these chunks on-demand using the React.lazy. This strategy greatly improves the page performance of a complex React application
                </small>
                <br />
                <small>
                    <span className='font-bold'>3. 4. Windowing or list virtualization in React applications</span>
                    magine we have an application where we render several rows of items on a page. Whether or not any of the items display in the browser viewport, they render in the DOM and may affect the performance of our application.
                    With the concept of windowing, we can render to the DOM only the visible portion to the user. Then, when scrolling, the remaining list items render while replacing the items that exit the viewport. This technique can greatly improve the rendering performance of a large list.
                </small>
                <br />

                <small>
                    <span className='font-bold'>5. Lazy loading images in React</span>
                    To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. With lazy loading, we can wait until each of the images is about to appear in the viewport before we render them in the DOM.
                    Similar to the concept of windowing mentioned above, lazy loading images prevents the creation of unnecessary DOM nodes, boosting the performance of our React application
                </small>
            </div>
            <div className='w-11/12 text-left mx-auto my-5'>
                <h1 className='font-semibold text-2xl mb-3 mt-6'>
                    What are the different ways to manage a state in a React application?

                </h1><br />
                <small>There are four main types of state to properly manage in your React apps:
                    1. Local state
                    2. Global state
                    3. Server state
                    4. URL state
                    <br />
                    <span className='font-bold'>Local state</span> <br />
                    Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.
                    useState is the first tool you should reach for to manage state in your components.
                    It can take accept any valid data value, including primitive and object values.
                    <br />
                    <span className='font-bold'>Manage Global State</span> <br />

                    Once you attempt to manage state across multiple components, things get a bit trickier.
                    You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.
                    What do you do if you want to update a component's state from basically anywhere in your app? You turn it into global state.
                    To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state
                    <br />
                    <span className='font-bold'>Manage Server State</span> <br />
                    Server state can be deceptively challenging to manage.
                    At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.
                    To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.
                    <br />
                    <span className='font-bold'>Manage URL State</span> <br />
                    To end a difficult topic on a positive note, URL state is largely already managed for you if you are using a framework like Next.js or the current version of React Router.
                    URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.
                    If you are using React Router, you can get all the information you need using useHistory or useLocation.
                </small>
            </div>
            <div className='w-11/12 text-left mx-auto my-5'>
                <h1 className='font-semibold text-2xl mb-3 mt-6'>
                    How does prototypical inheritance work ?
                </h1><br />

                <small>Everything in Javascript is an object. Even when creating a Class is an Object via an  Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword 'class' and 'inheritance'.
                    Javascript's version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript's version of class-based programming, but for simplicitys sake and learning purposes, I do not want to go over those issues. See details here [http://www.2ality.com/2011/11/javascript-classes.html].
                    So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
                    Below is a sample code with comments and caption to better see how it works:
                    After going through the code, its best to read further about Prototypal Inheritance from mozilla doc. Code example below is just one of many ways of implementing Prototypal Inheritance.</small>
            </div>

            <div className='w-11/12 text-left mx-auto my-5'>
                <h1 className='font-semibold text-2xl mb-3 mt-6'>
                    Why you do not set the state directly in React
                    ?
                </h1><br />

                <small>
                    One should never update the state directly because of the following reasons:
                    • If you update it directly, calling the setState() afterward may just replace the update you made.
                    • When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    • You will lose control of the state across all components.
                </small>
            </div>

            <div className='w-11/12 text-left mx-auto my-5'>
                <h1 className='font-semibold text-2xl mb-3 mt-6'>
                    What is a unit test? Why should write unit tests?
                </h1><br />

                <small>
                    Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.

                    Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.
                </small>
            </div>
        </div >
    );
};

export default Blog;