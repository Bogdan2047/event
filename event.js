const eventHandler = (cb) => {
    let i = 0;

        setInterval(function () {
            i++;
            cb(i);
        }, 3000);      
  
};

eventHandler((event) => {
  console.log("event => ", event);
});
