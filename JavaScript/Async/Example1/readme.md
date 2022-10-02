In this example we have multiple async functions called at the same time. This is because they are independent of one another and doesn't require
to wait other functions to finish so we can just call them at once and save time. Otherwise we would have waited 4 sec to just to console on thing.
