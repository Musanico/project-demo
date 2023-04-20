import {Breadcrumb, Calendar, Card, theme} from 'antd';
import "@/components/calendar/index.css"

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
const Cal = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
      <div className="cal-all">
        <Card
            title={
              <Breadcrumb
                  className="cal-title"
                  separator="|"
                  items={[
                    {
                      title: '待办事项',
                    },
                  ]}
              />}
            style={{
              width: 200,
              height: 200,
            }}
            className="cal-card"
        >
        </Card>
      <div style={wrapperStyle} className="cal">
        <Calendar  fullscreen={false} onPanelChange={onPanelChange} />
      </div>
      </div>
  );
};
export default Cal;