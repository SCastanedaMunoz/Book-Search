import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
    color: "white",
    marginTop: ".5em",
    marginBottom: ".5em",
    padding: "1em",
    backgroundColor: "#424242",
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    paddingTop: "0.1em",
    margin: 0,
  },
  author: {
    fontSize: 14,
    paddingTop: "0.25em",
    fontStyle: "italic",
    margin: 0,
  },
  button: {
    marginLeft: "1em",
  },
  description: {
    margin: 0,
  },
}));

const getTitle = (title, classes) => {
  return (
    <Grid item xs={12}>
      <Typography className={classes.title} variant="h6">
        {title}
      </Typography>
    </Grid>
  );
};

const getSubtitle = (subtitle, classes) => {
  return subtitle ? (
    <Grid item xs={12}>
      <p className={classes.subtitle} variant="h6">
        {subtitle}
      </p>
    </Grid>
  ) : (
    <></>
  );
};

const getAuthor = (author, classes) => {
  return (
    <Grid item xs={12}>
      <p className={classes.author} variant="h6">
        Written By {author.join(", ")}
      </p>
    </Grid>
  );
};

function ResultCard(title, subtitle, authors, description, thumbnail, link) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          {getTitle(title, classes)}
          {getSubtitle(subtitle, classes)}
          {getAuthor(authors, classes)}
        </Grid>
        <Grid
          item
          xs={12}
          sm
          container
          justify="flex-end"
          alignItems="baseline"
        >
          <Button
            href={link}
            target="_blank"
            className={classes.button}
            variant="contained"
          >
            View
          </Button>
          <Button className={classes.button} variant="contained">
            Save
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <img src={thumbnail} alt={`${title} Cover Art`} />
        </Grid>
        <Grid item xs={12} sm>
          <p className={classes.description}>{description}</p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ResultCard;
