Switch开关

## API
| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| onChange | 变化时回调函数 | func | |
| className | Switch 器类名 | string | |

```jsx
import React,{ Component } from 'react';
import { Switch } from 'corki-ui';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Switch />
      </div>
    );
  }
}

export default Index;
```