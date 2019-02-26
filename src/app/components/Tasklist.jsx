import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({ tasks }) => (
    <div>
        {tasks.map(task => (
            <div>
                {task.name}

            </div>
        ))}
    </div>
)