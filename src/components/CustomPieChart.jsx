import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const CustomPieChart = () => {
    const data = [
        { name: 'Group A', value: 300 },
        { name: 'Group B', value: 100 },
        { name: 'Group C', value: 200 },
        { name: 'Group D', value: 500 },
        { name: 'Group E', value: 100 },
    ];

    const COLORS = ['#42FF00', '#9E00FF', '#FAFF00', '#000000', '#FF0000'];

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <ResponsiveContainer width="100%" height={400}>
                    <h2 style={{ fontWeight: 'normal', marginTop: 0 }}>High Scale Products</h2>
                    <PieChart>
                        <Pie
                            data={data}
                            cx={130}
                            cy={100}
                            innerRadius={70}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}

                            <Label
                                value="$7700.56"
                                position="center"
                                fontSize={16}
                                fontWeight="bold"
                            />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default CustomPieChart;
