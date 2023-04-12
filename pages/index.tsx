import Head from 'next/head'
import { styled } from '../stitches.config'
import { Box } from '../components/box'
import { VideoForm } from '../components/video-form'
import { Output } from '../components/output'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '../components/tabs'
import { useState } from 'react'
import { extractVideoIdFromUrl, processVideo } from '../utils/api-client'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
})

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600',
  cursor: 'pointer',
  '&:hover': {
    opacity: '0.8'
  }
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

  const [isProcessing, setProcessing] = useState(false)
  const [progressOutput, setProgressOutput] = useState('')
  const [activeTab, setActiveTab] = useState('progress')
  const [resultOutput, setResultOutput] = useState('')

  const handleStartProcessing = async (videoUrl: string) => {
    const videoId = extractVideoIdFromUrl(videoUrl)
    console.log('videoId:', videoId)
    if (typeof videoId === 'string') {
      setResultOutput('')
      setProcessing(true)

      const spanishSubs = await processVideo(videoId, message => {
        setProgressOutput(prev => prev + message)
      })
      if (spanishSubs) {
        setResultOutput(spanishSubs)
        setActiveTab('result')
      }

      setProcessing(false)
    } else {
      alert('Invalid URL')
    }
  }


  return (
    <Box css={{ paddingY: '$6' }}>
      <Head>
        <title>Youtube Transcription &amp; Portuguese Translation</title>
      </Head>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>
        <Text as="h1" css={{ marginBottom: '0.2em' }}>Crie legendas em portugues para aquela musica gringa do youtube</Text>
        <Text css={{ marginY: 0 }}>
          Powered by <Link href='https://platform.openai.com/docs/introduction' target='_blank' rel='noreferrer'>OpenAI</Link>
        </Text>
        <Text as='h3'>
          Basta adicionar a url da musica no youtube e apertar o botao! Observe a magica acontecer...
        </Text>
        <VideoForm
          onSubmit={handleStartProcessing}
          isProcessing={isProcessing}
        />
        <TabsRoot value={activeTab} onValueChange={setActiveTab}>
          <TabsList aria-label='Output'>
            <TabsTrigger value='progress'>Progress</TabsTrigger>
            <TabsTrigger value='result'>Result</TabsTrigger>
          </TabsList>
          <TabsContent value='progress'>
            <Output>
              {progressOutput}
            </Output>
          </TabsContent>
          <TabsContent value='result'>
            <Output>
              {resultOutput}
            </Output>
          </TabsContent>
        </TabsRoot>
      </Container>
    </Box>
  )
}
