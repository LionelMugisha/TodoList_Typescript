import React from 'react';
import { TITask } from './TodoInterface';

interface Props {
    task: TITask;
    taskComplete(deleteTask: string): void
}

const View = ({ task, taskComplete }: Props) => {
    return (
        <div className="flex flex-col p-2 bg-gray-100 mt-2 shadow-sm rounded-md max-w-xl mx-auto mb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center ml-2">
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none">{task.taskName}</div>
              <p className="text-sm text-gray-600 leading-none mt-2">{task.taskPeriod}</p>
            </div>
          </div>
          <div className="mr-5">
            <button onClick={() => taskComplete(task.taskName) }><i className="fa fa-ban"></i></button>
          </div>
        </div>
      </div>
    )
}

export default View;
