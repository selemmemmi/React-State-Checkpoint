import "./App.css";
import Counter from "./components/Counter/Counter";
import React, { Component } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class App extends Component {
  state = {
    show: false,
    fullName: "Salem Memmi",
    bio: "GoMyCode",
    imgSrc:
      "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/187581119_967618307325920_7750378026974530160_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=lLFSCXhGG4QAX-MpoZM&_nc_ht=scontent.ftun1-2.fna&oh=a705d1f257f26fc973672f8fd00b04eb&oe=61D1AED2",
    profession: "full stack developer",
  };
  toggleshow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="box">
        <Typography gutterBottom variant="h5" component="div">
          Counter Componet
        </Typography>
        <Button
          variant="contained"
          onClick={this.toggleshow}
          sx={{ margin: 3 }}
        >
          Show
        </Button>
        {this.state.show ? (
          <Card sx={{ maxWidth: 545, minWidth: 400 }}>
            <CardMedia
              component="img"
              height="500"
              image={this.state.imgSrc}
              alt="salem memmi"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {this.state.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {this.state.profession}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {this.state.bio}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
            <Counter />
          </Card>
        ) : null}
      </div>
    );
  }
}

export default App;
