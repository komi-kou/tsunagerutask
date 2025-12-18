import React, { useState } from 'react';
import Layout from './components/Layout';
import TaskBoard from './components/TaskBoard';
import TaskForm from './components/TaskForm';

// Mock data for initial display
const initialTasks = [
    { id: 1, title: 'デザイン作成', description: 'トップページのラフ案を作成する', status: 'done', assignee: '田中' },
    { id: 2, title: 'フロントエンド実装', description: 'Reactでコンポーネントを作成', status: 'in-progress', assignee: '鈴木' },
    { id: 3, title: 'API連携', description: 'Firebaseとの通信処理を実装', status: 'todo', assignee: '佐藤' },
];

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const handleAddTask = () => {
        setEditingTask(null);
        setIsFormOpen(true);
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        setIsFormOpen(true);
    };

    const handleSaveTask = (taskData) => {
        if (taskData.id) {
            // Update existing
            setTasks(tasks.map(t => t.id === taskData.id ? taskData : t));
        } else {
            // Create new
            const newTask = { ...taskData, id: Date.now() };
            setTasks([...tasks, newTask]);
        }
    };

    return (
        <Layout>
            <div className="mb-6 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">タスク一覧</h2>
                    <p className="text-slate-500 text-sm">チームの進捗状況を一目で確認</p>
                </div>
                <button
                    onClick={handleAddTask}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-lg shadow-blue-200 transition-all flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    タスク追加
                </button>
            </div>

            <TaskBoard
                tasks={tasks}
                onEdit={handleEditTask}
            />

            <TaskForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSubmit={handleSaveTask}
                initialData={editingTask}
            />
        </Layout>
    );
}

export default App;
