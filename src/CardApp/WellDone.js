import React from 'react'
import { Box, Text } from '../components'
import styled from 'styled-components'
import { confetti } from 'dom-confetti';

const paraProps = {
  mt: '2.2rem',
  fontSize: '2.2rem',
  fontWeight: '300',
}

const StyledButton = styled.a`
  background: white;
  border-radius: 50px;
  align-self: center;
  padding: 2.4rem 4.6rem;
  margin-top: 4rem;
  box-shadow: 0px 7px 12px -8px rgba(0, 0, 0, 0.75);
`

class WellDone extends React.PureComponent {
  componentDidMount() {
    confetti(
      document.getElementById('confetti-target'),
      {
        spread: '100'
      }
    );
  }

  render() {
    return (
      <Box
        alignItems="center"
        bg="rgb(113, 69, 154)"
        flexDirection="column"
        color="white"
        py="4rem"
        height="100vh"
      >
        <Box mt="3rem" maxWidth="650px" flexDirection="column" px="3rem">
          <Text lineHeight="1.2" mb="2rem" fontSize="2.6rem" fontWeight="600">
            Well Done!
          </Text>

          <Text {...paraProps}>
            The next step is to find out what education program can help you work on these important challenges.
          </Text>

          <Text {...paraProps}>
            Enroll in SparkPath to get started.
          </Text>
        </Box>

        <StyledButton href="https://mysparkpath.com/">
          <Text fontSize="2rem" fontWeight="600" textTransform="uppercase" id="confetti-target">
            Enroll
          </Text>
        </StyledButton>
      </Box>
    )
  }
}

export default WellDone
