import { Carousel } from 'antd';
import "@/components/rotograph/index.css"

const contentStyle = {
  height: '422px',
  width: '1152px',
};
const Graph = () => (
    <Carousel autoplay className="graph">
      <div>
        <img src={require("@/assets/1.jpg")} alt="" style={contentStyle}/>
      </div>
      <div>
        <img src={require("@/assets/2.jpg")} alt="" style={contentStyle}/>
      </div>
      <div>
        <img src={require("@/assets/3.jpg")} alt="" style={contentStyle}/>
      </div>
    </Carousel>
);
export default Graph;