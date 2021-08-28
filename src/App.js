import React from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';
const theme = {
  global: {
     colors: {
     brand: '#228BE6',
   },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

const App = () => {
  return (
  <Grommet theme={theme} full>
    <Box fill>
    <AppBar>
      <Heading level='3' margin='none'>Grommet Tut</Heading>
      <Button icon={<Notification />} onClick={() => {}} />
    </AppBar>
    <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
      <Box flex align='center' justify='center'>
        app body<br/><br/>
        Now that we have an AppBar let's augment the dashboard with a body. We will have a main left panel and a sidebar.<br/><br/>
        We are extending Grommet to take the full viewport height and width. We add a Box to fill all the available space so that we have a flexbox container to rely on. The body is a Box with row direction. The flex prop instructs the Box to expand into the remaining available space (AppBar is taking some of the height in the container). The overflow prop ensures that both the main panel and sidebar fit within the width of the viewport, instead of having to scroll horizontally. 
        <br/><br/>The sidebar box has a medium width with a light-2 background.
      </Box>
      <Box
        width='medium'
        background='light-2'
        elevation='small'
        align='center'
        justify='center'
      >
        sidebar
      </Box>
  </Box>
</Box>
  </Grommet>
  );
}

export default App;
