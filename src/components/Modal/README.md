Modal 弹窗

## API
| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | Modal是否显示 | bool | false |
| title | 弹窗标题 | string | 'test' |
| cancelText | 取消文案 | string | '取消' |
| confirmText | 确认文案 | string | '确认' |
| cancel | 取消回调 | Function |  |
| confirm | 确认回调 | Function |  |
| children | 内容 | React.node | 

```jsx
import React,{ Component } from 'react';
import { Modal } from 'corki-ui';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  cancel = () => {
    this.setState({
      visible: false
    });
  };

  confirm = () => {
    this.setState({
      visible: false
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.showModal}>Open Modal</button>
        <Modal
          title="hello"
          visible={visible}
          cancel={this.cancel}
          confirm={this.confirm}
        >
          <p>hello</p>
        </Modal>
      </div>
    );
  }
}

export default Index;
```