import { makeStyles } from '@material-ui/core/styles';
//import { withStyles } from '@material-ui/styles';

// ejemplo makeStyles
//import Accordion from '@material-ui/core/Accordion';
//import AccordionSummary from '@material-ui/core/AccordionSummary';
//import AccordionDetails from '@material-ui/core/AccordionDetails';

// ejemplo withStyle
/*
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
*/

//import Typography from '@material-ui/core/Typography';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import GridComp from "./components/Grid";
import './App.css';

/*
const Accordion = withStyles({
  background: "transparent",
  margin: "20px 0px",
  border: "16px",
  borderRadius: "16px",
  borderTop: "none"
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {

  }
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
  root: {

  }
})(MuiAccordionDetails);
*/

// Ejemplo con makeStyles
const useStyle = makeStyles((theme) => ({
  // nuestras propiedades dentro de nuestro useStyle representan nuestros selectores
  // como si fuera el CSS
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
}));

function App() {
  const classes = useStyle();

  return (
   <div className={classes.root}>
      <GridComp></GridComp>
      {/*<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>*/}
    </div> 
  );
}

export default App;
