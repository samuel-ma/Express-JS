

const filterDate = (req, res, next) => {

    const today = new Date();
    
    const hour = today.getHours();
    
    const day = today.getDay();
    
    console.log(hour);
    (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) &&
    hour <= 17 &&
    hour >= 9
      ? next()
      : res.send("Come back when we're open ");
  };

module.exports = filterDate;
  