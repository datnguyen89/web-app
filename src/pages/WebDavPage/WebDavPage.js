import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { WebDavPageWrapper } from './WebDavPageStyled'
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout'
import { Helmet } from 'react-helmet/es/Helmet'
const { createClient } = require("webdav");

const WebDavPage = props => {
  const client = createClient(
    "https://webdav.example.com/marie123",
    {
      username: "marie",
      password: "myS3curePa$$w0rd"
    }
  );
  const getListItem = async () => {
    const directoryItems = await client.getDirectoryContents("/");
    return directoryItems;
  }
  useEffect(() => {
    let lst = getListItem();
    console.log(lst)
  }, [])
  return (
    <DashboardLayout>
      <Helmet>
        <title>WebDav</title>
      </Helmet>
      <WebDavPageWrapper>

      </WebDavPageWrapper>
    </DashboardLayout>

  )
}

WebDavPage.propTypes = {}

export default WebDavPage