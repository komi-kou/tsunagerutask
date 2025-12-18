import React from 'react';

const statusColors = {
    'todo': 'bg-slate-100 text-slate-600 border-slate-200',
    'in-progress': 'bg-blue-50 text-blue-700 border-blue-200',
    'done': 'bg-green-50 text-green-700 border-green-200',
};

const statusLabels = {
    'todo': '未着手',
    'in-progress': '進行中',
    'done': '完了',
};

export default function TaskCard({ task }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-3 active:scale-[0.99] transition-transform touch-manipulation">
            <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-medium px-2 py-1 rounded-full border ${statusColors[task.status]}`}>
                    {statusLabels[task.status]}
                </span>
                <span className="text-xs text-slate-400">{task.assignee}</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">{task.title}</h3>
            {task.description && (
                <p className="text-sm text-slate-500 line-clamp-2">{task.description}</p>
            )}
        </div>
    );
}
