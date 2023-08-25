import {
  Box,
  Button,
  Center,
  Container,
  MantineProvider,
  Space,
  Stack,
  Text,
  Transition,
} from '@mantine/core';
import { useCallback, useState } from 'react';

import Form from './Form';
import Header from './Header';
import QrDisplay from './QrDisplay';
import SaveImgButton from './SaveImgButton';

const TRANSITION_DURATION = 400;
function App() {
  const [showQr, setShowQr] = useState(false);
  const [displayedUrl, setDisplayedUrl] = useState<string | undefined>(
    undefined,
  );

  const handleCreateQr = useCallback((url: string) => {
    setDisplayedUrl(url);
    setShowQr(true);
  }, []);

  const handleResetQr = useCallback(() => {
    setShowQr(false);
    setTimeout(() => {
      setDisplayedUrl(undefined);
    }, TRANSITION_DURATION);
  }, []);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: 'dark' }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          paddingTop: '2rem',
        }}
      >
        <Center>
          <Stack spacing="xl">
            <Header />
            <Form onSave={handleCreateQr} />
            <Transition
              mounted={showQr}
              transition="pop"
              duration={TRANSITION_DURATION}
              timingFunction="ease"
            >
              {styles => (
                <Stack style={styles}>
                  <Center>
                    <Text weight={500}>{displayedUrl}</Text>
                  </Center>
                  <Center>
                    <QrDisplay value={displayedUrl ?? ''} />
                  </Center>
                  <Box sx={{ display: 'flex' }}>
                    <SaveImgButton url={displayedUrl ?? ''} />
                    <Space w="md" />
                    <Button color="gray" onClick={handleResetQr} fullWidth>
                      Start over
                    </Button>
                  </Box>
                </Stack>
              )}
            </Transition>
          </Stack>
        </Center>
      </Container>
    </MantineProvider>
  );
}

export default App;
