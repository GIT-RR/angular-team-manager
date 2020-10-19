import { Task } from '../models/task';
import { statuses, roles } from './common';

export const tasks: Task[] = [
  {
    id: 0,
    role: 'tl',
    description: 'Contract a new database developer',
    status: 1,
  },
  {
    id: 1,
    role: 'dbd',
    description: 'Re-structure user table',
    status: 1,
  },
  {
    id: 2,
    role: 'fed',
    description: 'Design new layout for the login page',
    status: 0,
  },
  {
    id: 3,
    role: 'fed',
    description: 'Add validation to the login form',
    status: 0,
  },
];

const taskMapper = (task: Task) => {
  return {
    ...task,
    statusDesc:
      statuses.find((s) => s.value === task.status)?.name || 'Undefined',
    roleDesc: roles.find((r) => r.value === task.role)?.name || 'No role',
  };
};

export const getAll = () => {
  // All except the Dones
  return tasks.filter((task) => task.status !== 2).map((t) => taskMapper(t));
};

export const add = (task: Task) => {
  tasks.push({
    ...task,
    id: tasks.length,
  });
};

export const update = (task: Task) => {
  const index = tasks.findIndex(function (o) {
    return o.id === task.id;
  });
  tasks[index] = Object.assign(tasks[index], task);
};
