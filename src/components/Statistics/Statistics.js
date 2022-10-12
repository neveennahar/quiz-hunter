import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const { data } = useLoaderData();
    let quizData = data.map((quiz) => {
        const obj = { name: quiz.name, total: quiz.total };
        return obj;
    })
    console.log(quizData);
    return (
        <div className='w-[80%] lg:w-[60%] mx-auto'>
            <h2 className='mb-5'>Statistics of Total Quizes</h2>

            <div className='w-full h-[400px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={400}
                        data={quizData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis dataKey={"total"} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Statistics;