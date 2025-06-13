// 5.  Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

class RateLimiter {
    constructor(limit) {
      this.limit = limit; // Maximum number of concurrent tasks
      this.running = 0; // Number of tasks currently running
      this.queue = []; // Task queue (tasks waiting to be processed)
    }
  
    // Add a task to the rate limiter
    addTask(task,priority) {
      return new Promise((resolve, reject) => {
        this.queue.push({task:() => task().then(resolve).catch(reject),priority});
        this.queue.sort((a,b)=>a.priority-b.priority);
        this.processQueue(); // Try to process the task
      });
    }
  
    processQueue() {
      if (this.running >= this.limit || this.queue.length === 0) {
        return; // If the limit is reached, or no tasks in the queue
      }
  
      const nextTask = this.queue.shift();
      this.running++; // Increment running task count
  
      // Execute the task
      nextTask.task().finally(() => {
        this.running--; 
        this.processQueue(); 
      });
    }
  }
  
  const createTask = (id, time) => {
    return () =>
      new Promise((resolve) => {
        console.log(`Task ${id} started`);
        setTimeout(() => {
          console.log(`Task ${id} finished after ${time}ms`);
          resolve(`ask ${id} completed after ${time}ms`);
        }, time);
      });
  };
  
  const rateLimiter = new RateLimiter(2); 
  
  
  
    rateLimiter.addTask(createTask(1, 1000),2);
    rateLimiter.addTask(createTask(2, 1000),3);
    rateLimiter.addTask(createTask(3, 1000),3);
    rateLimiter.addTask(createTask(4, 1000),1);
     // Each task takes 1 second
  