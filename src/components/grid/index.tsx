import React, { FC } from 'react'

import { Container, Row } from './styles'

const Grid: FC = () => {
  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(4)].map((_, colIndex) => <div data-cy="block"></div>)
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
