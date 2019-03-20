图形验证码。

## API
| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| getNumbers | 获取验证码 | Array |  |
| height | 高度 | string | '40' |
| width | 宽度 | string | '192' |

```jsx
import React,{ Component } from 'react';
import { VerificationCode } from 'corki-ui';
import './index.less';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getNumbers = (num) => {
    console.log(num);
  }

  render() {
    return (
      <div className="modal-warrper">
        <div className="mmodal-content"> 
          <h1>图形验证码</h1>
          <fieldset>
            <legend>图形验证码</legend>
            <VerificationCode getNumbers={this.getNumbers} />
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Index;
```