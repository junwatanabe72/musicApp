import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { appTitle } from 'utils/constant'
import HowTo from 'components/organisms/top/HowTo'
import Layout from 'components/templetes/Layout'
import Button from '@material-ui/core/Button'
import { Padding } from 'utils/styled/common'
import { CLEAR } from 'utils/constant/number'
import SelectArtist from 'components/organisms/top/SelectArtist'

const TopPage: React.FC = () => {
  const [targetArtist, setTargetArtist] = useState<string>('aimyon')
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTargetArtist(event.target.value as string)
  }
  const contents = [
    <h1 key={0}>{appTitle}</h1>,
    <HowTo key={1} />,
    <SelectArtist
      key={2}
      targetArtist={targetArtist}
      handleChange={handleChange}
    />,
    <Button key={3} size="large" variant="contained" color="primary">
      <Link to={{ pathname: `/game`, state: targetArtist }}>Start</Link>
    </Button>,
  ]

  return (
    <Layout>
      {contents.map((content, num) => {
        return (
          <Padding key={num} top={CLEAR.SMALL}>
            {content}
          </Padding>
        )
      })}
    </Layout>
  )
}
export default TopPage
