import { lazy, Suspense } from 'react'
import { Grid } from '@material-ui/core'
import { graphql } from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ChannelQuery } from './__generated__/ChannelQuery.graphql'

// import TextChannel from './Text'
const TextChannel = lazy(() => import('./Text'))
const VoiceChannel = lazy(() => import('./Voice'))

const Channel = () => {
  const params = useParams()
  const data = useLazyLoadQuery<ChannelQuery>(
    graphql`
      query ChannelQuery($channelId: ID!) {
        channel: node(id: $channelId) {
          ...Text_channel

          ... on Channel {
            name
            channelType
          }
        }
      }
    `,
    { channelId: params.channelId }
  )
  if(!data.channel) return <>Channel is not found!</>

  return (
    <>
      <Helmet>
        <title>{data.channel.name}</title>
      </Helmet>
      <Grid container direction='column' style={{ width: '100%', height: '100vh' }}>
        <Suspense fallback='loading...'>
          {
            data.channel.channelType === 'TEXT' ? <TextChannel channelRef={data.channel} /> :
            data.channel.channelType === 'VOICE' ? <VoiceChannel /> :
            null
          }
        </Suspense>
      </Grid>
    </>
  )
}
export default Channel
