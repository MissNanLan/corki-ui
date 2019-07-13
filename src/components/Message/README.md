Message 全局展示操作反馈信息

## API
| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open('test', 3) | 打开全局消息通知 | Function |  |
| destroy | 清除所有消息通知 | Function |  |

```jsx
import React,{ Component } from 'react';
import { message } from 'corki-ui';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showMessage = () => {
    message.open('hello', 3);
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.showMessage}>Display normal Message</button>
      </div>
    );
  }
}

export default Index;
```