import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"

import ExpandMore from "@mui/icons-material/ExpandMore"

function Policies() {
  return (
    <div style={{ margin: "40px", borderRadius: "20px" }}>
      {" "}
      <Accordion sx={{ borderRadius: "20px", backgroundColor: "#c88d6f" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Reservations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Reserving appointments: A credit card must be held on file in order
            to reserve an appointment. This pertains to all guests, existing and
            new.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ borderRadius: "20px", backgroundColor: "#d6bfc2" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Cancellations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul style={{ marginLeft: "10px" }}>
              <li>
                When cancelling an appointment, The Blonde Boheme respectfully
                asks for a <strong>FULL</strong> 48 hours of notice.
              </li>
              <li>
                Cancellations made less than a full 48 hours in advance will
                result in a <strong>NON-REFUNDABLE</strong> 50% service charge.{" "}
              </li>
              <li>
                The Blonde Boheme uses a booking service which sends a{" "}
                <strong>text </strong>
                reminder of your upcoming appointment 72 hours prior- requiring
                one click confirmation.
              </li>
              <li>
                Cancellations must be performed through text (585)880-2679 not
                through social media. Cancellations through social media will be
                invalid .
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ borderRadius: "20px", backgroundColor: "#c88d6f" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Late Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul style={{ marginLeft: "10px" }}>
              <li>
                The Blonde Boheme understands that delays happen, however, she
                must keep her other scheduled guests on time as well. If a
                guest's service cannot <strong>begin</strong> (guest IN CHAIR)
                at <strong>15 minutes</strong> past their scheduled time, the
                appointment will be rescheduled, resulting in a NON-REFUNDABLE
                50% service charge.
              </li>
              <li>
                If you are running behind to an appointment, The Blonde Boheme
                asks that you please text her with an ETA as soon as you safely
                can .
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ borderRadius: "20px", backgroundColor: "#d6bfc2" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>No Shows</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul style={{ marginLeft: "10px" }}>
              <li>
                No-showing an appointment results in a 100% service charge to
                the card held on file. No-show guests will not be rebooked.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ borderRadius: "20px", backgroundColor: "#c88d6f" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Deposits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul style={{ marginLeft: "10px" }}>
              <li>
                A <strong>NON-REFUNDABLE</strong> 50% service deposit is
                required for all first time guests. This 50% deposit will go
                towards your future service total.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Policies
