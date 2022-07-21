import {
  Box,
  HStack,
  Avatar,
  Text,
  Tag,
  Link as ChakraLink,
  Button,
} from '@chakra-ui/react'
import moment from 'moment'
import { tabMap, TabKey } from '../pages'

interface ITopic {
  author: {
    avatar_url: string
  }
  reply_count: number
  visit_count: number
  tab: Exclude<TabKey, 'all'>
  title: string
  last_reply_at: string
  top: boolean
}

const tagColorMap = {
  good: 'green',
  share: 'blue',
  ask: 'orange',
  job: 'red',
  dev: 'purple',
}

const Topic = ({ topic }: { topic: ITopic }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <HStack>
        <Avatar src={topic.author.avatar_url} />
        <div>
          <Text display="inline" fontSize="lg" color="teal.600">{topic.reply_count}</Text>/{topic.visit_count}
        </div>
        {topic.top && <Tag colorScheme="cnode">置顶</Tag>}
        <Tag colorScheme={tagColorMap[topic.tab]}>{tabMap[topic.tab]}</Tag>
        <ChakraLink href="/">
          <Text fontWeight="500">{topic.title}</Text>
        </ChakraLink>
      </HStack>
      <Box>
        <Text>
          {moment(topic.last_reply_at, 'YYYY-MM-DD').startOf('day').fromNow()}
        </Text>
      </Box>
    </Box>
  )
}

export default Topic
