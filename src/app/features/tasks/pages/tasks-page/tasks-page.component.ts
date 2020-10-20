import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../core/models/task';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css'],
})
export class TasksPageComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask: Task = null;
  addTask: boolean = false;
  headers = ['Area', 'Description', 'Status'];

  taskTableRowMapper = (task: Task) => {
    return [task.id, task.roleDesc, task.description, task.statusDesc];
  };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  async getTasks() {
    this.tasks = await this.taskService.getTasks();
  }

  getBody = () => {
    return this.tasks.map((t) => this.taskTableRowMapper(t));
  };

  handleAddTask = (task: Task) => {
    this.taskService.addTask(task);
    this.addTask = false;
    this.getTasks();
  };

  handleEditTask = (task: Task) => {
    this.taskService.updateTask(task);
    this.selectedTask = null;
    this.getTasks();
  };

  handleSelectTask = (id: number) => {
    if (this.selectedTask && this.selectedTask.id === id) {
      this.selectedTask = null;
    } else {
      this.selectedTask = this.tasks.find((task) => task.id === id);
    }
  };
}
