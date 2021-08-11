import React from 'react'
import SettingsMenu from '../containers/SettingsMenu'
import SettingLayout from '../containers/SettingsLayout'

const SettingsPage = () => {
  return (
    <div className='setting-container'>
      <div className="setting-section">
        <SettingsMenu />
        <SettingLayout />
      </div>
    </div>

  )
}

export default SettingsPage;