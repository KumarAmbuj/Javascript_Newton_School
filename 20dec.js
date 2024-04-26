//console.log("hello");

// document.getElementById("a").textContent = "p tag having id as a";

// document.getElementsByClassName("b")[1].textContent =
//   "this is p tag having class name as b";

// document.querySelector("#a").textContent =
//   "this is p tag having id a chainging text using query selector";

// document.querySelector(".b").textContent =
//   "this is p tag having class name b chainging text using query selector";

// document.querySelectorAll(".b")[2].textContent =
//   "text changed using query selector all";

// document.getElementsByTagName("p")[0].textContent =
//   "text changed using tag name";

//document.querySelector("p").textContent = "text changed using query selector";

app.post("/add-blogs", async (req, resp) => {
  try {
    let blog = new Blog(req.body);
    let result = await blog.save();
    resp.status(200).json({ message: "blog successfully created" });
  } catch (err) {
    resp.status(500).json({ message: "some error occured" });
  }
});

app.delete("/blog/:id", async (req, resp) => {
  try {
    let data = await Blog.deleteOne({ _id: req.params.id });
    if (data) {
      resp.status(200).json({ message: "blog successfully deleted" });
    }
  } catch (error) {
    resp.status(500).json({ message: "Internal server error" });
  }
});
