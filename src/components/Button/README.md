按钮，支持不同颜色展示

## API
| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClick | 点击按钮时的回调 | func | (event) => void |
| disabled | 按钮失效状态 | boolean | false |
| htmlType | 设置 button 原生的 type 值 | string | 'button' |
| type | 设置按钮类型，可选值为 primary danger或者不设 | string |  |
| className | 样式设置 | string |  |

```jsx
import React,{ Component } from 'react';
import { Button } from 'corki-ui';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onClick = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div>
        <Button
            onClick={this.onClick}
            className="btn"
        >
            default
        </Button>
      </div>
    );
  }
}

export default Index;
```