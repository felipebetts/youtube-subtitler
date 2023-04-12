import Head from 'next/head'
import { styled } from '../stitches.config'
import { Box } from '../components/box'
import { VideoForm } from '../components/video-form'
import { Output } from '../components/output'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '../components/tabs'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
})

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600',
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  marginY: 0,
  marginX: 'auto',
  paddingX: '$3',
  paddingY: 0,

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})

export default function Home() {
  return (
    <Box css={{ paddingY: '$6' }}>
      <Head>
        <title>Youtube Transcription &amp; Spanish Translation</title>
      </Head>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>
        <Text as="h1">Youtube Transcription &amp; Spanish Translation</Text>
        <VideoForm />
        <TabsRoot defaultValue='progress'>
          <TabsList aria-label='Output'>
            <TabsTrigger value='progress'>Progress</TabsTrigger>
            <TabsTrigger value='result'>Result</TabsTrigger>
          </TabsList>
          <TabsContent value='progress'>
            <Output>
              This is progress!
            </Output>
          </TabsContent>
          <TabsContent value='result'>
            <Output>
              These are results!
            </Output>
          </TabsContent>
        </TabsRoot>
      </Container>
    </Box>
  )
}
