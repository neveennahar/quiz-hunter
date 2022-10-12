import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const { data } = useLoaderData();
    const { questions } = data;

    const [results, setResults] = useState([]);

    const verifyResult = (answer) => {
        const resultData = [...results];
        const findAnswer = resultData.find((item) => item.id === answer.id);

        if (findAnswer) {
            findAnswer.result = answer.result;
        } else {
            resultData.push({ id: answer.id, result: answer.result })
        }
        setResults(resultData)
    }
    return (
        <div className='w-[90%] lg:w-[70%] mx-auto mt-7'>
            <div className="flex flex-wrap gap-6 justify-between bg-slate-50 p-5 rounded-xl shadow-lg">
                <h3 className='font-bold' >Quiz of {data.name} (Total={data.total})</h3>

                <div className="flex my-2 gap-6">
                    <h5 className='text-green-600 font-semibold'>Correct: {
                        results.reduce((prev, current) => {
                            if (current.result === true) {
                                return prev + 1;
                            }
                            return prev;
                        }, 0)

                    }
                    </h5>
                    <h5 className='text-red-600 font-semibold'>Wrong: {
                        results.reduce((prev, current) => {
                            if (current.result !== true) {
                                return prev + 1;
                            }
                            return prev;
                        }, 0)
                    }</h5>
                </div>
            </div>

            {
                questions?.map((question, index) => <SingleQuiz key={question.id} quizNo={index} verifyResult={verifyResult} question={question} />)
            }
        </div>
    );
};

export default Quiz;