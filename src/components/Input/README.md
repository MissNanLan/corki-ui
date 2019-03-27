输入框，基础使用

## API
| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 样式 | string |
| defaultValue | 输入框默认内容 | string |  |
| disabled | 是否禁用状态，默认为 false | bool | false |
| type | 声明 input 类型，同原生 input 标签的 type 属性 | string | text |
| value | 输入框内容 | string |  |
| onChange | 输入框内容变化时的回调 | function(e) |  |

```jsx
import React,{ Component } from 'react';
import { Input } from 'corki-ui';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Input
                placeholder="Basics Input"
            />
        );
    }
}

export default Index;
```