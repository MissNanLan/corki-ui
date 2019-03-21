图片预览，可缩小、放大、拖拽。

## API
| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 图片链接，必须是在网络上能够打开 | string |  |
| isShowPreView | 是否显示 | bool | false |
| onClose | 关闭方法 | func | |

```jsx
import React,{ Component } from 'react';
import { Preview } from 'corki-ui';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPreView: false
    }
  }

  showPreview = () => {
    this.setState({
      isShowPreView: true
    });
  }

  onClose = () => {
    this.setState({
      isShowPreView: false
    });
  }

  render() {
    const { isShowPreView } = this.state;
    return (
      <div>
        <button onClick={this.showPreview}>preview</button>
        <Preview
          url="https://img.downfuture.com/13026877921/9y-PLogxmyJudmV23z9HgbPX.jpeg"
          isShowPreView={isShowPreView}
          onClose={this.onClose}
        />
      </div>
    );
  }
}

export default Index;
```