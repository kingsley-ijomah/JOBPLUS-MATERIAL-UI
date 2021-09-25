import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Controls from '../components/controls/Controls';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.common.beta}`,
    backgroundColor: theme.palette.common.light,
    padding: '15px',
    borderRadius: '3px',
    boxShadow: `1px 2px 3px 1px ${theme.palette.common.elements}`,
    marginBottom: '20px'
  },
  header: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, auto)',
    gridTemplateColumns: 'repeat(2, auto)',
    gridGap: '0.5rem',
  },
  title: {
    gridRow: '1 / 2',
    gridColumn: '1 / 2',

    ...theme.fonts.extraBold,
    fontSize: '1.1rem',
    color: theme.palette.common.beta,
  },
  saved: {
    gridRow: '1 / 2',
    gridColumn: '2 / 3',
    justifySelf: 'right',
  },
  company: {
    gridRow: '2 / 3',
    gridColumn: '1 / 2',
    fontSize: '0.8rem',
    margin: 0,
    '& span': {
      color: theme.palette.common.beta,
    }
  },
  items: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '0.5rem',
    listStyle: 'none',
    margin: '0.7rem 0',
    padding: 0,
    '& li': {
      display: 'flex',
      '& img': {
        marginRight: '0.5rem',
      }
    },
    '& li:nth-of-type(2)': {
      justifySelf: 'right'
    }
  },
  details: {
    fontSize: '0.9rem',
    marginBottom: 0,
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    }
  },
  cta: {
    fontSize: '0.9rem',
    textAlign: 'right',
    display: 'block',
    color: 'inherit',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: '0',
    marginBottom: '20px',
    '& li': {
      backgroundColor: theme.palette.common.skills,
      padding: '7px 9px',
      fontSize: '14px',
      borderRadius: '16px',
      marginRight: '10px',
      marginBottom: '10px',
    }
  }
}))

export default function Listing(props) {
  const classes = useStyles();
  const { detailed = true } = props;

  return (
    <>
      <div className={classes.root}>
        <header className={classes.header}>
          <Typography className={classes.title} variant="h1">Regulatory Affairs Senior Manager</Typography>
          <img className={classes.saved} src="images/star-saved.svg" alt="" />
          <p className={classes.company}>Posted by <span>Koco Media</span></p>
        </header>

        <ul className={classes.items}>
          <li><img src="images/money.svg" alt="" /><b>Salary negotiable</b></li>
          <li><img src="images/location.svg" alt="" />Heyes, <b>Uxbridge</b></li>
          <li><img src="images/timer.svg" alt="" />Contract, full-time</li>
        </ul>

        {!detailed ? (
          <>
            <p className={classes.details}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, asperiores ullam minus at <b><Link to="/">Read more...</Link></b>
            </p>
            <Link className={classes.cta} to="/">Withdraw application</Link>
          </>
        ) : (
          <Controls.FormGroupCustom className={classes.button}>
            <Controls.ButtonCustom text="Apply Now" />
          </Controls.FormGroupCustom>
        )}
      </div>

      { detailed ? (
        <>
          <p className={classes.details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae delectus
            culpa dolore sequi debitis eligendi veniam reprehenderit, deleniti voluptate
            perferendis consectetur quibusdam iure suscipit, quaerat quia, natus eum vel.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae delectus culpa
            dolore sequi debitis eligendi veniam reprehenderit, deleniti voluptate perferendis consectetur
            quibusdam iure suscipit, quaerat quia, natus eum vel.
          </p>

          <h3>Required skills</h3>

          <ul className={classes.skills}>
            <li>Html</li>
            <li>CSS</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>React</li>
            <li>PHP</li>
            <li>C#</li>
            <li>Ruby</li>
            <li>Django</li>
            <li>React</li>
            <li>PHP</li>
            <li>C#</li>
            <li>Ruby</li>
            <li>Django</li>
          </ul>

          <div className={classes.apply}>
            <Controls.FormGroupCustom className={classes.button}>
              <Controls.ButtonCustom text="Apply Now" />
            </Controls.FormGroupCustom>
          </div>
        </>
      ) : ''}
    </>
  )
}