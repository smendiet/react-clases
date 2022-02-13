import React, { Fragment } from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import "../App.css";
import Container from "@material-ui/core/Container"
import { Grid } from "@material-ui/core";
import "../index.css"

/*
const useStyle = makeStyles((theme) => ({
  // nuestras propiedades dentro de nuestro useStyle representan nuestros selectores
  // como si fuera el CSS
  root: {
    width: '25%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
}));
*/

const GridComp = () => {
  //const classes = useStyle();

  return (
    <Fragment>
      <Container className="container">
        <Grid container spacing={3}>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 1</Grid>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 2</Grid>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 3</Grid>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 4</Grid>
          <Grid className="gridItem" item sm={6} xs={12}>
            Grid item con container
            <Grid container>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <div className="anidado">Grid 5</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default GridComp;