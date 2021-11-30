import React, { FC, useState, ChangeEvent } from 'react'
import { TITask } from './TodoInterface';
import View from './View';

const Form: FC = () => {

    const [task, setTask] = useState<string>("");
    const [period, setPeriod] = useState<string>("");
    const [todoList, setTodoList] = useState<TITask[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if(e.target.name === "task"){
            setTask(e.target.value)
        } else {
            setPeriod(e.target.value)
        }
    };

    const submitTask = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const newTask = { taskName: task, taskPeriod: period }
        setTodoList([...todoList, newTask]);
        setTask("");
        setPeriod("");
    }

    const taskComplete = (deleteTask: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName !== deleteTask
        }))
    }

    return (
        <>
            <div className="flex justify-evenly mt-3 mb-3">
                <form className="w-full max-w-sm" onSubmit={submitTask}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Todo Name
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="inline-full-name" 
                        type="text"
                        name="task"
                        value={task}
                        onChange={handleChange} 
                        />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Todo Period
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="inline-period" 
                        type="text" 
                        name="period"
                        value={period}
                        onChange={handleChange} 
                        />
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                        type="submit"
                        >
                            Save Todo
                        </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="">
                {todoList.map((task:TITask, key:number) => {
                    return <View key={key} task={task} taskComplete={taskComplete} />
                })}
            </div>
        </>
    )
}

export default Form;
