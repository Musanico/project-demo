import { Card, Space } from 'antd';
import { Breadcrumb } from 'antd';
import "@/components/notice/index.css"
const Notice = () => (
    <Space direction="vertical" size={16} className="card">
      <Card
          title={
              <Breadcrumb className="bread-title"
                          separator="|"
          items={[
            {
              title: '讲座',
            },
            {
              title: '竞赛通知',
            },
          ]}
      />}
          extra={<a href="https://www.baidu.com" className="bread-text">More</a>}
          style={{
            width: 350,
          }}
      >
        <p>第十八届大学生服务外包大赛</p>
        <p>第十七届“挑战杯” 全国大学生课外学术科技作品竞赛</p>
        <p>2023年第六届大学生数字技能应用大赛计算机技能应用赛</p>
        <p>2023阿里巴巴全球数学竞赛</p>
        <p>2023年（第16届）中国大学生计算机设计大赛</p>
        <p>2023年第二届创研杯全国大学生英语词汇能力挑战赛</p>
      </Card>
    </Space>
);
export default Notice;