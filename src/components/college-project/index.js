import { Card, Space } from 'antd';
import "@/components/college-project/index.css"
const Project = () => (
    <Space direction="vertical" size={16} className="card">
      <Card
          title="学院立项"
          extra={<a href="https://www.baidu.com">More</a>}
          style={{
            width: 400,
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
export default Project;