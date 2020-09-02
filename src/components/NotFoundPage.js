import React from "react";
import Container from "@material-ui/core/Container";
import "./NotFoundPage.scss";
import Typography from "@material-ui/core/Typography";

function NotFoundPage() {
  return (
    <div className="container">
      <Typography component="h1" variant="h1">
        404
      </Typography>
      <Typography component="p" variant="p">
        There's nothing here
      </Typography>
    </div>
  );
}

export default NotFoundPage;
