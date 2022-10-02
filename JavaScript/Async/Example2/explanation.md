In this example, I have used await Promise.all() to wait for all promises to complete.
What this does is, that the all promises written inside the Promise.all([promise1, promise2]) will be runned symontaniously.
If one of the promises fails then it halts the process and returns immediataly which is nice because you don't have to wait for all promises to finsih to see the failed promise.
