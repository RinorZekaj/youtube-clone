import React from 'react'
import HistoryPreview from '../../components/history-preview/history-preview.component'
import SeachPreview from '../../components/search-preview/search-preview.component'

import './history-page.styles.scss'

function HistoryPage() {
  return (
    <div className='history-page-container'>
      <p className='title'>Search history</p>
      <SeachPreview />

      <p className='title'>Watch history</p>
      <HistoryPreview />
    </div>
  )
}

export default HistoryPage
