import React from 'react';

const Blog = () => {
    return (
        <div className='w-[90%] md:w-[50%] mx-auto my-8'>
            <h1 className='font-bold mb-5'>Questions and Answers</h1>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    1.What is the purpose of react router?
                </div>
                <div className="collapse-content">
                    <p>It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing. React Router also gives us access to browser history features while maintaining the correct view of the application.

                        React Router uses a component-based approach to routing. It provides different routing components as needed by the application. </p>
                </div>
            </div>

            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    2.How does react context API works?
                </div>
                <div className="collapse-content">
                    <p> It allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels.   It is native and simple, it isn’t a dedicated state management tool like Redux, and it doesn’t come with sensible defaults.You can very easily get carried away and add too many components where they aren’t needed. To prevent re-rendering, be sure to place contexts correctly only in the components that require them.</p>
                </div>
            </div>

            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    3.What is  useRef hook?
                </div>
                <div className="collapse-content">
                    <p> useRef() only returns one item. It returns an Object called current.When we initialize useRef we set the initial value: useRef(0).it also helps us to used tracking and state changes.Thats why we are able to persist useRef values between renders.Another useful application of the useRef() hook is to access DOM elements. This is performed in 3 steps:

                        Define the reference to access the element const elementRef = useRef();
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;