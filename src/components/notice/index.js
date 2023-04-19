import { Card, Space } from 'antd';
import { Breadcrumb } from 'antd';
import "@/components/notice/index.css"
const Notice = () => (
    <Space direction="vertical" size={16} className="card">
      <Card
          title={
              <Breadcrumb
          items={[
            {
              title: '讲座',
            },
            {
              title: '竞赛通知',
            },
          ]}
      />}
          extra={<a href="https://www.baidu.com">More</a>}
          style={{
            width: 1152,
          }}
      >
        <p>项目一<a href="https://www.baidu.com">详情</a></p>
        <p>项目二<a href="https://www.baidu.com">详情</a></p>
        <p>项目三<a href="https://www.baidu.com">详情</a></p>
        <p>项目四<a href="https://www.baidu.com">详情</a></p>
        <p>项目五<a href="https://www.baidu.com">详情</a></p>
        <p>项目六<a href="https://www.baidu.com">详情</a></p>
      </Card>
    </Space>
);
export default Notice;