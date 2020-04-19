import React, { Fragment, Component } from 'react'
import TabSingleTeamComponent from '../TabSingleTeamComponent/TabSingleTeamComponent'

import './TableRegularComponent.css'
import fnaticLogo from '../../assets/images/teams/fnatic.svg'
import g2Logo from '../../assets/images/teams/g2.png'
import origenLogo from '../../assets/images/teams/origen.png'
import madlionsLogo from '../../assets/images/teams/mad-lions.png'
import misfitsLogo from '../../assets/images/teams/misfits.png'
import rogueLogo from '../../assets/images/teams/rogue.png'
import excelLogo from '../../assets/images/teams/excel.png'
import schalkeLogo from '../../assets/images/teams/schalke.png'
import skLogo from '../../assets/images/teams/sk.png'
import vitalityLogo from '../../assets/images/teams/vitality.png'


/**
 * @desc This class is hardcoded (Ugly) to be able to show the regular season standings since it was not available afaik
 * in the API.
 * @author Ted
 */
export default class TableRegularComponent extends Component {

  render() {
    return (
      <Fragment>
        <div className="regular-season-table">
          <TabSingleTeamComponent placing={1} teamname={'G2 Esports'} winratio={'15-3'} logo={g2Logo} />
          <TabSingleTeamComponent placing={2} teamname={'Fnatic'} winratio={'13-5'} logo={fnaticLogo} />
          <TabSingleTeamComponent placing={3} teamname={'Origen'} winratio={'13-5'} logo={origenLogo}/>
          <TabSingleTeamComponent placing={4} teamname={'MAD Lions'} winratio={'11-7'} logo={madlionsLogo}/>
          <TabSingleTeamComponent placing={5} teamname={'Misfits'} winratio={'10-8'} logo={misfitsLogo} />
          <TabSingleTeamComponent placing={6} teamname={'Rogue'} winratio={'9-9'} logo={rogueLogo} />
          <TabSingleTeamComponent placing={7} teamname={'Excel Esports'} winratio={'7-11'} logo={excelLogo} />
          <TabSingleTeamComponent placing={8} teamname={'Schalke 04'} winratio={'6-12'} logo={schalkeLogo}/>
          <TabSingleTeamComponent placing={9} teamname={'SK Gaming'} winratio={'4-14'} logo={skLogo}/>
          <TabSingleTeamComponent placing={10} teamname={'Team Vitality'} winratio={'2-16'} logo={vitalityLogo}/>
        </div>
      </Fragment>
    )
  }
}
