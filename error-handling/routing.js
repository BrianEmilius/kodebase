module.exports = function(app) {
  app.use((req, res) => {
    res.status(404);
    res.render("errorpage", {
      title: "404: Not Found",
      content:
        "The page you are looking for does not exist. This service is either temporarily unable to process your request or the link you clicked is broken. Please check back shortly."
    });
  });

  app.use((error, req, res, next) => {
    res.status(500);
    res.render("errorpage", {
      title: "500: Internal Server Error",
      content: "Something went wrong on your server. Check your logs."
    });
    next(error);
  });
};
