import React, { Component } from 'react';
import LeftSection from "./components/LeftSection/MainLeftSection"
import RightSection from './components/RIghtSection/MainRightSection';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';

class App extends Component {
  state = {
  }

  componentDidMount() {
    const localData = sessionStorage
    if (localData.length === 0) {
      this.setState(
        {
          leftSection: [
            { name: "Name", value: "Vu Hoang Duc Hieu" },
            { name: "Description", value: "Alo Alo 1234" }
          ],
          rightSection: [
            { name: "Học vấn", value: "Sinh viên năm 4 Đại Học Bách Khoa Hà Nội, CPA 2.5" },
            { name: "Khả năng lập trình", value: "Nắm được cơ bản Javascript,Nodejs và cơ sở dữ liệu NoSql: MongoDB." },
            { name: "Sở Thích", value: "Chơi game, kiếm tiền và tiêu tiền." },
            { name: "Mong muốn", value: "Trở thành một fulstack web developer giàu có." }
          ]
        }
      )
    } else {

    }
  }

  ChangeLeftContent = (name, value) => {
    if (this.state.leftSection) {
      let cloneData = this.state.leftSection.slice()
      console.log(cloneData)
      let leftDataLength = this.state.leftSection.length
      for (let index = 0; index < leftDataLength; index++) {
        if (cloneData[index].name === name) {
          cloneData[index].value = value
          this.setState({ leftSection: [...cloneData] })
        }

      }
    }

  }

  render() {
    return (
      <div className="App">
        <main>
          <LeftSection data={this.state} ChangeLeftContent={this.ChangeLeftContent} />
          <RightSection data={this.state} />
        </main>
      </div>

    );
  }
}

export default App;
