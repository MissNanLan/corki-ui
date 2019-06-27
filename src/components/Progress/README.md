进度条

## API
| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| strokeColor | 进度条颜色 | String | 'red' |
| percent | 进度条百分比 | number | 0 |

```jsx
import React,{ Component } from 'react';
import { Progress } from 'corki-ui';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Progress strokeColor="blue" percent={10}  />
      </div>
    );
  }
}

export default Index;
```