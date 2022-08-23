const getSleepHours = (day) => {
    if (
      day.toLowerCase() === "monday" ||
      day.toLowerCase() === "tuesday" ||
      day.toLowerCase() === "wednesday"
    ) {
      return 12;
    } else if (day.toLowerCase() === "thursday") {
      return 5;
    } else if (
      day.toLowerCase() === "friday" ||
      day.toLowerCase() === "saturday"
    ) {
      return 6;
    } else if (day.toLowerCase() === "sunday") {
      return 4;
    } else {
      return "Please enter one day of the week";
    }
  };
  console.log(getSleepHours("FRIDAY"));
  
  const getActualSleepHours = () => {
    let totalSleepHours =
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday");
    return totalSleepHours;
  };
  const getIdealSleepHours = (a = 9) => {
    let idealHours = a;
    return idealHours * 7;
  };
  
  console.log(getIdealSleepHours());
  console.log(getActualSleepHours());
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours == idealSleepHours) {
      return "You have got the perfect sleep schedule.";
    } else if (actualSleepHours > idealSleepHours) {
      return "Someone doesn't have a job but seriously need one";
    } else {
      return "You need more sleeps";
    }
  };
  console.log(calculateSleepDebt());
  