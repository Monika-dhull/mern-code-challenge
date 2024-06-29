import './App.css';
import React, { useState } from 'react';
import { Layout, Menu, Select, Typography } from 'antd';
import Transactions from './components/Transactions';
import Stats from './components/Stats';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const navItems = [
  { key: 1, label: <NavLink to="/">Transactions</NavLink> },
  { key: 2, label: <NavLink to="/stats">Stats</NavLink> },
];

const options = [
  "All Months",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const App = () => {
  const [month, setMonth] = useState(3);

  const handleMonthChange = (value) => {
    setMonth(parseInt(value));
  };

  return (
    <BrowserRouter>
      <Layout>
        <Header className="header">
          <div className="logo">
            <Title level={2} style={{ color: '#55AD9B', margin: 0 }}>Dashboard</Title>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={navItems} className="menu" />
          <Select
            size="large"
            defaultValue={options[month]}
            onChange={handleMonthChange}
            className="select"
            options={options.map((text, i) => ({ value: i, label: text }))}
          />
        </Header>
        <Content className="content">
          <Routes>
            <Route path="/" element={<Transactions month={month} monthText={options[month]} />} />
            <Route path="/stats" element={<Stats month={month} monthText={options[month]} />} />
          </Routes>
        </Content>
        <Footer className="footer">
          Created by <strong>Monika Dhull</strong>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
