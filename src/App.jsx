import {
  CalculatorOutlined,
  RedditOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MoneyCollectOutlined,
  ClockCircleOutlined,
  UserOutlined, 
  FileTextOutlined
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Image, Space, Avatar, Switch } from "antd";
import { useState } from "react";
import HelloWorld from "./HelloWorld/Show";
import ChessBoard from "./ChessBoard/ChessBoard";
import Calculator from "./Calculator/Calculator";
import ConvertMoney from "./ConvertMoney/Convert";
import Pomodoro from "./Pomodoro/PomodoroClock";
import Quote from "./Quote/Quote";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "./Images/logo.png"
import flagUs from "./Images/flagUs.png"
import flagVi from "./Images/flagVi.png"


const { Header, Sider, Content, Footer } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();
  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  const colorBgContainer = theme.useToken("color-bg-container");
  return (
    <BrowserRouter>
      <Layout className="layoutAll">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Header className="headerLogo">
              <Image
                width={40}
                src={logo}
                preview={false}
              />
              <Space style={{
                fontSize:18,
                color: 'red',
              }}>NTS</Space>
          </Header>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{fontSize: 16}}
            items={[
              {
                key: "1",
                icon: <RedditOutlined />,
                label: <Link to={"/helloworld"}>{t("hello")}</Link>,
              },
              {
                key: "2",
                icon: <MoneyCollectOutlined />,
                label: <Link to={"/convertmoney"}>{t("convert")}</Link>,
              },
              {
                key: "3",
                icon: <AppstoreOutlined />,
                label: <Link to={"/chessboard"}>{t("chess")}</Link>,
              },
              {
                key: "4",
                icon: <CalculatorOutlined />,
                label: <Link to={"/calculator"}>{t("calculator")}</Link>,
              },
              {
                key: "5",
                icon: <ClockCircleOutlined />,
                label: <Link to={"/pomodoro"}>{t("pomodoro")}</Link>,
              },
              {
                key: "6",
                icon: <FileTextOutlined />,
                label: <Link to={"/quote"}>{t("quote")}</Link>,
              }
            ]}
          />
        </Sider>
        <Layout style={{ minHeight: "100vh" }}>
          <Header className="header">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="header-button"
            />
            
            <Space className="header-title">Mini App</Space>
            
            <Space>
              <Space>
                <Space wrap size={10}>
                  <Avatar 
                    size={30} 
                    style={{
                      backgroundColor: '#f56a00',
                    }} 
                    icon={<UserOutlined />} 
                  />
                  <Space style={{fontSize: 17}}>Nguyễn Thanh Sơn</Space>
                </Space>
              </Space>

              <Space direction="vertical">
                <Switch 
                checkedChildren={<img src={flagUs} value="eng" width="30px" height="20px" />} 
                unCheckedChildren={<img src={flagVi} value="vie"  width="30px" height="18px" />} 
                defaultChecked ={i18n.language === 'eng'}
                onChange={(checked) => changeLanguage(checked ? 'eng' : 'vie')}
                />
              </Space>
            </Space>
          </Header>
          <Content
            className="contentApp"
            style={{ backgroundColor: colorBgContainer }}
          >
            <Routes>
              <Route path="/helloworld" element={<HelloWorld />} />
              <Route path="/convertmoney" element={<ConvertMoney />} />
              <Route path="/chessboard" element={<ChessBoard />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/pomodoro" element={<Pomodoro />} />
              <Route path="/quote" element={<Quote />} />
            </Routes>
          </Content>
          <Footer className="footer">
            Ant Design ©2023 Created by Thanh Son
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
