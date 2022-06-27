import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
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
  const { list } = props
  const [activeTab, setActiveTab] = useState(0)
  const tabChange = (index: number) => {
    console.log(Object.keys(tabMap)[index])

    setActiveTab(index)
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
        <Tabs onChange={tabChange}>
          <TabList>
            {Object.keys(tabMap).map((key) => (
              <Tab key={key}>{tabMap[key as TabKey]}</Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <List spacing={5}>
                {list.map((item: any) => (
                  <ListItem key={item.id}>
                    <Topic topic={item} />
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
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
