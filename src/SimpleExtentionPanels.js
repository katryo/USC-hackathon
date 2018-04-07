import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Switch from "material-ui/Switch";
import { FormControlLabel, FormGroup } from "material-ui/Form";

import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import SimpleNestedList from "./SimpleNestedList";

function SimpleExpansionPanelDetails(props) {
  const values = ["aa", "bb"];
  const details = values.map(v => {
    return (
      <div>
        <ExpansionPanelDetails>{v}</ExpansionPanelDetails>
      </div>
    );
  });
  return { details };
}

function SimpleExpansionPanels(props) {
  const devicesPackets = props ? props.devicesPackets : [];
  const panelItems = devicesPackets.map(dp => (
    <ExpansionPanel key={dp.name}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        {dp.name}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <p>source IP: aaaaa</p>
          <p>destination IP: aaaaa</p>
          <FormGroup row>
            <FormControlLabel
              control={<Switch value="checkedA" />}
              label="Allow sending/receiving this kind of packets?"
            />
          </FormGroup>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ));
  return <div>{panelItems}</div>;
}

export default SimpleExpansionPanels;
