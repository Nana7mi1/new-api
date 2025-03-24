import React from 'react';
import ShareChannelsTable from '../../components/ShareChannelsTable';
import { Layout } from '@douyinfe/semi-ui';
import { useTranslation } from 'react-i18next';

const Share = () => {
  const { t } = useTranslation();
  return (
    <>
      <Layout>
        <Layout.Header>
          <h3>{t('分享渠道')}</h3>
        </Layout.Header>
        <Layout.Content>
          <ShareChannelsTable />
        </Layout.Content>
      </Layout>
    </>
  );
};

export default Share; 