import {Breadcrumb, Card} from 'antd';
import "@/components/college-project/index.css"
const Project = () => (
      <Card
          title={
            <Breadcrumb className="bread-title"
                        separator="|"
                        items={[
                          {
                            title: '学院立项',
                          },
                        ]}
            />}
          extra={<a href="https://www.baidu.com">More</a>}
          style={{
            width: 250,
          }}
          className="card"
      >
        <p>项目一: 基于神经网络实现..</p>
        <p>项目二: 大数据政策检索系...</p>
        <p>项目三: 人工智能实现智能...</p>
        <p>项目四: 基于神经网络实现...</p>
        <p>项目五: 大数据政策检索系...</p>
        <p>项目六: 人工智能实现智能...</p>
      </Card>
);
export default Project;