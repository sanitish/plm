import React from 'react';
import TaskItem from './TaskItem';
const TaskList = () => {





    return (
        <div className="card">
            <table id="table" className="table">
                <thead>
                    <tr>
                        <th scope="col">Sl. No.</th>
                        <th scope="col">Task name</th>
                        <th scope="col">Plan Start Date</th>
                        <th scope="col">Plan End Date</th>
                    </tr>
    

                </thead>
                <tbody>
                </tbody>
            </table>

        </div>
    );
}

export default TaskList;