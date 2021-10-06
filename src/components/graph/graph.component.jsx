import React from 'react'

import './graph.style.scss';

import { LineChart, Line, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    {name: 'Page A', uv: 100,},
    {name: 'Page A', uv: 300,},
    {name: 'Page A', uv: 700,}, 
    {name: 'Page A', uv: 400,},
    {name: 'Page A', uv: 500,},
    {name: 'Page A', uv: 200,},
    {name: 'Page A', uv: 100,},
    {name: 'Page A', uv: 500,},
    {name: 'Page A', uv: 300,},
    {name: 'Page A', uv: 600,},
    {name: 'Page A', uv: 200,},
    {name: 'Page A', uv: 800,},
    {name: 'Page A', uv: 100,},
    {name: 'Page A', uv: 900,},
];

const Graph = () => (
    <div className="graph">
        <ResponsiveContainer width={500} height="100%">
            <LineChart width="100%" height="100%" data={data}>
                <Line type="linear" dataKey="uv" stroke="#FFFFFF" strokeWidth={2} />
                <CartesianGrid vertical={false} stroke="#707070" strokeDasharray="0 0" />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default Graph;