import React from 'react';
import { AiFillEye } from 'react-icons/ai'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const SingleQuiz = ({ question, quizNo, verifyResult }) => {
    const { options } = question;

    const verifyAnswer = (answer) => {
        if (question.correctAnswer === answer) {
            verifyResult({ id: question.id, result: true });
            toast.success("Answer is correct...!", { autoClose: 1000 })
        } else {
            verifyResult({ id: question.id, result: false })
            toast.error("Answer is Wrong...!", { autoClose: 1000 })
        }
    }

    const showAnswer = (answer) => {
        Swal.fire({
            title: "Correct Answer: ",
            text: answer
        })
    }

    return (
        <div className="card my-5 w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex justify-between gap-6'>
                    <h3 className="card-title text-blue-500">{question.question.split("<p>")[1].split("</p>")[0]}</h3>


                    <span onClick={() => showAnswer(question.correctAnswer)} className='cursor-pointer'><AiFillEye className='text-blue-500' size={25} /></span>
                </div>

                <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        options?.map((option, index) => {
                            return (
                                <div key={index} className='flex items-center gap-4 border border-blue-500 cursor-pointer rounded-xl p-3'>
                                    <input onClick={() => verifyAnswer(option)} type="radio" name={`radio-${quizNo}`} id={option} className=" radio radio-primary" />
                                    <label htmlFor={option} className='text-blue-500 font-semibold w-full'>{option}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;