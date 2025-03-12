import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import styles from "./AccordionExpandIcon.module.css"
// TODO gör så bara en kan vara uppe i taget, plus den aktiva ska byta färg. https://mui.com/material-ui/react-accordion/


export default function AccordionExpandIcon() {
  //Håller koll på öppen panel:
  const [expanded, setExpanded] = React.useState(null);

  //Hanterar expandering
  const handleChange = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : null);
  };

  return (
    <div>
      <Accordion expanded={expanded ==='panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
          className={expanded === 'panel1' ? styles.activeAccordion : styles.accordionSummary}
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Shopping</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/vinterjackor" className={styles.accordionLink}>Vinterjackor</Link>
          </Typography>
          <Typography>
            <Link to="/pufferjackor" className={styles.accordionLink}>Pufferjackor</Link>
            </Typography>
            <Typography>
            <Link to="/kappor" className={styles.accordionLink}>Kappor</Link>
            </Typography>
            <Typography>
            <Link to="trenchcoats" className={styles.accordionLink}>Trenchcoats</Link>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          className={expanded === 'panel2' ? styles.activeAccordion : styles.accordionSummary}
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Mina Sidor</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            <Link to="/mina-ordrar" className={styles.accordionLink}>Mina ordrar</Link>
          </Typography>
          <Typography>
            <Link to="/mitt-konto" className={styles.accordionLink}>Mitt konto</Link>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          className={expanded === 'panel3' ? styles.activeAccordion : styles.accordionSummary}
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Kundtjänst</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            <Link to="/returpolicy" className={styles.accordionLink}>Returpolicy</Link>
          </Typography>
          <Typography>
            <Link to="/integritetspolicy" className={styles.accordionLink}>Integritetspolicy</Link>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <small className={styles.accordionCopyright}>&copy; Freaky Fashion</small>
    </div>
  );
}