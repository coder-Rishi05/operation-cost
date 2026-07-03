import kneeReplacement from "./kneeReplacement";
import totalKneeReplacement from "./totalKneeReplacement";
import aclTear from "./aclTear";
import meniscusTear from "./meniscusTear";
import hipReplacement from "./hipReplacement";
import spineSurgery from "./spineSurgery";
import shoulderDislocation from "./shoulderDislocation";
import shoulderReplacement from "./shoulderReplacement";
import rotatorCuffRepair from "./rotatorCuffRepair";
import arthroscopy from "./arthroscopy";
import kneeArthroscopy from "./kneeArthroscopy";
import shoulderArthroscopy from "./shoulderArthroscopy";
import carpalTunnel from "./carpalTunnel";

const treatmentDetails = {
  ...kneeReplacement,
  ...totalKneeReplacement,
  ...aclTear,
  ...meniscusTear,
  ...hipReplacement,
  ...spineSurgery,
  ...shoulderDislocation,
  ...shoulderReplacement,
  ...rotatorCuffRepair,
  ...arthroscopy,
  ...kneeArthroscopy,
  ...shoulderArthroscopy,
  ...carpalTunnel,
};

export default treatmentDetails;