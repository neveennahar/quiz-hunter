import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const Home = () => {

    const { data: quizes } = useLoaderData();

    return (
        <div>
            <div className="hero h-[300px]" style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/memphis-style-yellow-quiz-time-banner-design-promotion_626143-386.jpg?w=1000")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-center">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Quiz Hunter</h1>
                    </div>
                </div>
            </div>

            <div className='my-[40px] w-[90%] lg:w-[80%] mx-auto'>

                <h3 className="font-bold text-center mb-8">Topics</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        quizes?.map((quiz) => {
                            return (
                                <div key={quiz.id} className="card bg-neutral w-full shadow-lg">
                                    <figure><img src={quiz.logo} alt="quiz logo" /></figure>
                                    <div className="card-body text-white">
                                        <h2 className="card-title">{quiz.name}</h2>
                                        <p>Total: {quiz.total}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/quiz/${quiz.id}`} className="btn btn-sm btn-primary">Start Quiz!</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>



            </div>





        </div>
    );
};

export default Home;



