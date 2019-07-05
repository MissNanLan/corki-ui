Radio 单选框

## API
| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| onChange | 变化时回调函数 | func | |

```jsx
import React,{ Component } from 'react';
import { Radio } from 'corki-ui';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Radio>
            radio
        </Radio>
      </div>
    );
  }
}

export default Index;
```