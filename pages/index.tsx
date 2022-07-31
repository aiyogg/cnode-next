import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import {
  Text,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
} from '@chakra-ui/react'

import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Topic from '../components/Topic'

export const tabMap = {
  all: '全部',
  good: '精华',
  share: '分享',
  ask: '问答',
  job: '招聘',
  dev: '客户端测试',
}
export type TabKey = keyof typeof tabMap

const limit = 20

const Index = (props: any) => {
  const router = useRouter()
  const { tab = 'all', page = 1 } = router.query
  const { list } = props
  const [tabIndex, setTabIndex] = useState(Object.keys(tabMap).indexOf(tab as TabKey))

  const tabChange = (index: number) => {
    const tabKey = Object.keys(tabMap)[index]
    console.log(tabKey)
    setTabIndex(index)
    router.push(`/?tab=${tabKey}`)
  }

  return (
    <Container height="100vh">
      <Header />
      <Box
        width="100%"
        maxW="1280px"
        mt="40px"
        padding="4"
        // bg="white"
        boxShadow="lg"
      >
        <Tabs index={tabIndex} onChange={tabChange}>
          <TabList>
            {Object.keys(tabMap).map((key) => (
              <Tab key={key}>{tabMap[key as TabKey]}</Tab>
            ))}
          </TabList>

          <List spacing={5} mt="4">
            {list.map((item: any) => (
              <ListItem key={item.id}>
                <Topic topic={item} />
              </ListItem>
            ))}
          </List>
        </Tabs>
      </Box>

      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
    </Container>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const { tab = 'all' } = query
  const tabKey = tab as TabKey
  const page = Number(query.page) || 1

  const url = `https://cnodejs.org/api/v1/topics?tab=${tabKey}&page=${page}&limit=${limit}`
  console.log(url)

  const res = await fetch(url)
  const data = await res.json()
  let list = []
  if (data.success) list = data.data

  return {
    props: {
      list,
    },
  }
}
